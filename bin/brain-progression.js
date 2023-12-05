#!/usr/bin/env node
import { playGame } from '../src/index.js';
import generateProgression from '../src/games/progression.js';

const gameGreet = 'What number is missing in the progression?';
playGame(generateProgression, gameGreet);
