#!/usr/bin/env node

import {rule, runBrainProgression} from '../src/brainGames/brain-progression.js';
import {runGame} from '../src/main.js';
runGame(runBrainProgression, rule);