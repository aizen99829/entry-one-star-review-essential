// SPDX-License-Identifier: MIT
const line =
  "One star. Sleep demands eight hours a night, offers no refund for nightmares, and still ships morning grogginess as a feature.";
if (line.length > 160 || line.includes("\n")) {
  throw new Error("review must be one line of at most 160 characters");
}
console.log(line);
