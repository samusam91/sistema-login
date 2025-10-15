"""
Authentication module for Demantur CrossFit
Handles user login and session management
"""

from flask import session, redirect, url_for, flash
from data.user_data import UserData

class LoginHandler:
    def __init__(self):
        self.user_data = UserData()
    
    def authenticate(self, form_data):
        """Authenticate user credentials"""
        username = form_data.get('username')
        password = form_data.get('password')
        
        if self.user_data.validate_credentials(username, password):
            user = self.user_data.get_user(username)
            session['user'] = user
            return redirect(url_for('dashboard'))
        else:
            flash('Credenziali non valide')
            return redirect(url_for('index'))
    
    def is_authenticated(self):
        """Check if user is logged in"""
        return 'user' in session