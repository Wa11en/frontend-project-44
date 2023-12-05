#!/usr/bin/env node

import { playGame } from '../src/index.js';
import generateGame from '../src/games/gcd.js';

const gameGreet = 'Find the greatest common divisor of given numbers.';

playGame(generateGame, gameGreet);
