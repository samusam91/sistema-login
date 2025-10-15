"""
User data management
"""

class UserData:
    def __init__(self):
        # Demo users
        self.users = {
            'admin': {
                'password': 'admin123',
                'name': 'Marco Rossi',
                'email': 'marco.rossi@email.com',
                'age': 28,
                'weight': 75,
                'height': 180,
                'member_since': 'Gennaio 2023'
            }
        }
    
    def validate_credentials(self, username, password):
        """Validate user login credentials"""
        user = self.users.get(username)
        return user and user['password'] == password
    
    def get_user(self, username):
        """Get user data by username"""
        return self.users.get(username, {})