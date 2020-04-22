
const { admin, db } = require('../util/admin');
const config = require('../../src/Firebase');

const firebase = require('firebase');

firebase.initializeApp(config);

const { validateLoginData, validateSignUpData } = require('../util/validators');

// login

