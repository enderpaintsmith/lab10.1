# Lab 10.1 – React Counter with useEffect

## Overview

An interactive counter application built with React and Vite. This project demonstrates React state management with `useState` and side effects with `useEffect`.

The application supports incrementing and decrementing a counter, tracking count history, customizing step values, and saving counter changes to localStorage.

## Features

- **Increment & Decrement:** Increase or decrease the counter by a selected step value.
- **Custom Step Value:** Choose how much the counter changes with each action.
- **Count History:** Track previous counter values as they change.
- **Keyboard Controls:** Use the ArrowUp and ArrowDown keys to control the counter.
- **Automatic Saving:** Save counter changes to localStorage.
- **Reset:** Return the counter to zero and clear the history.

## Technologies Used

- React
- JavaScript
- Vite
- CSS
- Browser localStorage

## React Concepts Practiced

- `useState` for managing counter, history, step, and save-status state.
- `useEffect` for handling side effects.
- Effect cleanup functions to clear pending timeouts and remove event listeners.
- Event handling for button clicks, input changes, and keyboard interactions.
- Rendering dynamic content from component state.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/enderpaintsmith/lab10.1.git
```

Navigate into the project directory:

```bash
cd lab10.1
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Build

To create a production build:

```bash
npm run build
```

## Project

Created as part of the Per Scholas 2026 RTT-44 Full-Stack Development program.