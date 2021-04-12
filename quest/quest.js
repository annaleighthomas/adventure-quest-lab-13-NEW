import { findById } from '../utils.js';
import quests from '../data/quest-data.js';
import { createChoice } from './create-choice.js';
import { getUser, setUser } from '../local-storage.js';
import { scoreQuest } from './quest-func.js';
import { loadProfile } from '../load-profile.js';

const title = document.getElementById('title');
const image = document.getElementById('image');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');

loadProfile();

const searchParams = new URLSearchParams(window.location.search);

const questId = searchParams.get('id');

const quest = findById(quests, questId);

title.textContent = quest.title;
image.src = '../assets/quest/' + quest.image;
description.textContent = quest.description;


for (let index = 0; index < quest.choices.length; index++) {
    const choice = quest.choices[index];

    const choiceDOM = createChoice(choice);

    choices.appendChild(choiceDOM);
}

choiceForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choice');
    const choice = findById(quest.choices, choiceId);
    console.log(choice);

    const user = getUser();
    console.log(user);

    scoreQuest(choice, quest.id, user);

    setUser(user);

    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;

    loadProfile();

    
});



