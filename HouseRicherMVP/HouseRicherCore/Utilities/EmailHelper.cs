using System;
using System.Net;
using System.Net.Mail;
using HouseRicherCore.ModelInternal;

namespace HouseRicherCore.Utilties {
    public class EmailHelper {
        public bool SentSuccessfully { get; set; }
        public string Error { get; set; }
        public void SendEmail(Email email) {
            MailMessage message = new MailMessage(email.From, email.To);
            message.Subject = email.Subject;
            message.Body = email.Message;
            message.IsBodyHtml = true;
            SmtpClient client = new SmtpClient(email.SMPTServer, email.Port);
            client.EnableSsl = true;
            client.UseDefaultCredentials = false;
            client.Credentials = new NetworkCredential(email.From, email.Password);

            try
            {
                client.Send(message);
                SentSuccessfully = true;
            }
            catch (Exception ex)
            {
                Error = ex.ToString();
                SentSuccessfully = false;
            }
        }
    }
}