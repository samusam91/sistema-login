#!/usr/bin/env python3
"""
Demantur CrossFit Management System
Main entry point for the application
"""

from flask import Flask, render_template, request, redirect, url_for, session
import os

app = Flask(__name__)
app.secret_key = 'demantur_crossfit_2024'

# Import modules
from auth.login_handler import LoginHandler
from dashboard.dashboard_controller import DashboardController
from api.user_api import UserAPI

# Initialize components
login_handler = LoginHandler()
dashboard_controller = DashboardController()
user_api = UserAPI()

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    return login_handler.authenticate(request.form)

@app.route('/dashboard')
def dashboard():
    if 'user' not in session:
        return redirect(url_for('index'))
    return dashboard_controller.render_dashboard(session['user'])

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('index'))

# API Routes
@app.route('/api/wod', methods=['POST'])
def add_wod():
    return user_api.add_wod(request.json)

@app.route('/api/leaderboard')
def get_leaderboard():
    return user_api.get_leaderboard()

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)