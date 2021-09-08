#!/usr/bin/env node

import {rule, runBrainPrime} from '../src/brainGames/brain-prime.js';
import {runGame} from '../src/main.js';
runGame(runBrainPrime, rule);