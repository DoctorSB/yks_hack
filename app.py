from flask import Flask, request, jsonify
import torch
from transformers import T5ForConditionalGeneration, T5Tokenizer

app = Flask(__name__)

# Загрузка модели и токенизатора
tokenizer = T5Tokenizer.from_pretrained("cointegrated/rut5-base-multitask")
model = T5ForConditionalGeneration.from_pretrained("cointegrated/rut5-base-multitask")

def generate(text, **kwargs):
    inputs = tokenizer(text, return_tensors='pt')
    with torch.no_grad():
        hypotheses = model.generate(**inputs, num_beams=5, **kwargs)
    return tokenizer.decode(hypotheses[0], skip_special_tokens=True)

@app.route('/generate', methods=['POST'])
def generate_text():
    data = request.json
    text = data.get('text', '')
    response_text = generate(text)
    return jsonify({'response': response_text})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')