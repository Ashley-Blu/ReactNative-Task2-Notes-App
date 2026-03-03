# Notes App

A simple category-based notes application built with Expo Router and React Native (TypeScript).
The app allows users to register, log in, and manage notes across different categories.

## Features

 User Authentication (Login & Register)

 Category-based Notes (Work, Study, Personal)

 Add Notes

 Edit Notes

 Search Notes

 Category Filtering

 Local Storage Persistence

 Built with Expo Router

 ---

## Project Structure
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

 ---

## Tech Stack

React Native

Expo

Expo Router

TypeScript

AsyncStorage (for local data persistence)

---

## Installation

### Clone the repository
git clone https://github.com/Ashley-Blu/ReactNative-Task2-Notes-App.git
cd notes-app

### Install dependencies
npm install

### Start the development server
npx expo start

---

## Authentication

### User credentials are stored locally using AsyncStorage via:

authStorage.ts
notesStorage.ts

Note: This project uses local storage only (no backend).

---

## Screens

Login Screen

Register Screen

Notes Dashboard

Add Note Screen

Edit Note Screen

Profile Screen

---

## Learning Objectives

### This project demonstrates:

File-based routing with Expo Router

Component reusability

State management

Local data persistence

Navigation between nested routes

Basic authentication flow

