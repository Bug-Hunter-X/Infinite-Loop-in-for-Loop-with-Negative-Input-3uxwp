# Infinite Loop in TypeScript for Loop with Negative Input

This repository demonstrates a subtle bug in TypeScript where an infinite loop can occur in a seemingly simple `for` loop when a negative number is used as the upper limit.

## Bug Description
The `printNumbers` function is designed to print numbers from 1 to `n`. However, if `n` is negative, the loop condition `i <= n` will never become false, resulting in an infinite loop.

## Reproduction
1. Clone the repository.
2. Run `tsc bug.ts` to compile the TypeScript code.
3. Run `node bug.js`. The program will enter an infinite loop if you input a negative number.

## Solution
The solution involves modifying the loop condition to check for both the upper and lower limits. The updated `for` loop condition will be `i <= n && i > 0` to prevent the loop from starting when n is negative.