"""
Profile component for user data display
"""

from data.user_data import UserData

class ProfileComponent:
    def __init__(self):
        self.user_data = UserData()
    
    def get_profile_data(self, user):
        """Get user profile and statistics"""
        return {
            'personal_info': {
                'name': user.get('name', 'Marco Rossi'),
                'email': user.get('email', 'marco.rossi@email.com'),
                'age': user.get('age', 28),
                'weight': user.get('weight', 75),
                'height': user.get('height', 180),
                'member_since': user.get('member_since', 'Gennaio 2023')
            },
            'stats': {
                'wods_completed': 156,
                'back_squat_pr': '85kg',
                'fran_pr': '3:45',
                'leaderboard_position': 12
            }
        }