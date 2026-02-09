// core
const urlParams = new URLSearchParams(window.location.search);

var wordlist = [
    "Minecraft",
    "Chappal",
    "Dungeon",
    "Shit",
    "Poop",
    "Hamster",
    "T-shirt",
    "Basketball",
    "DJ Khaled",
    "Trump",
    "George W Bush",
    "Nasser",
    "ball",
    "Widget",
    "Chair",
    "Photo",
    "Hair",
    "Insect",
    "Water",
    "Helium",
    "Sodium Carbonate",
    "Pneumonoultramicroscopicsilicovolcanoconiosis",
    "Glitter",
    "Bunny",
    "Buns",
    "Cheeks",
    "Clouds",
    "Goat",
    "Ice",
    "Night vision",
    "Gordon Ramsay",
    "Governer",
    "Twat",
    "Beans",
    "hello pls help me i am under the water here too much raining uwuwuwuw",
    "Oreo",
    "Cups",
    "Bloke",
    "Bonkers",
    "Boondongle",
    "Doorknob",
    "Glass",
    "Jaw",
    "Eye",
    "Helicopter",
    "Porsche",
    "Lad",
    "Plastic",
    "Tupperware",
    "School",
    "College",
    "Hill",
    "Bracelet",
    "Shorts",
    "Bling-bling",
    "iPhone",
    "Samsung",
    "Water bottle",
    "Sleep",
    "iPad",
    "Android",
    "*insert pop noises*",
    "THAPANG",
    "Vineeth",
    "FIFA",
    "Justin Beiber",
    "Sudeep",
    "Nueoroglogist",
    "Physician",
    "Bob",
    "London",
    "Orange",
    "Business",
    "Suction cups",
    "Beanie",
    "Gulab jamun",
    "Pickle",
    "Cucumber",
    "Snake",
    "Whistle",
    "Florida",
    "Rice",
    "Mosquito",
    "whoever reads this is dumb",
    "Bones",
    "Engine",
    "Architect",
    "Strength",
    "Calcium",
    "Bat",
    "Baseball",
    "Musician",
    "Actor",
    "joe's right toenail",
    "joe's left toenail",
    "Hiccups",
    "Gum",
    "'MERICA!",
    "Sausage",
    "Monkey",
    "Horse",
    "Bell",
    "Belt",
    "Drums",
    "Plane",
    "V12 Engine",
    "RAM TRX",
    "Porsche 911 Turbo S",
    "Porscche 911 GT3 RS",
    "Rubberbands",
    "Luck"
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
            "name": "Player " + String(i + 1),
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
        elPlayerName.innerHTML = "Find <span id='impostor-text'>THE IMPOSTOR</span>.\nStart a timer, and have fun!"
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
