//Credit to Vicky Gonsalves of StackOverflow for this function
//https://stackoverflow.com/questions/19589598/how-to-get-random-values-in-json

//This is the content where all the cards are pulled from.
const jsonContent = {
    
        "people": [
            {
              "name": "Craig"  
            },
            {
              "name": "Ole"  
            },
            {
              "name": "Jon"  
            }
        ],
        "cards": [
            {
                "id": "1",
                "title": "Drink",
                "desc": "Take 1 sip",
                "img": "#url"
            },
            {
                "id": "2",
                "title": "Drink",
                "desc": "Take 2 sips",
                "img": "#url"
            },
            {
                "id": "2",
                "title": "Drink",
                "desc": "Take 3 sips",
                "img": "#url"
            },
            {
                "id": "3",
                "title": "Drink",
                "desc": "Take 4 sips",
                "img": "#url"
            },
            {
                "id": "4",
                "title": "Drink",
                "desc": "Take 5 sips",
                "img": "#url"
            },
            {
                "id": "5",
                "title": "Drink",
                "desc": "Pick someone to take 1 sip",
                "img": "#url"
            },
            {
                "id": "6",
                "title": "Drink",
                "desc": "Pick someone to take 2 sips",
                "img": "#url"
            },
            {
                "id": "7",
                "title": "Drink",
                "desc": "Pick someone to take 3 sips",
                "img": "#url"
            },
            {
                "id": "8",
                "title": "Drink",
                "desc": "Pick someone to take 4 sips",
                "img": "#url"
            },
            {
                "id": "9",
                "title": "Drink",
                "desc": "Pick someone to take 5 sips",
                "img": "#url"
            },
            {
                "id": "10",
                "title": "Drink",
                "desc": "Start a waterfall! Cardpicker starts drinking and the rest must follow until cardpicker stops drinking.",
                "img": "#url"
            },
            {
                "id": "11",
                "title": "Drink",
                "desc": "All men must drink",
                "img": "#url"
            },
            {
                "id": "12",
                "title": "Drink",
                "desc": "All women must drink",
                "img": "#url"
            },
            {
                "id": "13",
                "title": "Activity",
                "desc": "Last person to put their thumb on the table must drink.",
                "img": "#url"
            },
            {
                "id": "14",
                "title": "Activity",
                "desc": "Tell a joke. All who laugh must drink.",
                "img": "#url"
            },
            {
                "id": "15",
                "title": "Activity",
                "desc": "Raise your hands in the air. First and last person to raise their hands must drink.",
                "img": "#url"
            },
            {
                "id": "16",
                "title": "Activity",
                "desc": "Start counting! Never say 7 or any number it multiplies into. The person that fails must drink.",
                "img": "#url"
            },
            {
                "id": "17",
                "title": "Activity",
                "desc": "Point at the person who is most likely to get drunk. The person with the most votes must drink.",
                "img": "#url"
            },
            {
                "id": "18",
                "title": "Activity",
                "desc": "Pick a drinking buddy! Whenever you have to drink, your drinking buddy must drink also.",
                "img": "#url"
            },
            {
                "id": "19",
                "title": "Activity",
                "desc": "Paranoia! Whisper a question to the person on your left. The answer must be out loud. If anybody asks what the question was, they must drink and the question must be said out loud.",
                "img": "#url"
            },
            {
                "id": "20",
                "title": "Activity",
                "desc": "Play a really convincing air guitar. The group votes after if it was good or not. The group with the fewer votes must drink.",
                "img": "#url"
            },
            {
                "id": "21",
                "title": "Drink",
                "desc": "Everybody must take 2 sips",
                "img": "#url"
            },
            {
                "id": "22",
                "title": "Rule",
                "desc": "Make up a rule that everybody must follow. Breaking the rule results in a drink.",
                "img": "#url"
            },
            {
                "id": "23",
                "title": "Rule",
                "desc": "Sympathy overload! Everybody must drink the same amount for one round.",
                "img": "#url"
            },
            {
                "id": "24",
                "title": "Rule",
                "desc": "There is now a little green man on your cup. Remove him and put him on the table when you must drink. After you are done you put him back on the rim of your cup. Not removing the little green man means you take one extra drink.",
                "img": "#url"
            },
            {
                "id": "25",
                "title": "Rule",
                "desc": "Once this rule is in motion, whoever breaks the different rules 3 times must finish their drink.",
                "img": "#url"
            },
            {
                "id": "26",
                "title": "Activity",
                "desc": "Never have I ever! Say something you've never done. The minority must drink.",
                "img": "#url"
            },
            {
                "id": "27",
                "title": "Activity",
                "desc": "Duel! Use finger guns on the person to your left. The person on your right calls when you draw your guns. The loser drinks.",
                "img": "#url"
            },
            {
                "id": "28",
                "title": "Drink",
                "desc": "Lucky break! Nobody drinks!",
                "img": "#url"
            },
            {
                "id": "29",
                "title": "Activity",
                "desc": "Truth or Dare! Pick a person to choose Truth or Dare. A successful dare or a believable truth means no drinking. Chicken out and drink.",
                "img": "#url"
            },
            {
                "id": "30",
                "title": "Activity",
                "desc": "Text your ex and say you miss him/her, or take 5 sips. Whichever is easiest.",
                "img": "#url"
            },
            {
                "id": "31",
                "title": "Drink",
                "desc": "Drink if you want to have sex with somebody in the room.",
                "img": "#url"
            },
            {
                "id": "32",
                "title": "Drink",
                "desc": "Drink if you have a crush on somebody in the room.",
                "img": "#url"
            },
            {
                "id": "33",
                "title": "Activity",
                "desc": "Show your best dance move! The group votes after and the minority of against or for must drink.",
                "img": "#url"
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
   
    let p1 = jsonContent.people[Math.floor(Math.random() * jsonContent.people.length)];
    let p2 = jsonContent.people[Math.floor(Math.random() * jsonContent.people.length)];
    while(p1 === p2){
        p2 = jsonContent.people[Math.floor(Math.random() * jsonContent.people.length)];
    }
    
    //This variable holds the element with the #pulledCard ID.
    //We want it saved in a variable so it's easier to use the 
    //appendChild function further down in the codeblock.
    let pulledCard = document.getElementById("pulledCard");
    
    /*let h2 = document.createElement('h2');
    h2.innerHTML = '<h2>' + random.title + '</h2>';*/
                
    let descDiv = document.createElement('div');
    descDiv.innerHTML = '<p><b>' + p1.name + ' & ' + p2.name +'</b>, your turn!' + '</p><b>Description:</b>' + ' ' + random.desc;
    
    
    /*pulledCard.appendChild(h2);*/
    pulledCard.appendChild(descDiv);
}