// A program that generates a random number and asks the user to guess it.

console.log("Welcome to the Random Number Game!\n\nThis program generates a random number between 1 and 100(both included) and asks the user to guess it.\n\n");
console.log("If the user guesses a number which doesn't lie between 1 and 100(both included), that would be counted as an invalid guess.\n\n");
console.log("The program also displays the score of user out of 100 in the end. An invalid guess will not influence the final score of the user in any guise.\nLower the number of guesses, higher is your score.\n\n\n");

console.log("Best of luck! :)");

let rand_num = Math.trunc(Math.random() * (101 - 1) + 1);

rand_num = Number.parseInt(rand_num)

let chances = 0, guessed_num;

do {
  guessed_num = prompt("\nGuess a number from 1 and 100: ");

  if (guessed_num < 1 || guessed_num > 100) {
    console.log("\nInvalid guess! You've to guess a number from 1 to 100.\n\n");
    continue;                                  // To avoid checking other two conditions unnecessarily.
  }
  else if (guessed_num < rand_num)
    console.log(guessed_num, "is less than the random number.\n\n");
  else if (guessed_num > rand_num)
    console.log(guessed_num, "is more than the random number.\n\n");

  chances++;

} while (guessed_num != rand_num);

let score = 100 - chances;

console.log("\n\n\nCongrats! You've guessed the correct random number which is ", rand_num, " in", chances, " attempts.");
console.log("\n\nYou scored ", score, " out of 100 .");

if (score < 0)
  console.log("\n\nWell, you've guessed the random number correctly but it seems that you don't know the correct technique to play this game. So, your score is negative.\nPerform better next time.");


console.log("\n\nHave a nice rest of your day :)\n\n");
