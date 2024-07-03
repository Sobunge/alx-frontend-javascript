# Task 0: TypeScript Project

## Project Description
This project demonstrates a simple TypeScript setup with Webpack, ESLint, and Jest. It includes a basic interface for a `Student`, creates two student objects, and renders their information in a table using vanilla JavaScript.

## Requirements
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- All files will be transpiled on Ubuntu 18.04
- TypeScript scripts will be checked with Jest (version 24.9.*)
- A `README.md` file at the root of the project is mandatory
- Code should use the `.ts` extension when possible
- The TypeScript compiler should not show any warning or error when compiling the code

## Configuration Files
The following configuration files are included in this project:

- `package.json`
- `.eslintrc.js`
- `tsconfig.json`
- `webpack.config.js`

## Getting Started

### Prerequisites
- Node.js 12.11.x
- npm (Node Package Manager)

### Installation
1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd task_0
    ```

2. Install the project dependencies:
    ```sh
    npm install
    ```

### Build and Run

1. To build the project, run:
    ```sh
    npm run build
    ```

2. To run tests, use:
    ```sh
    npm run test
    ```

3. To lint the code, use:
    ```sh
    npm run lint
    ```

4. To perform all checks (build, lint, and test), use:
    ```sh
    npm run full-test
    ```

### Usage
The project contains a simple script that creates a table displaying students' first names and locations. After building the project, open the `dist/index.html` file in a web browser to view the rendered table.

### Project Structure
task_0/
├── src/
│ └── main.ts
├── package.json
├── .eslintrc.js
├── tsconfig.json
├── webpack.config.js
└── README.md

### `src/main.ts`
This file contains the TypeScript code that:
1. Defines the `Student` interface.
2. Creates two student objects.
3. Creates an array named `studentsList` containing the two students.
4. Renders a table with each student's first name and location.

## License
This project is licensed under the MIT License.
