#!/usr/bin/env node

import {rule, brainGame} from '../src/brainGames/brain-even.js';
import {game} from '../src/main.js';
game(brainGame, rule);