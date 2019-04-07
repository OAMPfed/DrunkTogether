//Credit to Vicky Gonsalves of StackOverflow for this function
//https://stackoverflow.com/questions/19589598/how-to-get-random-values-in-json

//This is the content where all the cards are pulled from.
var jsonContent = {
        "cards": [
            {
                "id": "1",
                "title": "Drink",
                "desc": "Take 1 drink"
            },
            {
                "id": "2",
                "title": "Drink",
                "desc": "Take 2 drink"
            },
            {
                "id": "2",
                "title": "Drink",
                "desc": "Take 3 drink"
            },
            {
                "id": "3",
                "title": "Drink",
                "desc": "Take 4 drink"
            },
            {
                "id": "4",
                "title": "Drink",
                "desc": "Take 5 drink"
            },
            {
                "id": "5",
                "title": "Drink",
                "desc": "Pick someone to take 1 drink"
            },
            {
                "id": "6",
                "title": "Drink",
                "desc": "Pick someone to take 2 drink"
            },
            {
                "id": "7",
                "title": "Drink",
                "desc": "Pick someone to take 3 drink"
            },
            {
                "id": "8",
                "title": "Drink",
                "desc": "Pick someone to take 4 drink"
            },
            {
                "id": "9",
                "title": "Drink",
                "desc": "Pick someone to take 5 drink"
            },
            {
                "id": "10",
                "title": "Drink",
                "desc": "Start a waterfall! Cardpicker starts drinking and the rest must follow until cardpicker stops drinking."
            },
            {
                "id": "11",
                "title": "Drink",
                "desc": "All men must drink"
            },
            {
                "id": "12",
                "title": "Drink",
                "desc": "All women must drink"
            },
            {
                "id": "13",
                "title": "Activity",
                "desc": "Last person to put their thumb on the table must drink."
            },
            {
                "id": "14",
                "title": "Activity",
                "desc": "Tell a joke. All who laugh must drink."
            },
            {
                "id": "15",
                "title": "Activity",
                "desc": "Raise your hands in the air. First and last person to raise their hands must drink."
            },
            {
                "id": "16",
                "title": "Activity",
                "desc": "Start counting! Never say 7 or any number it multiplies into. The person that fails must drink."
            },
            {
                "id": "17",
                "title": "Activity",
                "desc": "Point at the person who is most likely to get drunk. The person with the most votes must drink."
            },
            {
                "id": "18",
                "title": "Activity",
                "desc": "Pick a drinking buddy! Whenever you have to drink, your drinking buddy must drink also."
            },
            {
                "id": "19",
                "title": "Activity",
                "desc": "Paranoia! Whisper a question to the person on your left. The answer must be out loud. If anybody asks what the question was, they must drink and the question must be said out loud."
            },
            {
                "id": "20",
                "title": "Activity",
                "desc": "Play a really convincing air guitar. The group votes after if it was good or not. The group with the fewer votes must drink."
            },
            {
                "id": "21",
                "title": "Drink",
                "desc": "Everybody must take 2 shots"
            },
            {
                "id": "22",
                "title": "Rule",
                "desc": "Make up a rule that everybody must follow. Breaking the rule results in a drink."
            },
            {
                "id": "23",
                "title": "Rule",
                "desc": "Sympathy overload! Everybody must drink the same amount for one round."
            },
            {
                "id": "24",
                "title": "Rule",
                "desc": "There is now a little green man on your cup. Remove him and put him on the table when you must drink. After you are done you put him back on the rim of your cup. Not removing the little green man means you take one extra drink."
            },
            {
                "id": "25",
                "title": "Rule",
                "desc": "Once this rule is in motion, whoever breaks the different rules 3 times must finish their drink."
            },
            {
                "id": "26",
                "title": "Activity",
                "desc": "Never have I ever! Say something you've never done. The minority must drink."
            },
            {
                "id": "27",
                "title": "Activity",
                "desc": "Duel! Use finger guns on the person to your left. The person on your right calls when you draw your guns. The loser drinks."
            },
            {
                "id": "28",
                "title": "Drink",
                "desc": "Lucky break! Nobody drinks!"
            },
            {
                "id": "29",
                "title": "Activity",
                "desc": "Truth or Dare! Pick a person to choose Truth or Dare. A successful dare or a believable truth means no drinking. Chicken out and drink."
            },
            {
                "id": "30",
                "title": "Activity",
                "desc": "Text your ex and say you miss him/her, or drink 5 times. Whichever is easiest."
            },
            {
                "id": "31",
                "title": "Drink",
                "desc": "Drink if you want to have sex with somebody in the room."
            },
            {
                "id": "32",
                "title": "Drink",
                "desc": "Drink if you have a crush on somebody in the room."
            },
            {
                "id": "33",
                "title": "Activity",
                "desc": "Show your best dance move! The group votes after and the minority of against or for must drink."
            }
        ]
    }

function pullCard(){
    //This function will delete the previous card so the space is filled with a new card if the function is called more than once.
    let deleteCard = document.getElementById("pulledCard");
    while (deleteCard.firstChild) {
    deleteCard.removeChild(deleteCard.firstChild);
    }
    
    //This function pulls a random id from jsonContent. Credit to Vicky Gonsalves of StackOverflow.
    let random = jsonContent.cards[Math.floor(Math.random() * jsonContent.cards.length)];
    console.log(random);
    
    let pulledCard = document.getElementById("pulledCard");
    
    let h2 = document.createElement('h2');
    h2.innerHTML = random.title;
                
    let descDiv = document.createElement('div');
    descDiv.innerHTML = '<b>Description: </b>' + random.desc;
    
    
    pulledCard.appendChild(h2);
    pulledCard.appendChild(descDiv);
}