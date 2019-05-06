const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 1337;
const Discord = require('discord.js');
const client = new Discord.Client();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port || 1337, function(){
    console.log('Node.js is running on ' + port + '.');
});

let token = process.env.CLIENT_TOKEN || 'NTY4NTMzOTUwMTQyNzQyNTM5.XNB7Tw.xW8dZb5LYPi-QwdqGqua3aHHtAI';
let prefix = process.env.PREFIX || '!';

client.login(token);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});