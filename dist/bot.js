"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
const telegraf_1 = require("telegraf");
const replyMenu_1 = require("./commands/menu/replyMenu");
const config_1 = require("./config");
exports.bot = new telegraf_1.Telegraf(config_1.config.BOT_TOKEN);
exports.bot.start((ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, replyMenu_1.replyMenu)(ctx);
}));
