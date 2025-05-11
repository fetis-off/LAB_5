#                   LAB_5 
# 💱 Ratexchanges API Example

Цей репозиторій демонструє простий сценарій використання зовнішнього API сервісу [Ratexchanges.com](https://www.ratexchanges.com), який надає актуальні курси валют у реальному часі.

---

## 📌 Сценарій використання

**Завдання:**  
Отримати поточний курс євро (EUR) до долара США (USD) за допомогою публічного API та вивести його в консоль.

Цей сценарій можна застосовувати у:

- Фінансових веб-застосунках
- Онлайн-конвертерах валют
- Бекенд-системах для курсової аналітики
- Telegram-ботах для моніторингу валют

---

## 🔗 Використаний API

**Ендпоінт:**  
GET https://api.ratexchanges.com/latest?from=EUR&to=USD

**Приклад відповіді:**
```json
{
  "success": true,
  "timestamp": 1715419832,
  "base": "EUR",
  "date": "2025-05-11",
  "rates": {
    "USD": 1.0823
  }
}
```

# 🛠️ Інструкції по запуску

🔧 Вимоги
Node.js 18+

# 📥 Установка
```bash
git clone https://github.com/your-username/ratexchanges-api-example.git
cd ratexchanges-api-example
npm install
```

# 📄 Код прикладу (index.js)
```
const axios = require('axios');

async function getExchangeRate() {
  try {
    const response = await axios.get('https://api.ratexchanges.com/latest?from=EUR&to=USD');
    const rate = response.data.rates.USD;
    console.log(`Курс EUR до USD: ${rate}`);
  } catch (error) {
    console.error('Помилка при отриманні курсу:', error.message);
  }
}

getExchangeRate();
```

# 🔐 Авторизація
У випадку, якщо API потребує ключ доступу, додайте його до заголовків:
```
headers: {
  'Authorization': 'Bearer YOUR_API_KEY'
}
```

# 🧑‍💻 Автор опису
Фетісов Олександр ІС-32


