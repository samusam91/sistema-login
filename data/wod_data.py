"""
WOD data management
"""

import json
from datetime import datetime

class WodData:
    def __init__(self):
        self.wods_file = 'data/wods.json'
    
    def save_wod(self, wod_data):
        """Save new WOD entry"""
        wod_entry = {
            'name': wod_data.get('name'),
            'type': wod_data.get('type'),
            'result': wod_data.get('result'),
            'notes': wod_data.get('notes', ''),
            'date': datetime.now().strftime('%d %b %Y'),
            'timestamp': datetime.now().isoformat()
        }
        
        # In a real app, save to database
        return {'success': True, 'wod': wod_entry}
    
    def get_user_wods(self, user_id):
        """Get WODs for specific user"""
        # In a real app, query database
        return []