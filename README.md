# Personal Task Manager API 

Personal Task Manager API that allows users to manage their daily tasks
API will support basic CRUD (Create, Read, Update, Delete) operations for tasks.



### Instructions on how to run the application locally.

1) Install Node.js:
Ensure you have Node.js installed on your machine. You can download and install it from the official website: Node.js Downloads.

2) Clone the Repository:

   Clone the repository containing the Task Manager API code to your local machine using Git. 
   If you don't have Git installed, you can download it from Git Downloads and follow the installation instructions.

   ##### git clone <repository-url>

   Navigate to the Project Directory:
   Open a terminal or command prompt and change your current directory to the project directory where you cloned the repository.
   
   ##### cd task-manager-api

3) Install Dependencies:
   
   Run the following command to install the project dependencies listed in the package.json file.
   
   ##### npm install
   
   Run the Application:
   After installing the dependencies, start the server by running the following command:
   
   ##### npm start
   
   This command will start the Express.js server, and it will listen for incoming requests on port 4000 by default. If you want to specify a different port, you can set the PORT environment variable before running the command:
   



#### Test the API Endpoints:
Once the server is running, you can test the API endpoints using a tool like Postman, cURL, or any HTTP client of your choice. Here are some example requests you can make:

- POST /tasks: Create a new task. Send a JSON object with title and description in the request body.
- GET /tasks: Retrieve all tasks.
- PUT /tasks/:id: Update a task by its ID. Send a JSON object with the fields you want to update in the request body.
- DELETE /tasks/:id: Delete a task by its ID.

That's it! You now have the Task Manager API running locally on your machine, and you can interact with it using HTTP requests.

