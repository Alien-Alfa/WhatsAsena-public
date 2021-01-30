/* Copyright (C) 2021 TOXIC ALIEN.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAlfa
*/


const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('system_stats');

Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {
    await message.sendMessage(
        '```Tanrı Türk\'ü Korusun. 🐺 Asena Hizmetinde!```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```'+Config.BRANCH+'```\n*Telegram Group:* https://t.me/AsenaSupport\n*Telegram Channel:* https://t.me/whatsasenaremaster' , MessageType.text
    );
}));

Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {
    const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
    await message.sendMessage(
        '```' + child + '```', MessageType.text
    );
}));
