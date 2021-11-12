from flask import Flask, render_template, flash, request

app = Flask(__name__)

app.secret_key='anything'

@app.route('/')
def app():
    return render_template('titanic.html')


if __name__ == '__main__':
    app.run(debug=True)