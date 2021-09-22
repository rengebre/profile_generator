const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });

// array of questions
const questions = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner brunch, etc.) ",
  "What's your favourite thing to eat for that meal? ",
  "which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
]

// function to generate the profile
const profile = function(name, hobby, music, meal, food, sport, superpower) {
  console.log(`\nHello, my name is ${name}. I like ${hobby} while listening to ${music}. My favorite meal of the day is ${meal}, where I prefer to eat ${food}. I like to stay active, but I have to say my favorite sport is ${sport}. My superpower is ${superpower}`);
}

let answers = [];
let i = 0;

// stdin/stdout using recursion
const questionCall = function(query) {
  rl.question(`${query[i]} `, function (answer) {
    answers.push(answer);

    if (query[i + 1] === undefined) {
      profile(...answers);
      rl.close();
      return true;
    }

    console.log(`Your answer was: "${answer}"`);
    i++;
    questionCall(query);
  });
};

questionCall(questions);
