CREATE OR REPLACE FUNCTION Validate_User(Username_To_Validate TEXT, Password_To_Validate TEXT)
	RETURNS BOOLEAN AS $$
DECLARE
	Return_Value BOOLEAN;
BEGIN
	Return_Value := (
						SELECT CASE WHEN EXISTS(
												SELECT 1 
													FROM Personal.Login L 
													WHERE L.Username = Username_To_Validate 
														AND L.Password = Password_To_Validate
												) 
									THEN TRUE 
									ELSE FALSE END
					);
	RETURN Return_Value;
END;
$$ LANGUAGE plpgsql;