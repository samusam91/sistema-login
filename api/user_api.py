"""
User API endpoints
"""

from flask import jsonify
from components.wod_component import WodComponent
from components.leaderboard_component import LeaderboardComponent

class UserAPI:
    def __init__(self):
        self.wod_component = WodComponent()
        self.leaderboard_component = LeaderboardComponent()
    
    def add_wod(self, wod_data):
        """API endpoint to add new WOD"""
        try:
            result = self.wod_component.add_wod(wod_data)
            return jsonify(result)
        except Exception as e:
            return jsonify({'error': str(e)}), 400
    
    def get_leaderboard(self):
        """API endpoint to get leaderboard"""
        try:
            data = self.leaderboard_component.get_leaderboard_data()
            return jsonify(data)
        except Exception as e:
            return jsonify({'error': str(e)}), 500