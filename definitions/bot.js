const Telegraf = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

F.middleware('bot', bot.webhookCallback('/secret-path'));
bot.telegram.setWebhook('https://server.tld:8443/secret-path');

// Use the middleware for all routes
F.use('bot', '*', ['web']);
