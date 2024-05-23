🎬 # Netflix Clone

📺 This is a Netflix clone built using Vite and Firebase. It replicates the basic functionality and design of the popular streaming service Netflix.

## 🚀 Deployment

🌐 The server is live on Vercel: [Netflix Clone Site](https://netflix-project-sage.vercel.app)

## ✨ Features

- **🔐 Authentication**: Users can sign up, log in, and log out securely using Firebase Authentication.
- **🎞️ Browse Content**: Users can browse through a selection of movies and TV shows.
- **📺 Watch Trailer**: Users can watch trailers of movies and TV shows.
- **📱 Responsive Design**: The application is responsive and works well on different screen sizes.

## 💻 Technologies Used

- **⚡ Vite**: A fast development server and bundler for modern web development.
- **🔥 Firebase**: A platform developed by Google for creating mobile and web applications.
  - **🔐 Firebase Authentication**: For user authentication.
  - **📂 Firebase Firestore**: For storing and managing data.
  - **📁 Firebase Storage**: For storing media files such as movie posters and trailer videos.

## 🛠️ Setup

1. **📥 Clone the repository**:
   ```bash
   git clone <repository-url>
   ```
2. **📦 Install dependencies**:
   cd Netflix
   npm install

## ⚙️ Set Up Firebase

To set up Firebase for this project, follow these steps:

1. **Create a Firebase project** on the [Firebase Console](https://console.firebase.google.com/).
2. **Enable Authentication, Firestore, and Storage services** in your Firebase project.
3. **Copy your Firebase configuration settings** from the Firebase Console.
4. **Create a `.env` file** in the root directory of your project and add your Firebase configuration:

## ⚙️ env

VITE_FIREBASE_API_KEY=<your-api-key>
VITE_FIREBASE_AUTH_DOMAIN=<your-auth-domain>
VITE_FIREBASE_PROJECT_ID=<your-project-id>
VITE_FIREBASE_STORAGE_BUCKET=<your-storage-bucket>
VITE_FIREBASE_MESSAGING_SENDER_ID=<your-messaging-sender-id>
VITE_FIREBASE_APP_ID=<your-app-id>

🏃‍♂️ Run the application:

```bash
npm run dev
```
