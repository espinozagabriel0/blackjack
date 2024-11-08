console.log('game started.');

let deck = [];
let types = ['C', 'D', 'H', 'S'];
let specials = ['A', 'J', 'Q', 'K'];

// TODO: FUNCTION THAT CREATES THE DECK 
const createDeck = () => {
    // not special cards
    for (let i = 2; i <= 10; i++) {
        for (let type of types) {
            deck.push(i+type);
        }
    }
    //special cards
    for (let type of types) {
        for (let special of specials) {
            deck.push(special + type);
        }
    }
    // console.log(deck);
    // return deck;
    return _.shuffle(deck);
}

let deckShuffled  = createDeck();

console.log(deckShuffled);


//TODO: TAKE CARD
