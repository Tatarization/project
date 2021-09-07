#!/usr/bin/env node


import {rule, brainCalc} from '../src/brainGames/brain-calc.js';
import {game} from '../src/main.js';
game(brainCalc, rule);