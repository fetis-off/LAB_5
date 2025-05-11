// Dependencies: axios, cheerio

const axios = require('axios');
const cheerio = require('cheerio');

const URL = 'https://www.pravda.com.ua/';
const ONE_HOUR = 60;

(async () => {
    try {
        const { data } = await axios.get(URL);
        const $ = cheerio.load(data);

        const newsItems = [];

        $('.container_sub_news_wrapper .article_news').each((_, el) => {
            const titleElement = $(el).find('a');
            const title = titleElement.text().trim();
            const link = titleElement.attr('href');
            const tag = $(el).find('.article_label').text().trim() || 'Без тегу';

            const timeText = $(el).find('.article_time').text().trim();
            if (timeText) {
                const [hours, minutes] = timeText.split(':').map(Number);
                const newsDate = new Date();
                newsDate.setHours(hours, minutes, 0, 0);
                const now = new Date();
                const diffMinutes = Math.floor((now - newsDate) / 1000 / 60);

                if (diffMinutes >= 0 && diffMinutes <= ONE_HOUR) {
                    newsItems.push({ timeText, title, tag, link: URL + link });
                }
            }
        });

        if (newsItems.length) {
            console.log('Останні новини за останню годину:');
            newsItems.forEach(({ timeText, title, tag, link }) => {
                console.log(`[${timeText}] ${title} (${tag}) - ${link}`);
            });
        } else {
            console.log('Немає новин за останню годину.');
        }
    } catch (error) {
        console.error('Помилка під час отримання новин:', error.message);
    }
})();
