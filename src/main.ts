// Main Typescript file!
const app = document.getElementById("app");

if (app) {
    app.innerHTML = "<h1>Yeeeee boiiii we in the page up in heeeuh</h1>";
}

// Initial Social Link Information stored in an Object
let sociallinks = {
    "0": {"arcana": "Fool", "name": "Investigation Team", "rank": 1, "hidden": 0},
    "1": {"arcana": "Magician", "name": "Yosuke Hanamura", "rank": 1, "hidden": 0},
    "2": {"arcana": "Priestess", "name": "Yukiko Amagi", "rank": 1, "hidden": 1},
    "3": {"arcana": "Empress", "name": "Margaret", "rank": 1, "hidden": 1},
    "4": {"arcana": "Emperor", "name": "Kanji Tatsumi", "rank": 1, "hidden": 1},
    "5": {"arcana": "Hierophant", "name": "Ryotaro Dojima", "rank": 1, "hidden": 1},
    "6": {"arcana": "Lovers", "name": "Rise Kujikawa", "rank": 1, "hidden": 1},
    "7": {"arcana": "Chariot", "name": "Chie Satonaka", "rank": 1, "hidden": 1},
    "8": {"arcana": "Justice", "name": "Nanako Dojima", "rank": 1, "hidden": 1},
    "9": {"arcana": "Hermit", "name": "Fox", "rank": 1, "hidden": 1},
    "10": {"arcana": "Fortune", "name": "Naoto Shirogane", "rank": 1, "hidden": 1},
    "11": {"arcana": "Strength", "name": "Fellow Athletes", "rank": 1, "hidden": 1},
    "12": {"arcana": "Hanged Man", "name": "Saki's Brother", "rank": 1, "hidden": 1},
    "13": {"arcana": "Death", "name": "Old Lady", "rank": 1, "hidden": 1},
    "14": {"arcana": "Temperance", "name": "Young Mother", "rank": 1, "hidden": 1},
    "15": {"arcana": "Devil", "name": "Nurse", "rank": 1, "hidden": 1},
    "16": {"arcana": "Tower", "name": "Tutored Student", "rank": 1, "hidden": 1},
    "17": {"arcana": "Star", "name": "Teddie", "rank": 1, "hidden": 1},
    "18": {"arcana": "Moon", "name": "Ai Ebihara", "rank": 1, "hidden": 1},
    "19": {"arcana": "Sun", "name": "Yumi Ozawa", "rank": 1, "hidden": 1},
    "20": {"arcana": "Sun", "name": "Ayane Matsunaga", "rank": 1, "hidden": 1},
    "21": {"arcana": "Judgement", "name": "Seekers of Truth", "rank": 1, "hidden": 1},
    "22": {"arcana": "Jester", "name": "Tohru Adachi", "rank": 1, "hidden": 1},
    "23": {"arcana": "Hunger", "name": "Tohru Adachi", "rank": 8},
    "24": {"arcana": "Aeon", "name": "Marie", "rank": 1, "hidden": 1}
};