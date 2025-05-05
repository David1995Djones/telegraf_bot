import { Context } from "telegraf";

export const helpCommand = (ctx: Context) => {
    ctx.reply(`
        ℹ️ Вот что я умею:
        /start — Запуск бота
        /help — Помощь и список команд
    `)
}

