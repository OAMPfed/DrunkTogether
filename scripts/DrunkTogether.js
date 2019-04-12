//Credit to Vicky Gonsalves of StackOverflow for this function
//https://stackoverflow.com/questions/19589598/how-to-get-random-values-in-json

let personNum = 0;
let i = 0;

//This is the content where all the cards are pulled from.
const jsonContent = {
        "cards": [
            {
                "id": "1",
                "title": "Drink",
                "desc": "Take 1 sip",
                "img": "/images/drink.jpg"
            },
            {
                "id": "2",
                "title": "Drink",
                "desc": "Take 2 sips",
                "img": "/images/drink.jpg"
            },
            {
                "id": "2",
                "title": "Drink",
                "desc": "Take 3 sips",
                "img": "/images/drink.jpg"
            },
            {
                "id": "3",
                "title": "Drink",
                "desc": "Take 4 sips",
                "img": "/images/drink.jpg"
            },
            {
                "id": "4",
                "title": "Drink",
                "desc": "Take 5 sips",
                "img": "/images/drink.jpg"
            },
            {
                "id": "5",
                "title": "Drink",
                "desc": "Pick someone to take 1 sip",
                "img": "/images/drink.jpg"
            },
            {
                "id": "6",
                "title": "Drink",
                "desc": "Pick someone to take 2 sips",
                "img": "/images/drink.jpg"
            },
            {
                "id": "7",
                "title": "Drink",
                "desc": "Pick someone to take 3 sips",
                "img": "/images/drink.jpg"
            },
            {
                "id": "8",
                "title": "Drink",
                "desc": "Pick someone to take 4 sips",
                "img": "/images/drink.jpg"
            },
            {
                "id": "9",
                "title": "Drink",
                "desc": "Pick someone to take 5 sips",
                "img": "/images/drink.jpg"
            },
            {
                "id": "10",
                "title": "Drink",
                "desc": "Start a waterfall! Cardpicker starts drinking and the rest must follow until cardpicker stops drinking.",
                "img": "/images/drink.jpg"
            },
            {
                "id": "11",
                "title": "Drink",
                "desc": "All men must drink",
                "img": "/images/drink.jpg"
            },
            {
                "id": "12",
                "title": "Drink",
                "desc": "All women must drink",
                "img": "/images/drink.jpg"
            },
            {
                "id": "13",
                "title": "Activity",
                "desc": "Last person to put their thumb on the table must drink.",
                "img": "/images/activity.jpg"
            },
            {
                "id": "14",
                "title": "Activity",
                "desc": "Tell a joke. All who laugh must drink.",
                "img": "/images/activity.jpg"
            },
            {
                "id": "15",
                "title": "Activity",
                "desc": "Raise your hands in the air. First and last person to raise their hands must drink.",
                "img": "/images/activity.jpg"
            },
            {
                "id": "16",
                "title": "Activity",
                "desc": "Start counting! Never say 7 or any number it multiplies into. The person that fails must drink.",
                "img": "/images/activity.jpg"
            },
            {
                "id": "17",
                "title": "Activity",
                "desc": "Point at the person who is most likely to get drunk. The person with the most votes must drink.",
                "img": "/images/activity.jpg"
            },
            {
                "id": "18",
                "title": "Activity",
                "desc": "Pick a drinking buddy! Whenever you have to drink, your drinking buddy must drink also.",
                "img": "/images/activity.jpg"
            },
            {
                "id": "19",
                "title": "Activity",
                "desc": "Paranoia! Whisper a question to the person on your left. The answer must be out loud. If anybody asks what the question was, they must drink and the question must be said out loud.",
                "img": "/images/activity.jpg"
            },
            {
                "id": "20",
                "title": "Activity",
                "desc": "Play a really convincing air guitar. The group votes after if it was good or not. The group with the fewer votes must drink.",
                "img": "/images/activity.jpg"
            },
            {
                "id": "21",
                "title": "Drink",
                "desc": "Everybody must take 2 sips",
                "img": "/images/drink.jpg"
            },
            {
                "id": "22",
                "title": "Rule",
                "desc": "Make up a rule that everybody must follow. Breaking the rule results in a drink.",
                "img": "/images/rule.jpg"
            },
            {
                "id": "23",
                "title": "Rule",
                "desc": "Sympathy overload! Everybody must drink the same amount for one round.",
                "img": "/images/rule.jpg"
            },
            {
                "id": "24",
                "title": "Rule",
                "desc": "There is now a little green man on your cup. Remove him and put him on the table when you must drink. After you are done you put him back on the rim of your cup. Not removing the little green man means you take one extra drink.",
                "img": "/images/rule.jpg"
            },
            {
                "id": "25",
                "title": "Rule",
                "desc": "Once this rule is in motion, whoever breaks the different rules 3 times must finish their drink.",
                "img": "/images/rule.jpg"
            },
            {
                "id": "26",
                "title": "Activity",
                "desc": "Never have I ever! Say something you've never done. The minority must drink.",
                "img": "/images/activity.jpg"
            },
            {
                "id": "27",
                "title": "Activity",
                "desc": "Duel! Use finger guns on the person to your left. The person on your right calls when you draw your guns. The loser drinks.",
                "img": "/images/activity.jpg"
            },
            {
                "id": "28",
                "title": "Drink",
                "desc": "Lucky break! Nobody drinks!",
                "img": "/images/drink.jpg"
            },
            {
                "id": "29",
                "title": "Activity",
                "desc": "Truth or Dare! Pick a person to choose Truth or Dare. A successful dare or a believable truth means no drinking. Chicken out and drink.",
                "img": "/images/activity.jpg"
            },
            {
                "id": "30",
                "title": "Activity",
                "desc": "Text your ex and say you miss him/her, or take 5 sips. Whichever is easiest.",
                "img": "/images/activity.jpg"
            },
            {
                "id": "31",
                "title": "Drink",
                "desc": "Drink if you want to have sex with somebody in the room.",
                "img": "/images/drink.jpg"
            },
            {
                "id": "32",
                "title": "Drink",
                "desc": "Drink if you have a crush on somebody in the room.",
                "img": "/images/drink.jpg"
            },
            {
                "id": "33",
                "title": "Activity",
                "desc": "Show your best dance move! The group votes after and the minority of against or for must drink.",
                "img": "/images/activity.jpg"
            }
        ]
    }
const peopleArray = [];


//This function adds the user input into the 'people' array.
function nameInput(){
    //peopleInput stores the text written in the input area.
    let peopleInput = document.getElementById("nameInput").value;

    //This function pushes the stored input into an array.
    peopleArray.push(peopleInput);

    //This variable saves the parent node for the names list.
    let peopleOutput = document.getElementById("nameList");

    //This function prints out the array list of names into the UL as LI elements.
    let li = document.createElement('li');
    li.innerHTML = '<p id=person' + personNum++ + '>' + peopleArray + '</p>';
    peopleOutput.appendChild(li);
    console.log(li.innerHTML);
    //This function takes out the stored input from the array so we don't get duplicates
    //in the list.
    peopleArray.pop();
}

/*
//STORED TEMPORARILY, MIGHT (NOT) USE.
//These arrays store a random person each from the array of people.
    let p1 = jsonContent.people[Math.floor(Math.random() * jsonContent.people.length)];
    let p2 = jsonContent.people[Math.floor(Math.random() * jsonContent.people.length)];
    //This while function makes sure the two people picked are never the same person.
    while(p1 === p2){
        p2 = jsonContent.people[Math.floor(Math.random() * jsonContent.people.length)];
    }
*/

//This function pulls a random cards object from the JSON and then fills the card with
//the information wish.


function pullCard(){
    
    //This function will delete the previous card so the space is filled with a new card if the function is called more than once.
    let deleteCard = document.getElementById("pulledCard");
    while (document.getElementById("pulledCard").firstChild) {
    deleteCard.removeChild(deleteCard.firstChild);
    }
    
    //This function pulls a random id from jsonContent. Credit to Vicky Gonsalves of StackOverflow.
    let random = jsonContent.cards[Math.floor(Math.random() * jsonContent.cards.length)];

    //This variable holds the ID of all li elements, but without number.
    //To fill in the number there is a global index (i = 0) in the top of the script.
    //It's there so it doesn't get forgot after the function is finished.
    //After this function is called the index is iterated and we can pull the next
    //li element with id person1 instead of person0.
    let cardNamesPrefix = 'person';
    let cardNames = document.getElementById(cardNamesPrefix + i).innerText;
    i++;
    
    //If the function iterates to an li id that hasn't been created through
    //the DOM yet, then it changes the value of the index back to 0 and starts
    //all over.
    if(document.getElementById(cardNamesPrefix + i) == null){
        i = 0;
    }
   
    //This variable holds the element with the #pulledCard ID.
    //We want it saved in a variable so it's easier to use the 
    //appendChild function further down in the codeblock.
    let pulledCard = document.getElementById("pulledCard");
    
    let img = document.createElement('img');
    img.setAttribute('src', random.img);

    let descName = document.createElement('b');
    descName.innerHTML = '<b>' + cardNames + '</b>';

    let descDiv = document.createElement('div');
    descDiv.innerHTML = '<b>Description:</b>' + ' ' + random.desc;
    
    
    /*pulledCard.appendChild(h2);*/
    pulledCard.appendChild(img);
    pulledCard.appendChild(descName);
    pulledCard.appendChild(descDiv);
}