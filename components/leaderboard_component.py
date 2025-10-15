"""
Leaderboard component for rankings display
"""

from data.leaderboard_data import LeaderboardData

class LeaderboardComponent:
    def __init__(self):
        self.leaderboard_data = LeaderboardData()
    
    def get_leaderboard_data(self):
        """Get current leaderboard rankings"""
        return {
            'last_updated': '00:00',
            'description': 'Classifica basata sui punti accumulati negli ultimi 30 giorni',
            'rankings': [
                {
                    'rank': 1,
                    'name': 'Alessandro Bianchi',
                    'points': 2847,
                    'wods_completed': 45,
                    'medal': 'gold'
                },
                {
                    'rank': 2,
                    'name': 'Giulia Ferrari',
                    'points': 2756,
                    'wods_completed': 42,
                    'medal': 'silver'
                },
                {
                    'rank': 3,
                    'name': 'Luca Verdi',
                    'points': 2634,
                    'wods_completed': 38,
                    'medal': 'bronze'
                },
                {
                    'rank': 4,
                    'name': 'Sara Conti',
                    'points': 2521,
                    'wods_completed': 41,
                    'medal': None
                },
                {
                    'rank': 5,
                    'name': 'Matteo Ricci',
                    'points': 2445,
                    'wods_completed': 36,
                    'medal': None
                },
                {
                    'rank': 12,
                    'name': 'Marco Rossi (Tu)',
                    'points': 2156,
                    'wods_completed': 32,
                    'medal': None,
                    'is_current_user': True
                }
            ]
        }