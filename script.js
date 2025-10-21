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

// Forza ricreazione dati demo per debug
localStorage.removeItem('users');
if (!localStorage.getItem('users')) {
    const demoUsers = [
        {
            username: 'admin',
            email: 'admin@fitzone.com',
            password: 'admin123',
            role: 'admin',
            gymName: 'FitZone Milano Centro',
            registrationDate: new Date().toISOString()
        },
        {
            username: 'marco',
            email: 'marco.rossi@email.com',
            password: 'user123',
            role: 'user',
            fullName: 'Marco Rossi',
            age: 28,
            phone: '+39 333 123 4567',
            gymName: 'FitZone Milano Centro',
            subscription: {
                plan: 'Premium Mensile',
                expiry: '2024-03-15',
                status: 'Attivo'
            },
            registrationDate: new Date().toISOString()
        }
    ];
    localStorage.setItem('users', JSON.stringify(demoUsers));
    console.log('Demo users created:', demoUsers);
}

// Aspetta che il DOM sia caricato
document.addEventListener('DOMContentLoaded', function() {

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
        role: 'user',
        fullName: username,
        gymName: 'FitZone Milano Centro',
        subscription: {
            plan: 'Base Mensile',
            expiry: new Date(Date.now() + 30*24*60*60*1000).toISOString().split('T')[0],
            status: 'Attivo'
        },
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
    console.log('Available users:', users);
    console.log('Login attempt:', username, password);
    const user = users.find(u => u.username === username && u.password === password);
    console.log('Found user:', user);
    
    if (user) {
        // Salva i dati dell'utente per la sessione
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        showMessage('Login effettuato con successo!', 'success');
        // Reindirizza immediatamente
        if (user.role === 'admin') {
            console.log('Redirecting to admin dashboard');
            window.location.href = './admin-dashboard.html';
        } else {
            console.log('Redirecting to user dashboard');
            window.location.href = './dashboard.html';
        }
    } else {
        showMessage('Credenziali non valide', 'error');
    }
});

}); // Fine DOMContentLoaded