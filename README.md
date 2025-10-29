# AnpuCoin - Firebase Deployable Web App

This project is a React-based web application built with Vite and Tailwind CSS, configured for easy deployment to Firebase Hosting.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (which includes npm)
- [Firebase CLI](https://firebase.google.com/docs/cli)

## Getting Started

### 1. Install Dependencies

Clone the repository and navigate into the project directory. Then, run the following command to install all the necessary dependencies:

```bash
npm install
```

### 2. Configure Firebase

You need to link this project to your Firebase project.

- **Login to Firebase:**
  ```bash
  firebase login
  ```

- **Initialize Firebase (if you haven't already):** Run `firebase init hosting` in your project root and follow the prompts.
    - When asked for your public directory, enter **`dist`**.
    - Configure as a single-page app by answering **yes** to `Configure as a single-page app (rewrite all urls to /index.html)?`.
    - **Do not** overwrite `index.html`.

- **Update `.firebaserc`:** Open the `.firebaserc` file and replace `<YOUR_FIREBASE_PROJECT_ID>` with your actual Firebase project ID.

### 3. Development

To run the app locally with hot-reloading for development, use the following command:

```bash
npm run dev
```

This will start a development server, typically at `http://localhost:5173`.

### 4. Building for Production

When you are ready to deploy, you need to create an optimized production build. This command will compile all your files into the `dist` directory.

```bash
npm run build
```

### 5. Deploying to Firebase

After building the project, you can deploy it to Firebase Hosting with this single command:

```bash
npm run deploy
```

This command will upload the contents of the `dist` directory to your Firebase project, and your site will be live!
