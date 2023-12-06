# What is Docker 
Docker is an open-platform application for developing, shipping, and running applications. Docker packages up software into standardized units called containers. Containers are a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings. Once you have a Docker container, you can run it on any computer with Docker installed. 

## Docker Image
A Docker image is a lightweight, standalone, and executable package that includes everything needed to run a piece of software, including the code, a runtime, libraries, environment variables, and system tools. In other words, it's a snapshot or template of a file system that contains the application code and all its dependencies, allowing the application to run consistently across various environments.

Docker images are used to create Docker containers, which are instances of running Docker images. The key advantages of using Docker images include.

Docker images are typically created using a Dockerfile, which is a script-like configuration file that specifies the base image, application code, dependencies, and other settings. Images can be stored and shared through container registries, such as Docker Hub, allowing developers to easily distribute their applications and dependencies to others.

## Docker Container
Docker container is a lightweight, standalone, and executable unit that encapsulates an application along with its dependencies and runs in an isolated environment. Containers are created from Docker images, providing a consistent and portable way to package, deploy, and run applications across different environments. They offer benefits such as efficiency, scalability, and reproducibility by isolating the application from the underlying system and other containers.

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

## Login to Docker Hub:
Use the following command to log in to Docker Hub. Replace <username> and <password> with your Docker Hub username and password.
```bash
docker login -u <username> -p <password>

Verify Login:
After successfully logging in, you should see a message indicating that you are logged in.
```


### Run the Docker Container in the Background:
```bash
docker run -p 3000:3000 -d 4f8fd11e6106
```
### Check for Existing Processes on Port 3000:
You can use the following command to check if another process is already using port 3000:
```bash
sudo lsof -i :3000
```

### Stop and Remove Existing Containers:
If the previous Docker container is still running or there are stopped containers using the same port, you might want to stop and remove them before starting a new container:
```bash
docker stop $(docker ps -q)   # Stop all running containers
docker rm $(docker ps -a -q) # Remove all containers
```



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


