// Characters

 var mrGreen = {
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
 }


 var drOrchid = {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:   "Scientist"
 }


var profPlum = {
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer"
}


var missScarlet = {
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor"
}


var mrsPeacock = {
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité"
}

var mrMustard = {
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player"
}


// Weapons
var rope = {
    name: "rope",
    weight: 10
};

var knife = {
    name: "knife",
    weight: 8
};

var candlestick = {
    name: "candlestick",
    weight: 2
};

var dumbbell = {
    name: "dumbbell",
    weight: 30
};

var poison = {
    name: "poison",
    weight: 2
};

var axe = {
    name: "axe",
    weight: 15
};

var bat = {
    name: "bat",
    weight: 13
};

var trophy = {
    name: "trophy",
    weight: 25
}

var pistol = {
    name: "pistol",
    weight: 20
};
   

// Rooms

var dinningRoom = {
    name: "Dinning Room"
}

var consevatory = {
    name: "Conservatory"
}

var kitchen = {
    name: "Kitchen"
}

var study = {
    name: "Study"
}

var library = {
    name: "Library"
}

var billiardRoom = {
    name: "Billiard Room"
}

var lounge = {
    name: "Lounge"
}

var ballroom = {
    name: "Ballroom"
}

var hall = {
    name: "Hall"
}

var spa = {
    name: "Spa"
}

var livingRoom = {
    name: "Living Room"
}

var observatory = {
    name: "Observatory"
}

var theater = {
    name: "Theater"
}

var guestHouse = {
    name: "Guest House"
}

var patio = {
    name: "Patio"
}



// Characters Collection
var charactersArray = [];

// Rooms' Collection
var roomsArray = [];

// Weapons Collection
var weaponsArray = [];


// --> Including data structrures inside their arrays

charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);

weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);

roomsArray.push(dinningRoom, consevatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio);


// Creating a method to select randomly a character, room, weapon from their arrays

function randomSelector (array) {
    var randomIndex = Math.round(Math.random() * (array.push() - 1));
    var selectedElement = [];
    if (array[0] === "") {
      return undefined;
    } else {
      selectedElement.push(array[randomIndex]);
      return selectedElement;
    }
}

var misteryEnvelope = [];

function pickMistery (array1, array2, array3) {
    
    var randomCharacter = randomSelector(array1)[0];
    var nameSelected = randomCharacter.first_name;
    var lastNameSelected = randomCharacter.last_name

    var completeName = nameSelected + " " + lastNameSelected; // full name randomly selected from deck

    var randomWeapon = randomSelector(array2)[0].name;

    var randomRoom = randomSelector(array3)[0].name;

    misteryEnvelope.push(completeName);
    misteryEnvelope.push(randomWeapon);
    misteryEnvelope.push(randomRoom);

    if (misteryEnvelope.indexOf(completeName) !== 0) {
        return "Missing Killer";
    } else if (misteryEnvelope.indexOf(randomWeapon) !== 1) {
        return "Missing Weapon";
    } else if (misteryEnvelope.indexOf(randomRoom) !== 2) {
        return "Missing Room";
    } else if (misteryEnvelope[0] === 0) {
        return "No Random Cards added"
    } else {
        return misteryEnvelope;
    }
}

pickMistery(charactersArray, weaponsArray, roomsArray);


function revealMistery(envelope) {
    return envelope[0] + " killed Mr.Boddy using the " + envelope[1] + " in the " + envelope[2] + "!!!!";
  }
  
console.log(revealMistery(misteryEnvelope));
