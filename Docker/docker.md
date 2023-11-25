# What is Docker 
Docker is an open-platform application for developing, shipping, and running applications. Docker packages up software into standardized units called containers. Containers are a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings. Once you have a Docker container, you can run it on any computer with Docker installed. 

## Installing Docker on Amazon EC2 Ubuntu Instance

To install Docker on an Amazon EC2 Ubuntu instance, follow these steps:

#### Step 1: Connect to your EC2 instance

Connect to your EC2 instance using the AWS Management Console or an SSH client.

#### Step 2: Update the package index

Run the following command to update the package index and ensure you have the latest versions of all packages installed on your instance:

```bash
sudo apt update
```
#### Step 3: Install the Docker package
Install the Docker package, including the Docker Engine and Docker CLI:
```bash
sudo apt install docker.io
```
#### Step 4: Start the Docker service
Start the Docker daemon, responsible for managing Docker containers:
```bash
sudo systemctl start docker
```
#### Step 5: Verify Docker installation
Verify that Docker is installed and running by using the following command
```bash
docker version
```

#### Step 6: Add your user to the Docker group
Add your user to the Docker group to grant necessary permissions for running Docker commands without using sudo:

```bash
sudo usermod -aG docker $USER
```
#### Step 7: Log out and log back in
Log out and log back in to refresh your user's permissions and ensure you can run Docker commands without using sudo.




## Installing Docker on Windows

To install Docker on your Windows machine, follow these steps:

#### Step 1: Download Docker Desktop

Download the Docker Desktop for Windows from the official Docker website: [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop)

#### Step 2: Install Docker Desktop

Run the Docker Desktop installer that you downloaded in Step 1. Follow the on-screen instructions to install Docker on your Windows machine.

#### Step 3: Start Docker Desktop

Once the installation is complete, launch Docker Desktop. You can find Docker Desktop in the Start menu.

#### Step 4: Verify Docker installation

Open a command prompt or PowerShell and run the following command to verify that Docker is installed and running:

```powershell
docker --version
docker run hello-world
```


