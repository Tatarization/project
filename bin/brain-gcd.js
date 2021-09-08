#!/usr/bin/env node

import {rule, runBrainGcd} from '../src/brainGames/brain-gcd.js';
import {runGame} from '../src/main.js';
runGame(runBrainGcd, rule);