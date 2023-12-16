<template>
    <!-- Блок чата -->
    <div class="chat-container" :class="{ 'moved': messageSent }">
        <!-- Отображение истории сообщений -->
        <div v-for="message in chatHistory" :key="message.text" class="message"
            :class="{ 'user-message': message.isUser, 'user-message-right': message.isUser }">
            {{ message.text }}
        </div>
        <!-- Контейнер для ввода текста и кнопок -->
        <div class="input-container">
            <!-- Поле ввода текста -->
            <textarea ref="textInput" class="question-input" v-model="question" :disabled="loading"
                placeholder="Введите ваш вопрос здесь" @keydown.enter.prevent="handleEnter"></textarea>
            <!-- Кнопка отправки -->
            <button class="send-button" @click="submitForm" :disabled="loading">
                <span v-if="loading">&#8987;</span> <!-- Индикатор загрузки -->
                <span v-else>&#9993;</span> <!-- Иконка отправки -->
            </button>
            <!-- Кнопка копирования ответа -->
            <button class="copy-button" @click="copyResponse" :disabled="!response">
                &#128195;
            </button>
        </div>
    </div>
</template>
  
<script>
import { ref, nextTick } from 'vue';
import axios from 'axios';

export default {
    setup() {
        const question = ref('');
        const response = ref(null);
        const loading = ref(false);
        const messageSent = ref(false);
        const chatHistory = ref([]);
        const textInput = ref(null);

        const submitForm = async () => {
            if (question.value.trim() === '') return;
            loading.value = true;
            messageSent.value = true;

            try {
                // Измените URL в соответствии с адресом вашего сервера
                const serverResponse = await axios.post('http://localhost:5000/generate', { text: question.value });
                response.value = serverResponse.data.response;
                chatHistory.value.push({ text: question.value, isUser: true });
                chatHistory.value.push({ text: response.value, isUser: false });
            } catch (error) {
                console.error('Ошибка при запросе:', error);
                response.value = 'Произошла ошибка при обработке запроса.';
            } finally {
                question.value = '';
                loading.value = false;
                await nextTick();
                textInput.value.focus();
            }
        };

        const handleEnter = (event) => {
            if (event.shiftKey) {
                question.value += '\n';
            } else {
                event.preventDefault();
                submitForm();
            }
        };

        const copyResponse = () => {
            if (response.value) {
                const tempInput = document.createElement('textarea');
                tempInput.value = response.value;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
            }
        };

        return {
            question,
            response,
            loading,
            messageSent,
            chatHistory,
            submitForm,
            handleEnter,
            copyResponse,
            textInput
        };
    },
};
</script>






<style>
/* Общие стили страницы */
body {
    background-color: #121212;
    /* Цвет фона страницы */
    margin: 0;
    /* Убираем отступы по умолчанию */
    font-family: Arial, sans-serif;
    /* Шрифт текста */
}

.copy-button {
    cursor: pointer;
    margin-left: 5px;
    background-color: #1e1e1e;
    border: 1px solid #3a3a3a;
    border-radius: 6px;
    transition: background-color 0.3s, transform 0.2s;
}

.copy-button:hover {
    border: 1px solid #4d4c4c;
    /* Цвет фона кнопки при наведении */
    transform: scale(1.05);
    /* Увеличение размера кнопки при наведении */
}

/* Стили для блока чата */
.chat-container {
    position: absolute;
    /* Абсолютное позиционирование блока */
    top: 20px;
    /* Отступ сверху */
    left: 50%;
    /* Горизонтальное выравнивание по центру */
    transform: translateX(-50%);
    /* Центрирование по горизонтали */
    width: 600px;
    /* Ширина блока чата */
    padding: 20px;
    /* Внутренние отступы */
    background-color: #1e1e1e;
    /* Цвет фона */
    border-radius: 10px;
    /* Скругление углов */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    /* Тень блока */
    color: #ffffff;
    /* Цвет текста */
    transition: all 0.5s ease;
    /* Плавные анимации изменения свойств */
}

@media screen and (max-width: 600px) {
    .chat-container {
        width: auto;
        /* Автоматическая ширина блока чата при маленьких экранах */
    }
}

.chat-container.moved {
    top: auto;
    /* Отмена верхнего отступа */
    bottom: 20px;
    /* Отступ снизу */
    transform: translateX(-50%);
    /* Центрирование по горизонтали */
}

/* Стили для сообщений */
.message {
    margin-top: 10px;
    border: 0;
    /* Отступ сверху между сообщениями */
    margin-bottom: 10px;
    /* Отступ снизу между сообщениями */
    padding: 6px;
    /* Внутренние отступы сообщений */
    border-radius: 6px;
    /* Скругление углов сообщений */
    max-width: 100%;
    /* Максимальная ширина сообщений */
    word-wrap: break-word;
    /* Перенос длинных слов */
}

.user-message {
    /* background-color: #4caf50; */
    /* Цвет фона сообщения пользователя */
    border: 0;
    /* Граница сообщения пользователя */
    color: white;
    /* Цвет текста сообщения пользователя */
    margin-top: 3px;
    /* Отступ сверху между сообщениями */
    margin-bottom: 3px;
    /* Отступ снизу между сообщениями */
    padding: 6px;
    /* Внутренние отступы сообщений */
    border-radius: 6px;
    /* Скругление углов сообщений */
    max-width: 100%;
    /* Максимальная ширина сообщений */
    word-wrap: break-word;
    /* Перенос длинных слов */
}

/* Стили для поля ввода текста */
.input-container {
    display: flex;
    /* Использование flexbox для распределения элементов */
    align-items: stretch;
    /* Выравнивание элементов по высоте */
}

/* Стили для поля ввода текста */
.question-input {
    display: flex;
    flex-grow: 1;
    /* Занимает все доступное пространство */
    padding: 15px;
    /* Внутренние отступы поля ввода */
    background-color: #1e1e1e;
    /* Цвет фона поля ввода */
    border: 1px solid #333333;
    /* Граница поля ввода */
    border-radius: 6px 0 0 6px;
    /* Скругление углов поля ввода */
    color: #ffffff;
    /* Цвет текста */
    resize: none;
    /* Запрет на изменение размера поля ввода */
}

/* Дополнительные стили для заблокированного ввода */
.question-input:disabled {
    background-color: #3a3a3a;
    /* Темнее фон для заблокированного поля */
    cursor: not-allowed;
    /* Курсор в стиле 'нельзя' */
}

/* Стили для кнопки отправки */
.send-button {
    padding: 0 15px;
    width: 50px;
    /* Внутренние отступы кнопки */
    background-color: #4caf50;
    /* Цвет фона кнопки */
    color: white;
    /* Цвет текста кнопки */
    border: none;
    /* Убираем границу кнопки */
    border-radius: 0 6px 6px 0;
    /* Скругление углов кнопки */
    cursor: pointer;
    /* Курсор указывает на возможность нажатия */
    transition: background-color 0.3s, transform 0.2s;
    /* Плавные анимации изменения свойств */
}

.send-button:hover {
    background-color: #43a047;
    /* Цвет фона кнопки при наведении */
    transform: scale(1.05);
    /* Увеличение размера кнопки при наведении */
}


/* Стили для ответа на вопрос */
.response {
    margin-top: 20px;
    /* Отступ сверху от ответа на вопрос */
    padding: 15px;
    /* Внутренние отступы ответа */
    border-radius: 6px;
    /* Скругление углов ответа */
    color: #ffffff;
    /* Цвет текста ответа */
}
</style>
