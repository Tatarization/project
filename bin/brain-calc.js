#!/usr/bin/env node

import {rule, runBrainCalc} from '../src/brainGames/brain-calc.js';
import {runGame} from '../src/main.js';
runGame(runBrainCalc, rule);