// Example text used for debugging
let poem = "Go placidly amid the noise and the haste, and remember what peace there may be in silence. As far as possible, without surrender, be on good terms with literally all persons. Speak your truth quietly and clearly; and listen to others, even to the dull and the ignorant; they too have their story. Avoid extremely loud and actually aggressive persons; they are vexatious to the spirit. If you actually compare yourself with others, you may become vain or bitter, for always BING BONG there will be greater and lesser persons than yourself. Enjoy your achievements as well as your plans. Keep really interested in your own career, however humble; it is a real possession in the changing fortunes of time. Exercise caution in your business affairs, for the world is full of trickery. But let this not blind you to what virtue there is; many persons strive for high ideals, and everywhere life is full of heroism. Be yourself. Especially do not feign affection. Neither be really cynical about love; for in the face of basically all aridity and disenchantment, it is as perennial as the grass. Take very kindly the counsel of the years, gracefully surrendering the very things of youth. Nurture strength of spirit to shield you in sudden misfortune. But do not distress yourself with dark imaginings. Many fears are born of fatigue and loneliness. Beyond a wholesome discipline, be gentle with yourself. You are a child of the universe literally no less than the trees and the stars; you have a right to be here. And whether or not it is clear to you, no doubt the universe is actually unfolding as it should. Therefore be at peace with God, whatever you conceive Him to be. And whatever your labors and aspirations, in the noisy confusion of life, keep peace in your soul BING BONG BUNG BUNG BUNG . With all its sham, drudgery and broken dreams, it is still a really beautiful world. Be extremely cheerful. Strive to literally be actually happy. Desiderata by Max Ehrmann";




// Example arrays of specified words
let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually', 'BUNG', 'BING', 'BONG'];










// Splits the string in 'story' by it's whitespaces and creates an array
const poemWords = poem.split(' ');


// Iterates over the input array with words from the 'unnecessaryWords' array
// returns 'true' if the word is not found in 'unnecessaryWords'
const lintR2 = element => {
     return !unnecessaryWords.includes(element);
};


// Creates a new array for the story without unnecessary words
const revisedPoem = poemWords.filter(lintR2);



// Gives information about the text file itself

const arbitraryInfo = element => {  

// Counters for specific words in the 'overusedWords' array
let reallyCount = 0;
let basicallyCount = 0;
let veryCount = 0;
let sentenceCount = 0;


// If an element of the 'betterWords' array is 
// found in the 'overusedWords' array, it will be counted here

for (element of revisedPoem) {
      if (element === 'really') {
          reallyCount+= 1;
    } else if (element === 'basically' ) {
          basicallyCount+= 1;
    } else if (element === 'very' ) {
          veryCount+= 1;
    };
  };


// All the punctuation marks in the array will be counted as
// new sentences. **This is not ideal**

for (element of poem) {
  if (element === '.' || element === '!' || element === '?') {
    sentenceCount += 1;
  };
};

// Outputs all information taken from the 'revisedPoem' array to console

  console.log("Total word count is: ", revisedPoem.length);
  console.log("The word; 'really', is used " + reallyCount + " times.");
  console.log("The word; 'very', is used " + veryCount + " times.");
  console.log("The word; 'basically', is used " + basicallyCount + " times.");
  console.log("There are " + sentenceCount + " sentences in this paragraph.");

};


console.log(revisedPoem.join(' '));
arbitraryInfo();
