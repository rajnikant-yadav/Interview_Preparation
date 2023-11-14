# Instalation Steps
#### Download PostgreSQL:
Visit the official PostgreSQL download page: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
Choose the version appropriate for your Windows system (32-bit or 64-bit) and download the installer.<br>

Run the Installer: 
Locate the downloaded installer file (e.g., postgresql-x.x.x-x-windows.exe) and double-click to run it.<br>

Select Components:
The installer will prompt you to select the components to install. Typically, you'd want to install the PostgreSQL Server and pgAdmin (a graphical administration tool). Click "Next" to proceed.<br>

Select Installation Directory:
Choose the directory where you want to install PostgreSQL. The default is usually fine for most users. Click "Next" to proceed.<br>

Enter Data Directory:
The Data Directory is where PostgreSQL will store its databases. The default is usually fine, but make sure you have enough disk space. Click "Next" to proceed.<br>

Enter Password for the Database Superuser (postgres):
During installation, you'll be prompted to enter a password for the default database superuser (postgres). Enter a strong password and remember it, as you'll need it later. Click "Next" to proceed.<br>

Specify Port:
The default port for PostgreSQL is 5432. Unless you have a specific reason to change it, keep the default. Click "Next" to proceed.<br>

Advanced Options (Optional):
You can configure additional options if needed, but for a basic installation, you can usually proceed with the default settings.<br>

Install Stack Builder (Optional):
Stack Builder is a tool that can be used to install additional software related to PostgreSQL. You can skip this for a basic installation.<br>

Installation:
Click "Next" and then "Next" again to start the installation process. The installer will copy the necessary files and set up PostgreSQL on your system.<br>

Complete the Installation:
Once the installation is complete, click "Finish" to exit the installer.<br>

Launch pgAdmin:
You can now launch pgAdmin from the Start menu. Use the password you set for the postgres user during installation.
That's it! You have successfully installed PostgreSQL on your Windows system. You can use pgAdmin to manage your PostgreSQL databases and perform various administrative tasks.<br>



#### NOTE
To connect postgres using cmd we first need to add path in environment variable then use this command psql -U postgres -d postgres


