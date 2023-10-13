let quote = document.querySelector("#quotes");
let person = document.querySelector("#person");
let button = document.querySelector("#new-quote");

const quotesArray = [{
    saying: '" Don\'t take your foot off the gas! "',
    By: "Leslie Abayo"
},
  {
    saying: '" Without hard work, nothing grows but weed "',
    By: " Gordon B.Hinckley"
  },
  {
    saying: '" When  you educate men without religion, you are only building clever devils out of them! "',
    By: " Duke of Wellington "
  },
  {
    saying: '" Until you spread your wings, you have no idea of how far you can fly."',
    By: " Napoleon "
  },
  {
    saying: '" Religion is excellent stuff for keeping common people quiet.Religion is what keeps the poor from murdering the rich."',
    By: " Napoleon "
  },
  {
    saying: '" I am not afraid of an army of lion led by a sheep, I am afraid of an army of sheep led by a lion. "',
    By: " Alexander The Great "
  },
  {
    saying: '" Don\'t sleep too much. If you sleep 3 hours less each night for a year, you will have an extra month which is 13 in total to succeed while the rest will have 12 months."',
    By: " Aristotle Onassis"
  },
  {
    saying: '" Passion is the genesis of genius. "',
    By: " Albert Einstein"
  },
  {
    saying: '" Impossible is not a fact. It\'s an opinion. Impossible is not a declaration. It\'s a dare. Impossible is potential. Impossible is temporary. Impossible is nothing."',
    By: " Muhammad Ali"
  },
  {
    saying: '" I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times."',
    By: " Bruce Lee "
  },
  {
    saying: '" Everyday I ran my race. "',
    By: " Jack Douglous AKA Runtown "
  },
  {
    saying: '" There are no shortcuts to any place worth going. "',
    By: " Beverly Sills"
  },
  {
    saying: '" The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge."',
    By: " Stephen Hawking"
  },
  {
    saying: '" If you reveal your secrets to the wind, you should not blame the wind for revealling them to the tress. "',
    By: " Kahlil Gibran "
  },
  {
    saying: '" For us to be where we are currently, we built many systems, chat apps and many projects, but they failed and we didn\'t give up!"',
    By: " Mark Zuckerberg"
  },
  {
    saying: '" A Gem cannot be polished without friction, nor a man perfected without trials."',
    By: " Nikola Tesla"
  },
  {
    saying: '" Life shrinks or expands in propotion to one\'s courage."',
    By: " Anais Nin"
  },
  {
    saying: '" Eighty percent of success of succes is showing up."',
    By: " Woody Allen "
  },
  {
    saying: '" The best way to predict your future is to create it."',
    By: " Abraham Lincoln "
  },
  {
    saying: '" If you reach the end of your rope, tie a knot to it and hang on it."',
    By: " Frankiln D.Roosevelt "
  },
  {
    saying: '" What happens to you has been waiting to happen since the beginning of time"',
    By: " Marcus Aurelis "
  },
  {
    saying: '" Learning never exhausts the mind. "',
    By: " Leonardo da Vinci "
  },
  {
    saying: '" A lion chased me up a tree and I enjoyed the view from the top."',
    By: " Budha The Great "
  },
  {
    saying: '" Discomfort is a wise teacher "',
    By: " Caroline "
  },
  {
    saying: '" Don\'t let what you cannot do interfere with what you can do. "',
    By: " John Wooden "
  },
  {
    saying: '" Have no fear of perfection, you will never reach it. "',
    By: " Salvador Dali "
  },
  {
    saying: '" Once we accept our limits, we go beyond them. "',
    By: " Albert Einstein "
  },
  {
    saying: '" It is easier to resist at the beginning than at the end. "',
    By: " Leonardo da Vinci "
  },
  {
    saying: '" If opportunity doesn\'t knock, build a door"',
    By: " Aurelius "
  },
  {
    saying: '" Our doubts are traitors and make us lose the good we oft might win by fearing to attempt. "',
    By: " William Shakespeare "
  },
  {
    saying: '" The greatest deception men suffer from, is their own opinions. "',
    By: " Leornado da Vinci "
  },
  {
    saying: '" I will prepare and someday my chance will come. "',
    By: " Abraham Lincoln "
  },
  {
    saying: '" Talent is luck, the important thing in life is courage. "',
    By: " Woody Allen "
  },
  {
    saying: '" Confine yourself to the present. "',
    By: " Marcus Aurelius "
  },
  {
    saying: '" Most people don\'t listen with the intent to understand, but they listen with the intent to reply. "',
    By: " Stephen Covey "
  },
  {
    saying: '" The man who asks a question is  a fool for a minute, the man who does not ask is a fool for life. "',
    By: " Budha The Great "
  },
  {
    saying: '" To be wronged is nothing, unless you continue to remember it. "',
    By: " Budha The Great "
  },
  {
    saying: '" The mind is not a vessel to be filled, but a fire to be kindled. "',
    By: " Plutarch "
  },
  {
    saying: '" Luck is what happens when preparation meets opportunity. "',
    By: " Seneca "
  },
  {
    saying: '" Kites rise the highest against the wind, not with it. "',
    By: " Winston S.Churchill "
  },
  {
    saying: '" Everything you can imagine is real. "',
    By: " Pablo Picasso "
  },
  {
    saying: '" Be alone, that is the secret of invention. Be alone, that is when ideas are born. "',
    By: " Nikola Tesla "
  },
  {
    saying: '" You can tell the greatness of a man by what makes him angry. "',
    By: " Abraham Lincoln "
  },
  {
    saying: '" You are never given more pain than you can handle. "',
    By: " Byron Katie "
  },
  {
    saying: '" Pay attention to your enemies, as they are the first to discover your mistakes. "',
    By: " Antisthenes "
  },
  {
    saying: '" He who angers you, conquers you "',
    By: " Elizabeth Kenny "
  },
  {
    saying: '" I’m like Robin Hood, I take from the rich and give to the poor. Plata O Plomo."',
    By: " Pablo Escobar "
  },
  {
    saying: '" The only thing am addicted to is wining. "',
    By: " Pablo Escobar "
  },
  {
    saying: '" My enemies are not my enemies, but my teachers. They teach me how to be stronger. "',
    By: " Pablo Escobar "
  },
]

button.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotesArray.length);

    quote.innerText = quotesArray[random].saying;
    person.innerText = quotesArray[random].By;
})