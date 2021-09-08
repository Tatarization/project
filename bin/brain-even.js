#!/usr/bin/env node

import {rule, RunBrainEven} from '../src/brainGames/brain-even.js';
import {runGame} from '../src/main.js';
runGame(RunBrainEven, rule);