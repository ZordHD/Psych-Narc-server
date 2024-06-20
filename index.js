require('dotenv').config()

const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const ErrorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')
const WebSocket = require('ws');

const PORT = process.env.PORT || 5000

// Инициализация Express-приложения
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

// Обработка ошибок
app.use(ErrorHandler)

// Создание HTTP-сервера с Express-приложением
const server = require('http').createServer(app);

// WebSocket-сервер
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('WebSocket client connected');

  ws.on('message', (message) => {
    console.log('Received message:', message);
    // Обработка сообщения и отправка ответа
    ws.send('Server received: ' + message);
  });

  ws.on('close', () => {
    console.log('WebSocket client disconnected');
  });
});

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    server.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch(e) {
    console.log(e)
  }
}

start()