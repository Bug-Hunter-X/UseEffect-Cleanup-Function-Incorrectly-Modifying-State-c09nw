# React useEffect Cleanup Function Bug

This repository demonstrates a common error in React's `useEffect` hook: attempting to modify state within the cleanup function.  The cleanup function's purpose is to perform side effects like canceling subscriptions or timers, not to update component state.

## Bug

The `bug.js` file shows the incorrect implementation. The `useEffect` hook's cleanup function attempts to update the `count` state using `setCount(10)`. This will not trigger a re-render and won't have the desired effect.

## Solution

The `bugSolution.js` file provides the corrected approach. The cleanup function is used to properly remove any event listeners or subscriptions and the state updates happen inside the main useEffect block.