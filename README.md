# 江苏省中医院泌尿外科登录界面

This is a simple login interface for the Urology Department of Jiangsu Provincial Hospital of Traditional Chinese Medicine. It is designed to be responsive and accessible on both desktop and mobile devices.

## Features

-   Simple username/password login form
-   Mobile phone login entry (currently under construction)
-   Display of company logo
-   Responsive design for desktop and mobile screens
-   Login status prompts

## Technologies Used

-   Next.js
-   React
-   Tailwind CSS
-   ShadCN/UI components
-   Lucide React icons

## Getting Started

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

    Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Deployment

To deploy the application, follow these steps:

1.  Build the application:

    ```bash
    npm run build
    # or
    yarn build
    # or
    pnpm build
    ```

2.  Deploy to your preferred hosting provider.

## Firebase Hosting Deployment

These instructions assume you have a Firebase project set up.

1.  Install the Firebase CLI:

    ```bash
    npm install -g firebase-tools
    ```

2.  Login to Firebase:

    ```bash
    firebase login
    ```

3.  Initialize Firebase in your project directory:

    ```bash
    firebase init
    ```

    *   Choose "Hosting" when prompted.
    *   Select your Firebase project.
    *   Choose "dist" as your public directory (or ".next" if you prefer to serve the Next.js build output directly).
    *   Configure as a single-page app (yes/no): Yes
    *   Set up automatic builds and deploys with GitHub (yes/no): No

4.  Deploy to Firebase Hosting:

    ```bash
    firebase deploy --only hosting
    ```

## License

[MIT](https://opensource.org/licenses/MIT)
