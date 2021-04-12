import { loadProfile } from '../load-profile.js';
import { getUser } from '../local-storage.js';
import { aliveGoldMessages, deadGoldMessages, hpMessages } from './messages.js';
import { scoreGold, scoreHp } from './results-utils.js';


loadProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');


const hpResult = scoreHp(user.hp);
const goldResult = scoreGold(user.gold);
const hpMessage = hpMessages[hpResult];

let goldMessages = null;
if (hpResult === 'dead') {
    goldMessages = deadGoldMessages;
}
else {
    goldMessages = aliveGoldMessages;
}

const goldMessage = goldMessages[goldResult];

let story = `After your adventures,
 ${user.name} the ${user.race}, ${hpMessage} and ${goldMessage}`;

storyDisplay.textContent = story;
