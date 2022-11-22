"use strict";

// Given two strings s and t, return true if t is an anagram of s,
// and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a
// different word or phrase, typically using all the original letters exactly once.

/** Returns true if the chars of the first string can be rearranged to form
 * the second string.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  let freqOfS = {};
  let freqOfT = {};

  for (let i = 0; i < s.length; i++) {
    freqOfS[s[i]] = (freqOfS[s[i]] + 1) || 1;
    freqOfT[t[i]] = (freqOfT[t[i]] + 1) || 1;
  }

  for (let key in freqOfS) {
    if (freqOfS[key] !== freqOfT[key]) return false;
  }

  return true;
};