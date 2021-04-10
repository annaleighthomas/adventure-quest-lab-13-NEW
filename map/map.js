import quests from '../data/quest-data.js';

const links = document.getElementById('links');


for (let quest of quests) {
    const anchorTag = document.createElement('a');
    anchorTag.textContent = quest.title;
    anchorTag.href = '../quest/?id=' + quest.id;
    links.append(anchorTag);
}