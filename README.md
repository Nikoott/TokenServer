# TokenServer
Node Server to create Dialog Flow Access Token which then is used to make API Calls 

## About
This is used as a workaround to avoid publishing confidential data to Github or any external hosting platform.

A Node JS Server is being hosted locally on Port 4000 to generate tokens which can be used to connect to Google's Dialogflow Service.

## Requirements
Node JS: https://nodejs.org/de/download/ 

Cors Node JS Package: npm i cors --save 

Google OAuth 2.0 authentication: npm i google-oauth-jwt

Express: npm i express

## Use
Create a 'credentials.json' and add the required confidential data

## Running
node tokenserver.js
