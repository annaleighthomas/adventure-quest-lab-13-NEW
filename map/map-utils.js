export function hasCompletedAllQuests(quests, user) {
    for (let quest of quests)

        if (!user.completed[quest.id]) {
            return false;
        }
    return true;
}

export function createCompletedQuest(quest) {
    const span = document.createElement('span');
    span.classList.add('quest');
    span.classList.add('completed');

    span.textContent = quest.title;
    return span;
}

export function createQuestLink(quest) {
    const link = document.createElement('a');
    link.classList.add('quest');

    link.href = '../quest/?id=' + quest.id;

    link.textContent = quest.title;

    return link;
}