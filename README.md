# HouseRicher
My First workings of my ex-startup done in .NET Core and Angular front-end.


To run:
go into the HouseRicherCore directory and execute "dotnet run" in the console commands.



To compile the angular project (Not needed):
ng build --prod --output-path <Add Path>\HouseRicherCore\ClientApp --watch --output-hashing none
  
To have this properly setup with a database you will need to run all of the scripts in the HouseRicherDatabaseSetup folder on a MySQL database.
You will also need to add the connection strings in the HouseRicherContext.cs file and appsettings.json file.
