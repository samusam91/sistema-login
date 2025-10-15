// Demantur CrossFit - Dashboard JavaScript

class DashboardManager {
    constructor() {
        this.currentTab = 'profile';
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.loadInitialData();
    }
    
    bindEvents() {
        // Tab navigation
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const tabName = e.target.getAttribute('data-tab');
                this.showTab(tabName);
            });
        });
        
        // WOD form submission
        const wodForm = document.getElementById('wodForm');
        if (wodForm) {
            wodForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.addWod(e);
            });
        }
    }
    
    showTab(tabName) {
        // Hide all tabs
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Show selected tab
        document.getElementById(tabName).classList.add('active');
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        
        this.currentTab = tabName;
    }
    
    async addWod(event) {
        const formData = new FormData(event.target);
        const wodData = {
            name: formData.get('wodName'),
            type: formData.get('wodType'),
            result: formData.get('wodResult'),
            notes: formData.get('wodNotes')
        };
        
        try {
            const response = await fetch('/api/wod', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(wodData)
            });
            
            if (response.ok) {
                this.displayWodSuccess(wodData);
                event.target.reset();
            }
        } catch (error) {
            console.error('Error adding WOD:', error);
        }
    }
    
    displayWodSuccess(wodData) {
        const wodList = document.getElementById('wodList');
        const wodItem = document.createElement('div');
        wodItem.className = 'wod-item';
        wodItem.innerHTML = `
            <h4>${wodData.name}</h4>
            <p><strong>Tipo:</strong> ${wodData.type} | <strong>Risultato:</strong> ${wodData.result}</p>
            <p><strong>Data:</strong> ${new Date().toLocaleDateString('it-IT')}</p>
            <p>${wodData.notes || 'Nessuna nota aggiunta.'}</p>
        `;
        
        wodList.insertBefore(wodItem, wodList.firstChild);
        alert('WOD registrato con successo!');
    }
    
    loadInitialData() {
        // Load any initial data needed
        console.log('Dashboard initialized');
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DashboardManager();
});

// Global functions for backward compatibility
function logout() {
    if (confirm('Sei sicuro di voler uscire?')) {
        window.location.href = '/logout';
    }
}

function registerEvent(eventId) {
    alert('Iscrizione in fase di sviluppo. Contatta la reception per iscriverti!');
}