// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {

  // create a section tag with an id of middle-earth

  const newSection = document.createElement('section');
  newSection.setAttribute("id", "middle-earth");

  // inside, add each land as an article tag

  lands.forEach((i) => {
    const newArticle = document.createElement('article');

    // inside each article tag include an h1 with the name of the land

    const newH1 = document.createElement('h1');
    newH1.innerText = i;
    newArticle.appendChild(newH1);
    newSection.appendChild(newArticle);

    // append middle-earth to your document body

    body.appendChild(newSection);
  })

}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  const newUl = document.createElement('ul');
  newUl.setAttribute('id', "hobbitList");
  const shire = document.querySelector('article');
  
  
  hobbits.forEach((i) => {
    const newLi = document.createElement('li');
    newLi.innerText = i;

    // give each hobbit a class of hobbit

    newLi.setAttribute("class", "hobbit");
    if(i === 'Frodo Baggins') {
      newLi.setAttribute('id', 'frodo')
      // console.log("FRODO");
    } else if(i === "Samwise 'Sam' Gamgee") {
      newLi.setAttribute('id', 'sam');
    }
    newUl.appendChild(newLi);
    
  })
  shire.appendChild(newUl);
}
makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {

  // create a div with an id of 'the-ring'

  const newDiv = document.createElement('div');
  newDiv.setAttribute("id", "the-ring");

  // give the div a class of 'magic-imbued-jewelry'

  newDiv.setAttribute("class", "magic-imbued-jewlery");

  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked

  newDiv.addEventListener('click', function() {
    nazgulScreech();
    totalClicks++;
    if(totalClicks >= 3) {
      body.style.visibility = "hidden";
      var newBody = document.createElement('body');
      document.querySelector('html').appendChild(newBody);
      var failure = document.createElement('h2');
      failure.innerHTML = "The Ring has been returned to Sauron and the world is over.";
      newBody.appendChild(failure);
      // console.log(newBody);
      // console.log(failure);
    }
  })

  // add the ring as a child of Frodo

  const frodo = document.getElementById('frodo');
  frodo.appendChild(newDiv);
  // console.log(newDiv);
}
keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {

  // create an aside tag

  const aside = document.createElement('aside');

  // attach an unordered list of the 'buddies' in the aside

  const listBuddies = document.createElement('ul');
  listBuddies.setAttribute('id', "buddiesList");
  buddies.forEach((i) => {
    const buddies = document.createElement('li');
    // console.log("BUDDIES: ", i);
    listBuddies.appendChild(buddies);
    if(i === 'Strider') {
      buddies.setAttribute('id', 'strider');
    } else if(i === 'Gandalf the Grey') {
      buddies.setAttribute('id', 'gandalf');
    } else if(i === 'Boromir') {
      buddies.setAttribute('id', 'boromir');
    }
    buddies.innerText = i;
   
    listBuddies.appendChild(buddies);

  })
  aside.appendChild(listBuddies);
  // console.log(aside);

  // insert your aside as a child element of rivendell

  var rivendell = document.querySelectorAll('article')[1];
  rivendell.appendChild(aside);
  // console.log("RIVENDELL: ", rivendell);
}
makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  const strider = document.getElementById('strider');
  strider.innerText = 'Aragorn';
  // console.log('strider to aragorn');
}
beautifulStranger();


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  const hobbits = document.getElementById("hobbitList");
  const article = document.querySelector('article');
  article.removeChild(hobbits);

  const rivendell = document.querySelectorAll('article')[1];
  // console.log(rivendell);
  rivendell.appendChild(hobbits);
  // console.log(hobbits);
}
leaveTheShire();

// Part 7


function forgeTheFellowShip() {
 

  const rivendell = document.querySelectorAll('article')[1];

  const rivBuddies = document.getElementById('buddiesList');
  const rivHobbits = document.getElementById('hobbitList');  // Parent
  const listBuddies = rivBuddies.querySelectorAll('li');
  // console.log(listBuddies);
  const listHobbits = rivHobbits.querySelectorAll('li'); // Child
  // console.log(listHobbits);

  // create a new div called 'the-fellowship' within rivendell

  const fellowship = document.createElement('div');
  fellowship.setAttribute('id', 'the-fellowship');

  const newUl = document.createElement('ul');
  fellowship.appendChild(newUl);
  rivendell.appendChild(fellowship);

  // add each hobbit and buddy one at a time to 'the-fellowship'

  // Buddies
  for (i=0; i<buddies.length; i++) {
    // console.log(i);
    rivBuddies.removeChild(listBuddies[i]);
    fellowship.appendChild(listBuddies[i]);
    console.log(listBuddies[i].innerText + " has joined your party!");
  }

  // Hobbits
  // for (i=0; i<hobbits.length; i++) {
  //   rivHobbits.removeChild(listHobbits[i]);
  //   fellowship.firstChild.appendChild(listHobbits[i]);
  //   console.log(listHobbits[i].innerText + " has joined your party!");
  // }
  
  for(var i = rivHobbits.childNodes.length-1; i>=0; i--){
    fellowship.appendChild(rivHobbits.childNodes[0]);
    console.log(listHobbits[i].innerText + " has joined your party!");
  }
  // after each character is added make an alert that they have joined your party


  // console.log(fellowship);
  // console.log(fellowship.firstChild);


}
forgeTheFellowShip();

// Part 8


function theBalrog() {

  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border

  const gandalf = document.getElementById('gandalf');
  // console.log(gandalf);
  gandalf.innerText="Gandalf the White";
  gandalf.style.display = "inline-block";
  gandalf.style.background = "white";
  gandalf.style.border = "5px solid grey";
}
theBalrog();

// Part 9

function hornOfGondor() {

  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship

  console.log("The horn of gondor has been blown!");
  const boromir = document.getElementById('boromir');

  setTimeout(function(){ 
    boromir.style.setProperty("text-decoration", "line-through");
   }, 2000);

  setTimeout(function(){ 
    boromir.remove();
   }, 4100);
   console.log('Borimor has been killed by the Uruk-hai!');
}
hornOfGondor()

// Part 10

function itsDangerousToGoAlone(){

  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor

  const mountDoom = document.createElement('div');
  const mordor = document.querySelectorAll('article')[2];
  mordor.setAttribute('id', 'mount-doom');  
  const frodo = document.getElementById('frodo');
  const sam = document.getElementById('sam');
  const fellowship = document.getElementById('the-fellowship');
  const newUl = document.createElement('ul');
  mordor.appendChild(newUl);

  fellowship.removeChild(frodo);
  fellowship.removeChild(sam);
  mordor.lastChild.appendChild(frodo);
  mordor.lastChild.appendChild(sam);

  mordor.appendChild(mountDoom);
}
itsDangerousToGoAlone()

// Part 11

function weWantsIt() {

  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom

  const mountDoom = document.getElementById('mount-doom');
  const mordor = document.querySelectorAll('article')[2];
  // console.log(mordor);
  const gollum = document.createElement('div');
  gollum.setAttribute('id', 'gollum');
  mordor.appendChild(gollum);
  const ring = document.getElementById('the-ring');
  const frodo = document.getElementById('frodo');
  // console.log(ring);
  frodo.removeChild(ring);
  gollum.appendChild(ring);
}

weWantsIt();
// Part 12

function thereAndBackAgain() {

  // remove Gollum and the Ring from the document

  const gollum = document.getElementById('gollum');
  const ring = document.getElementById('the-ring');
  gollum.removeChild(ring);
  gollum.remove();

  // remove all the buddies from the document

  const buddies = document.getElementById('the-fellowship');
  // Move all the hobbits back to the shire
  const shire = document.querySelector('article');
  console.log(shire);
  const oldHobbits = document.querySelectorAll('.hobbit');
  // console.log(hobbits);
  // hobbits.removeChild()
  const newUl = document.createElement('ul');
  shire.appendChild(newUl);
  hobbits.forEach((i) => {
    const newLi = document.createElement('li');
    newUl.appendChild(newLi);
    newLi.innerText = i;
  })
  const frodo = document.getElementById('frodo');
  const sam = document.getElementById('sam');

  frodo.remove();
  sam.remove();
  buddies.remove();
}
thereAndBackAgain();