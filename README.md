# Todo List App

A simple, minimal React app for managing a list of tasks.  
This project is scaffolded using **Vite** and built with **React**, and is perfect for learning the basics of JSX, components, and modern frontend tooling.

---

## Features
- **Built with React and Vite**
- **JSX for rendering components**
- **Simple static todo list**
- **ESLint + Prettier support**

---

## Installation Instructions

1. **Clone the repository:**

   Using HTTPS:

   ```
   git clone https://github.com/your-username/todo-list.git
   ```

   Or using SSH:

   ```
   git clone git@github.com:your-username/todo-list.git
   ```

2. **Navigate into the project folder:**

   ```
   cd todo-list
   ```

3. **Install project dependencies:**

   ```
   npm install
   ```

4. **Running the Development Server:**

   Once dependencies are installed, start the local development server:
   ```
   npm run dev
   ```
   Then open your browser and go to the local URL shown in the terminal (typically http://localhost:5173).

## ESLint & Prettier Integration

### ESLint Setup

This project uses the new ESLint Flat Config system via eslint.config.js.

**To ensure ESLint works properly:**

**Install ESLint and React plugins** (already in this project):

```
npm install --save-dev eslint eslint-plugin-react eslint-plugin-react-hooks
```

**Recommended ESLint extension for VS Code:**
- Install the ESLint extension from the Extensions Marketplace.

It will highlight issues and autofix on save (if enabled in settings).

**Run ESLint manually** (optional):

```
npx eslint .
```

### Prettier Setup

**Install Prettier** in the project:

```
npm install --save-dev --save-exact prettier
```

**Create a Prettier config file** in the root of your project named .prettierrc:

```
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

**Install the Prettier VS Code extension:**

Search for “Prettier - Code formatter” in the Extensions panel.

Open settings and search for "Default Formatter", then set it to Prettier - Code formatter.

Enable “Format on Save” in VS Code settings.

## Project Status

This is a work-in-progress React learning project built as part of a class assignment.

Happy coding!
