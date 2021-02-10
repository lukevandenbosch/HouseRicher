DELIMITER //
CREATE PROCEDURE HouseRicher.Get_Email_Info(IN Message_Name TEXT)
BEGIN
	SELECT E.Email, E.Password, M.Subject, M.Message, C.SMTP_Server, C.Port
		FROM HouseRicher.Email_Messages M
			JOIN HouseRicher.Email_Email E
				ON E.ID = M.Email_ID
			JOIN HouseRicher.Email_Configuration C
				ON C.ID = E.Configuration_ID
		WHERE M.Message_Name = Message_Name;
END //
DELIMITER ;