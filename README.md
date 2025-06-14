# Gita Companion

Gita Companion is an app that gives you personalized spiritual guidance, voice interactions, and reflections based on sacred Hindu texts, powered by AI.

---

## What's Included

- **Mobile App:** For writing reflections and getting AI-powered guidance.
- **Backend:** The "brain" that processes your reflections and stores them.
- **Database:** Where all your data is safely kept.

---

## How to Set Up and Run Everything

### 1. **Install the Prerequisites**

You (or your helper) will need to install these free tools:
- **Node.js** (version 22.14.0)
- **Yarn** (for managing packages)
- **Docker** (for running the database)
- **Expo Go** (for running the mobile app on your phone)

*If you don't know how to install these, ask your technical partner or see the official websites for instructions.*

---

### 2. **Get the Project Ready**

Open a terminal and run these commands one by one:

```bash
# Download all the code libraries you need
yarn install

# Copy the example settings files so you can add your own info
cp apps/backend-api/.env.example apps/backend-api/.env
cp apps/mobile-app/.env.example apps/mobile-app/.env
```

---

### 3. **Set Up Your Environment Variables**

- Open the `.env` files you just created in both `apps/backend-api` and `apps/mobile-app`.
- Fill in any missing information, like API keys or your computer's IP address.
- **Do not share these files publicly!**

---

### 4. **Start the Database**

```bash
cd infra
docker-compose up -d
```
This will start the database in the background.

---

### 5. **Prepare the Database**

```bash
cd ../apps/backend-api
yarn prisma migrate dev
```
This sets up the database tables.

---

### 6. **Start the Backend (API Server)**

```bash
yarn dev
```
Leave this terminal window open.

---

### 7. **Start the Mobile App**

Open a new terminal window and run:

```bash
cd apps/mobile-app
yarn start
```

- You'll see a QR code. Scan it with the Expo Go app on your phone, or press `i` (for iOS) or `a` (for Android) to open a simulator.

---

## **How to Use the App**

- Open the app on your phone or simulator.
- Write your reflection and press "Get Guidance."
- The AI will respond with personalized guidance, which will appear below your reflection.

---

## **Troubleshooting**

- **If you see errors about missing environment variables:**  
  Double-check your `.env` files.
- **If the app can't connect to the backend:**  
  Make sure the API URL in your mobile `.env` file matches your computer's IP address.
- **If the database won't start:**  
  Make sure Docker is running and no other database is using port 5432.

---

## **For Developers**

- All code is organized in the `apps/` folder.
- The backend uses Express.js and Prisma.
- The mobile app uses React Native and Expo.
- See `.env.example` files for all required settings.

---

## **Need Help?**

If you get stuck, ask your technical partner or open an issue in the project repository.
