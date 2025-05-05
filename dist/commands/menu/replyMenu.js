"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replyMenu = void 0;
const telegraf_1 = require("telegraf");
const replyMenu = (ctx) => {
    ctx.reply('Сперва ознакомьтесь с правилами', telegraf_1.Markup.keyboard([
        ['Анкеты', 'Правила'],
        ['Связаться с менеджером']
    ]).resize().oneTime());
};
exports.replyMenu = replyMenu;
