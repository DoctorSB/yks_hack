   # Выбор подходящего базового образа
   FROM pytorch/pytorch:1.9.0-cuda11.1-cudnn8-runtime

   # Устанавливаем необходимые пакеты
   RUN pip install --upgrade pip
   RUN pip install flask transformers torch sentencepiece

   # Создаем рабочую директорию внутри контейнера
   WORKDIR /app

   # Копируем файлы приложения в рабочую директорию
   COPY . /app

   # Открываем порт 5000, используемый Flask
   EXPOSE 5000

   # Запускаем веб-приложение на Flask
   CMD ["python", "app.py"]
   