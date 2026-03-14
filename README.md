#  Notes App

A simple category-based notes application built with **Expo Router** and **React Native** (TypeScript).  
Users can register, log in, and manage notes across different categories — all stored locally on device.

---

## Features

-  User Authentication (Login & Register)
-  Category-based Notes (Work, Study, Personal)
-  Add Notes
-  Edit Notes
-  Search Notes
-  Category Filtering
-  Local Storage Persistence
-  Built with Expo Router

---

##  Project Structure

```
app/
├── auth/
│   ├── login.tsx
│   └── register.tsx
│
├── notes/
│   ├── add.tsx
│   ├── edit.tsx
│   ├── personal.tsx
│   ├── study.tsx
│   ├── work.tsx
│   ├── index.tsx
│   └── profile.tsx
│
└── _layout.tsx

components/
├── CategoryFilter.tsx
├── NoteForm.tsx
├── NoteItem.tsx
├── PrimaryButton.tsx
└── SearchBar.tsx

storage/
├── authStorage.ts
└── notesStorage.ts

assets/
├── image.png
├── login-register.png
└── logo.png
```

---

##  Tech Stack

| Technology | Purpose |
|---|---|
| React Native | Mobile UI framework |
| Expo | Development platform |
| Expo Router | File-based navigation |
| TypeScript | Type safety |
| AsyncStorage | Local data persistence |

---

##  Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or newer)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/go) app on your mobile device (for testing)

---

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Ashley-Blu/ReactNative-Task2-Notes-App.git
cd notes-app
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npx expo start
```

**4. Run on your device**

- Scan the QR code in your terminal with the **Expo Go** app (Android/iOS)
- Or press `a` for Android emulator / `i` for iOS simulator

---

##  Authentication

User credentials are stored locally using AsyncStorage via:

- `authStorage.ts` — handles login/register/session
- `notesStorage.ts` — handles note CRUD operations

> **Note:** This project uses local storage only — there is no backend or remote database.

---

##  Screens

| Screen | Description |
|---|---|
| Login | Sign in with existing credentials |
| Register | Create a new local account |
| Notes Dashboard | View and filter all notes by category |
| Add Note | Create a new note with title, body, and category |
| Edit Note | Modify an existing note |
| Profile | View account info |

---

##  Learning Objectives

This project demonstrates:

- File-based routing with Expo Router
- Component reusability and composition
- Local state management
- Data persistence with AsyncStorage
- Navigation between nested routes
- Basic authentication flow (local)