  //2. Given a string of words (up to 2,000 let’s say), write a function which returns the following 
  // information as JSON 
  // ● Total number of words 
  // ● Total number of sentences 
  // ● Longest word 
  // ● Average length of word used 
  // ● Number of words above 3 characters 

function toJson {

  function numWords(str){
    return str.split(' ').length;
  }

  console.log(numWords('hello my name is Sophie'))

  function numSentences(str){
    return str.split(".").length;
  }

  console.log(numSentences(""))

}
  // need to return all results as object pairs

  //
  "results":[
  {"numWords": int},
  {"numSentences": int},
  {"longestWord": "string"},
  {"avWordLength": int},
  {"numWordsOverthree": int}
  ]