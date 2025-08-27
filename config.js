const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~oVI3lTDb#l0wGK9bSv-lI6OgCkkRqQ0Wv0G0gm_rM26N-LHh_JLg
};
