# Todo App

This is a simple Todo application built using React.

## Table of Contents

-   [Todo App](#todo-app)
    -   [Table of Contents](#table-of-contents)
    -   [Clone the Project](#clone-the-project)
    -   [Project Structure](#project-structure)
    -   [Setup and Usage](#setup-and-usage)

## Clone the Project

To clone this project to your local machine, use the following command:

```bash
git clone https://github.com/AvishkaUmesh/todo-app-AvishkaUmesh.git
cd todo-app-AvishkaUmesh
```

## Project Structure

The project structure is organized as follows:

-   `src/`: Contains the source code of the React application.
    -   `components/`: React components used in the application.
    -   `pages/`: Pages used in the application.
    -   `context/`: Context API files.
    -   `utils/`: Utils used in the application
    -   `assets/`: Contains all the assets used in the components.
-   `public/`: Contains the public assets.
-   `package.json`: Contains project metadata and dependencies.
-   `README.md`: Documentation for the project.

## Setup and Usage

1. Install the project dependencies using npm:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

This will start the development server and open the Todo App in your default web browser.

If not visit

```
http://localhost:5173
```

To run the `lint` and `lint:fix` scripts defined in `package.json`, follow these instructions:

1. **Run Linting:**

    To run the ESLint linting process on your JavaScript and JSX files, use the following npm command:

    ```bash
    npm run lint
    ```

    This command will execute ESLint and analyze your code for potential issues based on the defined rules. It will output any errors or warnings to the console.

2. **Run Linting with Automatic Fixes:**

    If you want ESLint to automatically fix fixable issues in your code, use the `lint:fix` script:

    ```bash
    npm run lint:fix
    ```

    ESLint will attempt to fix any fixable issues and update your files accordingly.
