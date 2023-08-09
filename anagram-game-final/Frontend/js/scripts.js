
function generateRandomString() {
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var randomString = "";
  for (var i = 0; i < 15; i++) {
    var randomIndex = Math.floor(Math.random() * letters.length);
    randomString += letters.charAt(randomIndex);
  }
  return randomString;
}


async function submitWord() {
  var word = document.getElementById("UserInput").value.toLowerCase();
  var baseString = document.getElementById("BaseString").value;

  const response = await fetch("http://localhost:3000/hello");
  const data = await response.json();
  const validWords = new Set(data.validWords);

  if (!isValidWord(word, baseString, validWords)) {
    alert("Invalid word. Please try again.");
    return;
  }

  var score = calculateScore(word);
  addHighScore(word, score, 0); // Add the new score at the top of the table
  // usedLetters += word;
  document.getElementById("UserInput").value = ""; // Clear input field
}

function isValidWord(word, baseString, validWordsSet) {
  if (!validWordsSet.has(word)) {
    return false;
  }

  // Check if the word can be formed using the remaining available letters
  var availableLetters = baseString;
  var usedLetters = updateUsedLettersFromTable();

  for (var i = 0; i < usedLetters.length; i++) {
    var letter = usedLetters[i];
    var index = availableLetters.indexOf(letter);
    if (index !== -1) {
      availableLetters =
        availableLetters.slice(0, index) + availableLetters.slice(index + 1);
    }
  }

  for (var i = 0; i < word.length; i++) {
    var index = availableLetters.indexOf(word[i]);
    if (index === -1) {
      return false;
    }
    availableLetters =
      availableLetters.slice(0, index) + availableLetters.slice(index + 1);
  }
  return true;
}


function updateUsedLettersFromTable() {
  var table = document.getElementById("HighScoresTable");
  var usedLetters = "";

  for (var row = 1; row < table.rows.length; row++) {
    var word = table.rows[row].cells[0].innerHTML.toLowerCase();
    usedLetters += word;
  }

  return usedLetters;
}

function calculateScore(word) {
  // Calculate the score for the word (1 point per letter)
  return word.length;
}

function addHighScore(word, score) {
  var highScoresTable = document.getElementById("HighScoresTable");
  var newRow = highScoresTable.insertRow(1); // Insert at the second row (below header)
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = word;
  cell2.innerHTML = score;

  // Remove excess rows to keep only the top ten high scores
  while (highScoresTable.rows.length > 11) {
    highScoresTable.deleteRow(11);
  }
}



function getGreetingFromServer() {
  fetch("http://localhost:3000/hello")
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(myJson.message);
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });
}
