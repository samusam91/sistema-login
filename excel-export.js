// Funzione per esportare i dati utenti in formato CSV (simile a Excel)
function exportUsersToCSV() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.length === 0) {
        alert('Nessun utente da esportare');
        return;
    }
    
    // Intestazioni CSV
    const headers = ['Username', 'Email', 'Data Registrazione'];
    
    // Converti i dati in formato CSV
    const csvContent = [
        headers.join(','),
        ...users.map(user => [
            user.username,
            user.email,
            new Date(user.registrationDate).toLocaleDateString('it-IT')
        ].join(','))
    ].join('\n');
    
    // Crea e scarica il file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', 'utenti_registrati.csv');
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Funzione per importare utenti da file CSV
function importUsersFromCSV(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const csv = e.target.result;
        const lines = csv.split('\n');
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        // Salta la prima riga (intestazioni)
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line) {
                const [username, email, date] = line.split(',');
                
                // Controlla se l'utente esiste già
                if (!users.find(user => user.username === username)) {
                    users.push({
                        username: username,
                        email: email,
                        password: 'password123', // Password di default
                        registrationDate: new Date().toISOString()
                    });
                }
            }
        }
        
        localStorage.setItem('users', JSON.stringify(users));
        alert('Utenti importati con successo!');
    };
    
    reader.readAsText(file);
}