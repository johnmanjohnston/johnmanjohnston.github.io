const urlParams = new URLSearchParams(window.location.search);

var wordlist = [
    "minecraft",
    "chappal",
    "dungeon"
];

if (!urlParams.get("pq")) {
    alert("`pq` (player count) not specified in URL");
}

var playerCount = Number(urlParams.get("pq"));

var players = [];
var codeword = "";

function init() {
    for (var i = 0; i < playerCount; i++) {
        players.push({
            "name": "player " + String(i),
            "impostor": false
        });
    }

    var impostorIndex = Math.floor(Math.random() * playerCount);
    players[impostorIndex]["impostor"] = true;

    var cwIndex = Math.floor(Math.random() * wordlist.length);
    codeword = wordlist[cwIndex];
}

init();

console.log(players);
console.log(codeword);

// frontend
var elPlayerName = document.getElementById("player-card-name");
var elPlayerWord = document.getElementById("player-card-word");
var elPlayerBtn = document.getElementById("player-card-btn");

var curPlayerIndex = 0;

function updatePlayerDetails() {
    if (curPlayerIndex > players.length - 1) {
        elPlayerName.innerText = "Find the impostor.\nHave fun!"
        elPlayerBtn.hidden = true;
        elPlayerWord.hidden = true;
    } else {
        var player = players[curPlayerIndex];
        elPlayerName.innerText = player["name"];

        elPlayerBtn.onclick = showWord;
        elPlayerBtn.innerText = "Show";

        elPlayerWord.innerText = "???";
    }
}

function showWord() {
    var player = players[curPlayerIndex];

    if (player["impostor"]) {
        elPlayerWord.innerHTML = "<span id='impostor-text'>IMPOSTOR</span>";
    } else {
        elPlayerWord.innerText = `"${codeword}"`;
    }

    elPlayerBtn.onclick = nextPlayer;
    elPlayerBtn.innerText = "Next player";
}

function nextPlayer() {
    curPlayerIndex++;
    updatePlayerDetails();
}

updatePlayerDetails();
