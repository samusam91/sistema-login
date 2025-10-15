function showRegister() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
}

function showLogin() {
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
}

function showMessage(message, type) {
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    const loginBox = document.querySelector('.login-box');
    loginBox.insertBefore(messageDiv, loginBox.firstChild);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Gestione registrazione
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    
    // Simula salvataggio in Excel (in realtà usa localStorage)
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Controlla se l'utente esiste già
    if (users.find(user => user.username === username)) {
        showMessage('Username già esistente', 'error');
        return;
    }
    
    // Aggiungi nuovo utente
    users.push({
        username: username,
        email: email,
        password: password,
        registrationDate: new Date().toISOString()
    });
    
    localStorage.setItem('users', JSON.stringify(users));
    showMessage('Registrazione completata con successo!', 'success');
    
    // Torna al form di login
    setTimeout(() => {
        showLogin();
        document.getElementById('registerForm').reset();
    }, 1500);
});

// Gestione login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        showMessage('Login effettuato con successo!', 'success');
        setTimeout(() => {
            // Reindirizza alla dashboard
            window.location.href = 'dashboard.html';
        }, 1500);
    } else {
        showMessage('Credenziali non valide', 'error');
    }
});

// Carica dati demo se non esistono utenti
if (!localStorage.getItem('users')) {
    const demoUsers = [
        {
            username: 'admin',
            email: 'admin@example.com',
            password: 'admin123',
            registrationDate: new Date().toISOString()
        }
    ];
    localStorage.setItem('users', JSON.stringify(demoUsers));
}