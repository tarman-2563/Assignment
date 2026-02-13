# Recursive Grid Challenge

A fun interactive 3x3 grid game built with React where clicking boxes triggers ripple effects across the grid.

## Live Demo

Check it out here: [https://recursive-grid-seven.vercel.app/](https://recursive-grid-seven.vercel.app/)

## What It Does

This is a simple grid-based game with some interesting rules. You start with a 3x3 grid where all boxes show 0. Click any box and watch what happens!

### The Rules

- Click a box to increase its number by 1
- When a number becomes divisible by 3, it decreases the box to its right by 1
- When a number becomes divisible by 5, it increases the box below it by 2
- Once a box reaches 15, it turns red and gets locked (can't be clicked anymore)
- Even numbers have a light gray background
- Odd numbers have a navy blue background with white text

It's pretty satisfying to see the chain reactions when you click around!

## Screenshot


## Tech Stack

- React.js with Vite
- Tailwind CSS for styling
- Deployed on Vercel

## Running Locally

If you want to run this on your machine:

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build
```

## How I Built It

I kept it simple - just React hooks for state management and Tailwind for styling. The main logic is in `App.jsx` where I handle all the click interactions and ripple effects. Each box is a separate component that changes its appearance based on whether the number is even, odd, or locked.

The trickiest part was making sure the ripple effects don't crash when you're at the edge of the grid. Had to add some checks to prevent trying to update boxes that don't exist.

---

Made as part of a coding challenge. Pretty fun to build!
