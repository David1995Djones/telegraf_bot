import { Telegraf } from "telegraf";
import { config } from "../config";

import { startCommand } from "./commands/start";
import { helpCommand } from "./commands/help";

export const bot = new Telegraf(config.BOT_TOKEN)

bot.start(startCommand)
bot.help(helpCommand)