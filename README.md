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
├── controllers/                 # Контролери для обробки запитів
│   └── contacts.js
├── constants/                  # Константи, що використовуються в додатку
│   └── index.js
├── db/
│   ├── models/                  # Mongoose-схеми
│   │   └── contacts.js
│   └── initMongoConnection.js   # Підключення до MongoDB
├── middlewares/                # Кастомні middleware
│   ├── errorHandler.js
│   ├── isValidId.js            # Перевірка MongoDB ObjectId
│   ├── notFoundHandler.js
│   └── validateBody.js         # Middleware для Joi валідації
├── routes/                     # Роутери
│   └── contacts.js
├── services/                   # Бізнес-логіка
│   └── contacts.js
├── utils/                      # Утиліти
│   ├── calculatePaginationData.js
│   ├── ctrlWrapper.js
│   ├── getEnvVar.js
│   ├── parseFilterParams.js
│   ├── parsePaginationParams.js
│   └── parseSortParams.js
├── validation/                 # Joi-схеми валідації
│   └── contacts.js
├── index.js                    # Точка входу
└── server.js                   # Запуск сервера
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
3. Створи .env файл у корені проєкту та додай змінні середовища:
```
cp .env.example .env
```
Приклад у `.env.example`
4. Запусти сервер:
```
npm run dev
```

## 📮 API Endpoints

## ✅ GET /
Тестовий роут для перевірки роботи сервера.

## 📥 GET /contacts
Отримати список контактів з підтримкою:
Пагінації: ``?page=1&perPage=10``
Сортування: ``?sortBy=name&sortOrder=asc``
Фільтрації: ``?type=personal&isFavourite=true``
📤 Формат відповіді:
```
{
  "status": 200,
  "message": "Successfully found contacts!",
  "data": {
    "data": [/* масив контактів */],
    "page": 1,
    "perPage": 10,
    "totalItems": 25,
    "totalPages": 3,
    "hasPreviousPage": false,
    "hasNextPage": true
  }
}
```
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


## 🧪 Реалізовано:
Валідація
Middleware validateBody(schema) створює Joi-валідацію.
Для POST і PATCH валідуються всі обов’язкові поля.
Поля типу string мають довжину 3–20 символів.

Пагінація
GET /contacts?page=2&perPage=5
Повертаються: page, perPage, totalItems, totalPages, hasPreviousPage, hasNextPage

Сортування
sortBy=name, sortOrder=asc|desc
За замовчуванням сортування у висхідному порядку

Фільтрація
type=home|personal
isFavourite=true|false

