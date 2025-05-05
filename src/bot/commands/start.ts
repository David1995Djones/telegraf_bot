import { Context } from "telegraf";

export const startCommand = (ctx: Context) => {
    ctx.reply('👋 Привет! Я готов к работе. Напиши /help, чтобы узнать, что я умею.');
}
