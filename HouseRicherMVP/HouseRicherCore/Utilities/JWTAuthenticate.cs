using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using HouseRicherCore.ModelAPI;

namespace HouseRicherCore.Utilties {
    public class JWTAuthenticate {
        private String secretKey;
        public JWTAuthenticate() {
            this.secretKey = "CWER24jk$@dINFS9252jcdnaskSSF01))@$";
        }
        public JWTToken ValidateJwtToken(String token) {
            try {
                var key = Encoding.ASCII.GetBytes(this.secretKey);
                List<SecurityKey> securityKeys = new List<SecurityKey>();
                securityKeys.Add(new SymmetricSecurityKey(key));
                var validationParameters = new TokenValidationParameters {
                    ClockSkew = TimeSpan.FromMinutes(5),
                    IssuerSigningKeys = securityKeys,
                    RequireSignedTokens = true,
                    RequireExpirationTime = true,
                    ValidateLifetime = true,
                    ValidateAudience = false,
                    ValidateIssuer = true,
                    ValidIssuer = "HouseRicher"
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                tokenHandler.ValidateToken(token, validationParameters, out var validatedtoken);
                

                JWTToken userToken = new JWTToken();
                Dictionary<string, string> userJson = JsonConvert.DeserializeObject<Dictionary<string, string>>(validatedtoken.ToString().Split("{\"alg\":\"HS256\",\"typ\":\"JWT\"}.")[1]);
                userToken.Email = userJson["email"];
                userToken.Id = Int64.Parse(userJson["certserialnumber"]);
                userToken.FirstName = userJson["given_name"];
                userToken.LastName = userJson["family_name"];
                userToken.Description = userJson["nameid"];
                
                return userToken;
            }
            catch {
                return null;
            }
        }
        public string GenerateJwtToken(JWTToken tokenUser)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(this.secretKey);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[] 
                {
                    new Claim(ClaimTypes.SerialNumber, tokenUser.Id.ToString()),
                    new Claim(ClaimTypes.Email, tokenUser.Email),
                    new Claim(ClaimTypes.GivenName, tokenUser.FirstName),
                    new Claim(ClaimTypes.Surname, tokenUser.LastName),
                    new Claim(ClaimTypes.NameIdentifier, tokenUser.Description)
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                Issuer = "HouseRicher",
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}