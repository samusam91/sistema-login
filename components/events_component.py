"""
Events component for Demantur events management
"""

from data.events_data import EventsData

class EventsComponent:
    def __init__(self):
        self.events_data = EventsData()
    
    def get_events_data(self):
        """Get upcoming Demantur events"""
        return {
            'upcoming_events': [
                {
                    'id': 'open2024',
                    'date': '25 FEB 2024',
                    'title': 'Demantur Open 2024',
                    'description': 'Competizione aperta a tutti i livelli. 3 WOD in una giornata per testare le tue capacità!',
                    'location': 'Palestra Demantur',
                    'registration_status': 'Aperte (45/60 posti)',
                    'available_spots': 15
                },
                {
                    'id': 'mobility',
                    'date': '10 MAR 2024',
                    'title': 'Workshop Mobility',
                    'description': 'Seminario sulla mobilità e prevenzione infortuni con coach certificato.',
                    'location': 'Sala corsi Demantur',
                    'registration_status': 'Aperte (12/20 posti)',
                    'available_spots': 8
                },
                {
                    'id': 'team',
                    'date': '22 MAR 2024',
                    'title': 'Team Challenge',
                    'description': 'Sfida a squadre! Forma il tuo team di 4 persone e compete per il titolo.',
                    'location': 'Palestra Demantur',
                    'registration_status': 'Aperte (8/12 team)',
                    'available_spots': 4
                }
            ]
        }
    
    def register_for_event(self, event_id, user_id):
        """Register user for an event"""
        return self.events_data.register_user(event_id, user_id)