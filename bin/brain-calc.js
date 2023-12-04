#!/usr/bin/env node

import { playGame } from '../src/index.js';
import generateGame from '../src/games/calc.js';

const gameGreet = 'What is the result of the expression?';

playGame(generateGame, gameGreet);
