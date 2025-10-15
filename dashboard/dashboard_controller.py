"""
Dashboard controller for Demantur CrossFit
Manages dashboard rendering and data
"""

from flask import render_template
from components.profile_component import ProfileComponent
from components.wod_component import WodComponent
from components.leaderboard_component import LeaderboardComponent
from components.events_component import EventsComponent

class DashboardController:
    def __init__(self):
        self.profile = ProfileComponent()
        self.wod = WodComponent()
        self.leaderboard = LeaderboardComponent()
        self.events = EventsComponent()
    
    def render_dashboard(self, user):
        """Render main dashboard with all components"""
        dashboard_data = {
            'user': user,
            'profile_data': self.profile.get_profile_data(user),
            'wod_data': self.wod.get_wod_data(user),
            'leaderboard_data': self.leaderboard.get_leaderboard_data(),
            'events_data': self.events.get_events_data()
        }
        
        return render_template('dashboard.html', **dashboard_data)