import quests from '../data/quest-data.js';
import { loadProfile, } from '../load-profile.js';
import { getUser } from '../local-storage.js';
import { isDead } from '../utils.js';
import { createCompletedQuest, createQuestLink, hasCompletedAllQuests } from './map-utils.js';

loadProfile();

const user = getUser();

if (isDead(user) || hasCompletedAllQuests(quests, user)) {

    window.location = '../results';
}

const nav = document.getElementById('links');

for (let quest of quests) {
    let questDisplay = null;

    if (user.completed[quest.id]) {
        questDisplay = createCompletedQuest(quest);
    }
    else {
        questDisplay = createQuestLink(quest);
    }

    nav.appendChild(questDisplay);
}


// for (let quest of quests) {
//     const anchorTag = document.createElement('a');
//     anchorTag.textContent = quest.title;
//     anchorTag.href = '../quest/?id=' + quest.id;
//     links.append(anchorTag);
// }
