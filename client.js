/*
You’ve been given an index.html file and a starter js file, and jQuery.

0. Source this file and the jquery.js files into the index.html file. You should see a console log when this is done correctly.
  -- There is no JS to write for this step.
*/
$(document).ready(function() {
  console.log('Step 0 complete! jquery and client.js loaded!');
});
  console.log('hello');

  // Write your code here!

  // 1. Start with the number 29 and set that equal to a variable named ‘highScore’;
  let highScore = 29;
  // 2. Make a new empty array called myScrabbleTiles.
  let myScrabbleTiles = [
    { tile: 'N', score: 1 },
    { tile: 'K', score: 5 },
    { tile: 'Z', score: 10 },
    { tile: 'X', score: 8 },
    { tile: 'D', score: 2 },
    { tile: 'A', score: 1 }
  ]
  // 3. Put these 6 tile objects into myScrabbleTiles:
  /*
    { tile: 'N', score: 1 }
    { tile: 'K', score: 5 }
    { tile: 'Z', score: 10 }
    { tile: 'X', score: 8 }
    { tile: 'D', score: 2 }
    { tile: 'A', score: 1 }
  */
  console.log(myScrabbleTiles);
  
  // 4. Remove the last tile from myScrabbleTiles.
  myScrabbleTiles.pop()
  console.log(myScrabbleTiles);
  
  // 5. Add the following new tile to myScrabbleTiles:
  /*
    { tile: 'F', score : 4 }
  */
  myScrabbleTiles.push({ tile: 'F', score: 4 })
  // 6. Write a function that takes in an array. The function will use a for-loop and returns the sum of all the scores in the given array.
  
  function addScore(totalScore) {
    let theScore= 0;
    for (let i = 0; i < totalScore.length; i++) {
      theScore += Number(totalScore[i].score);
    }
    return totalScore;
  }
  
  // 7. Use the function above to get the total score for myScrabbleTiles.
  console.log(addScore(myScrabbleTiles));
  
  // 8. Check whether or not your score is higher than the highScore.
    // 8-1 If your score is higher, change highScore to the new high score.
  if (addScore(myScrabbleTiles) > highScore) {
    highScore.pop() && highScore.push(myScrabbleTiles)
   
  }
  
  // 9. Using jQuery, Append to the DOM the highScore value.
 let id= $('#HI');
 id.empty();
 id.append(highScore);

  // 10. Using jQuery, Append to the DOM myScrabbleTiles as an unordered list
let el = $('#JQ');
el.empty();
el.append(myScrabbleTiles)

// DO NOT WRITE CODE BEYOND HERE 
