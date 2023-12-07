#!/usr/bin/env node

import { playGame } from '../src/index.js';
import generateGame from '../src/games/prime.js';

const gameGreet = 'Answer "yes" if given number is prime. Otherwise answer "no".';

playGame(generateGame, gameGreet);
