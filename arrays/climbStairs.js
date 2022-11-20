"use strict";

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps.
// In how many distinct ways can you climb to the top?

/** Returns the number of different combinations to climb a staircase of n steps
 * using steps of 1 or 2 only.
 * @param {number} n
 * @return {number}
 */
 function climbStairs(n) {
  if (n <= 3) return n;

  let prevStep1 = 1;
  let prevStep2 = 2;
  let currStep;

  for (let i = 2; i < n; i++) {
    currStep = prevStep1 + prevStep2;

    // for calculating next steps after
    prevStep1 = prevStep2;
    prevStep2 = currStep;
  }

  return currStep;
};


/** Returns the number of different combinations to climb a staircase of n steps
 * using steps of 1 or 2 only.
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  if (n <= 3) return n;

  let steps = [1, 2];

  for (let i = 2; i < n; i++) {
    steps.push(steps[i - 2] + steps[i - 1]);
  }

  return steps[n - 1];
};

// for steps=1 and steps=2 choices
// every next step after n=2 is a combination of the previous two steps