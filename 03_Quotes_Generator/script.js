
const gandhiQuotes = [
    "Be the change that you wish to see in the world.",
    "The best way to find yourself is to lose yourself in the service of others.",
    "An eye for an eye will leave the whole world blind.",
    "Happiness is when what you think, what you say, and what you do are in harmony.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "The weak can never forgive. Forgiveness is the attribute of the strong.",
    "You may never know what results come of your actions, but if you do nothing, there will be no result.",
    "In a gentle way, you can shake the world.",
    "The future depends on what you do today.",
    "Strength does not come from physical capacity. It comes from an indomitable will."
];

function randomQuote() {
    let num = Math.floor(Math.random() * gandhiQuotes.length);
    let quote = gandhiQuotes[num];
    return quote;
}

document.getElementById('btn').addEventListener('click', () => {
    document.getElementById('quotes').innerHTML = randomQuote();
})