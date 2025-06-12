# 📇 Contacts API

Навчальний проєкт для роботи з REST API на основі **Node.js** та **Express**. Зберігання контактів реалізовано через MongoDB.

## 🛠 Технології
Node.js
Express
MongoDB
Mongoose

## 📁 Структура проєкту
```
src/
├── controllers/
│   └── contacts.js              # Контролери для обробки запитів
├── db/
│   ├── models/
│   │   ├── contacts.js          # Mongoose-схема контактів
│   │   └── initMongoConnection.js # Підключення до MongoDB
├── middlewares/
│   ├── errorHandler.js          # Глобальний обробник помилок
│   └── notFoundHandler.js       # Обробник 404
├── routes/
│   └── contacts.js              # Оголошення маршрутів
├── services/
│   └── contacts.js              # Бізнес-логіка роботи з контактами
├── utils/
│   ├── ctrlWrapper.js           # Обгортка для контролерів (обробка помилок)
│   └── getEnvVar.js             # Отримання змінних середовища
├── index.js                     # Ініціалізація застосунку
└── server.js                    # Налаштування та запуск серверу
```
## 🚀 Запуск проєкту локально

1. Клонуй репозиторій:
```
git clone https://github.com/yevhenii-mironenko/node-js-hw-2.git
```
2. Встанови залежності:
```
npm install
```
3. Створи .env файл у корені проєкту та додай змінні середовища.
Приклад у `.env.example`
4. Запусти сервер:
```
npm run dev
```

## 📮 API Endpoints

## ✅ GET /
Тестовий роут для перевірки роботи сервера.

## 📥 GET /contacts
Отримати список усіх контактів.

## 🔍 GET /contacts/:contactId
Отримати контакт за ID.

## ➕ POST /contacts
Створити новий контакт.
Приклад тіла запиту:
```
{
  "name": "John Doe",
  "phoneNumber": "123-456-7890",
  "email": "john.doe@example.com",
  "isFavourite": false,
  "contactType": "personal"
}
```

## 🖊 PUT /contacts/:contactId
Оновити весь контакт (повна заміна даних).
Приклад тіла запиту:
```
{
  "name": "Jane Doe",
  "phoneNumber": "987-654-3210",
  "email": "jane.doe@example.com",
  "isFavourite": true,
  "contactType": "home"
}
```

## ✏ PATCH /contacts/:contactId
Оновити лише окремі поля контакту.
Приклад тіла запиту:
```
{
  "isFavourite": true,
  "contactType": "home"
}
```

## ❌ DELETE /contacts/:contactId
Видалити контакт за ID.
