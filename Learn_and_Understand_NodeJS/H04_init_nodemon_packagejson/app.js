#!/usr/bin/env node

'use strict';

// look in the node_modules folder
var moment = require('moment');

// day, hour AM/PM
console.log(moment().format("ddd, hA"));
