  //2. Given a string of words (up to 2,000 let’s say), write a function which returns the following 
  // information as JSON 
  // ● Total number of words 
  // ● Total number of sentences 
  // ● Longest word 
  // ● Average length of word used 
  // ● Number of words above 3 characters 

var bigString = " ";

function intoJSON() {

  function numWords(str){
    return str.split(' ').length;
  }

  function numSentences(str){
    return str.split(". ").length;
  }

  function longestWordInString(str){
    var splitString = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < splitString.length; i++){
      if(splitString[i].length > longestWord){
        longestWord = stringSplit[i],length;
      }
    }
    return longestWord;
  }

  function avWordLength(str){
    var avWord = 0;
      for (var i = 0; i < wordCount.length; i++){
        avWord += bigString[i].length;
      }
    var avgLen = avWord / numWords;
    return avWordLength;
  }

  function numWordsOverThree(str){
    var splitStringAgain = str.split(" ");
    const numWordsOverThree = splitStringAgain.filter(word => word.length > 3);
    return numWordsOverthree;
  }

  return [numWords, numSentences, longestWordInString, avWordLength, numWordsOverThree];
};

console.log(JSON.stringify(intoJSON))
 