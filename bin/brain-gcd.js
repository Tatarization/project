#!/usr/bin/env node

import {rule, brainGcd} from '../src/brainGames/brain-gcd.js';
import {game} from '../src/main.js';
game(brainGcd, rule);