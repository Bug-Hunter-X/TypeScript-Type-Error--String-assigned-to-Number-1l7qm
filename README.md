# TypeScript Type Error: String assigned to Number

This repository demonstrates a common type error in TypeScript where a string is assigned to a number variable. The `add` function expects two numbers but the code passes a string as one of its arguments. This results in a type error.

## Bug

The `bug.ts` file contains the code that produces the error.  The type mismatch happens in the `add` function.  The type checker catches this error at compile time, preventing runtime issues.

## Solution

The `bugSolution.ts` file shows how to fix the error using type guards or explicit type conversions to ensure that the function only receives numbers.