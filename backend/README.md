# TODO Обновить docker-compose

# Yakutia Web-API

### Зависимости
* node@21.4.0

### Prod-запуск
#### С помощью Docker
`docker compose up --build -d`

### Dev-запуск
```
npm i
hasky install
npm run dev
```

### Доступные роуты
|роут| метод |ответ|
|----|-------|-----|
| localhost:3000 | GET | {"hello":"world"} |
| localhost:3000/intro | GET | {"where":"intro"} |
