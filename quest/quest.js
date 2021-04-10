import { findById } from "../utils.js";
import quests from '../data/quest-data.js';

const title = document.getElementById('title');



const searchParams = new URLSearchParams(window.location.search);

const questId = searchParams.get('id');

const quest = findById(quests, questId);

title.textContent = quest.title;



