"""
WOD component for workout management
"""

from data.wod_data import WodData

class WodComponent:
    def __init__(self):
        self.wod_data = WodData()
    
    def get_wod_data(self, user):
        """Get user's WOD history and form data"""
        return {
            'wod_types': [
                'AMRAP (As Many Rounds As Possible)',
                'For Time',
                'EMOM (Every Minute On the Minute)',
                'Tabata',
                'Strength Training'
            ],
            'recent_wods': [
                {
                    'name': 'Fran',
                    'type': 'For Time',
                    'result': '3:45',
                    'date': '15 Gen 2024',
                    'notes': '21-15-9 Thrusters (43kg) + Pull-ups. Ottima performance!'
                },
                {
                    'name': 'Cindy',
                    'type': 'AMRAP 20min',
                    'result': '18 rounds',
                    'date': '12 Gen 2024',
                    'notes': '5 Pull-ups, 10 Push-ups, 15 Air Squats. Buon ritmo mantenuto.'
                }
            ]
        }
    
    def add_wod(self, wod_data):
        """Add new WOD entry"""
        return self.wod_data.save_wod(wod_data)