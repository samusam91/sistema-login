# 🏋️ Fitapp - Sistema di Gestione Palestre

## 🎯 Visione del Progetto

Fitapp è una **Progressive Web App (PWA)** progettata per essere una **diretta concorrente migliorata** delle app palestre esistenti come [app.shaggyowl.com](https://app.shaggyowl.com/). L'obiettivo è creare un'esperienza utente superiore sia dal punto di vista tecnico che funzionale e visivo.

### 🚀 Caratteristiche Innovative
- **Mobile-First Design**: Ottimizzata per dispositivi mobili con possibilità di installazione come app nativa
- **Dual Interface**: Interfacce separate e ottimizzate per utenti e amministratori
- **Real-time Updates**: Gestione prenotazioni e palinsesto in tempo reale
- **User Experience Avanzata**: Design moderno con animazioni fluide e interfaccia intuitiva

## 🏗️ Architettura dell'App

### 📱 Lato Utente (User Dashboard)
L'app presenta **4 sezioni principali** per gli utenti:

#### 👤 **Profilo**
- Dati personali dell'utente (nome, email, telefono, età)
- **Centro affiliato** con informazioni complete (nome, indirizzo, contatti)
- **Gestione abbonamento** (piano, scadenza, stato, rinnovo)
- **Statistiche personali** (lezioni mensili, streak, tasso presenza)
- **Corsi preferiti** con conteggio lezioni

#### 📅 **Palinsesto**
- **Programmazione settimanale** pubblicata dal centro affiliato
- Visualizzazione lezioni con:
  - Orari e durata
  - Istruttore assegnato
  - Posti disponibili in tempo reale
  - Bottoni per prenotazione diretta
- **Stato prenotazioni** (disponibile, quasi pieno, completo, lista d'attesa)

#### 🎯 **Prenotazioni**
- **Prossime lezioni** prenotate con possibilità di cancellazione
- **Storico completo** delle lezioni:
  - Lezioni completate ✅
  - Assenze registrate ❌
  - Dettagli istruttore e orario

#### 🏢 **Il Mio Centro**
- **Informazioni complete** del centro affiliato
- **Servizi disponibili** (sala pesi, cardio, corsi, spogliatoi, parcheggio, WiFi)
- **Staff qualificato** con certificazioni
- **Contatti diretti** (telefono, email, mappa)
- **Orari di apertura** dettagliati

### 👨‍💼 Lato Amministratore (Admin Dashboard)
Interfaccia dedicata per la **gestione completa del centro** con **4 sezioni**:

#### 📊 **Panoramica**
- **KPI in tempo reale**: membri attivi, tasso presenza, ricavi mensili
- **Lezioni del giorno** con stato occupazione
- **Nuovi iscritti** degli ultimi 7 giorni
- **Dashboard esecutiva** per decisioni rapide

#### 👥 **Gestione Membri**
- **Database completo** di tutti i membri
- **Gestione abbonamenti** (modifica, rinnovo, sospensione)
- **Statistiche individuali** (presenze, lezioni frequentate)
- **Funzioni admin**: aggiungi, modifica, esporta lista

#### 📅 **Gestione Palinsesto**
- **Creazione lezioni** con form completo:
  - Nome corso e tipologia
  - Assegnazione istruttore
  - Giorno, orario e durata
  - Gestione posti disponibili
- **Modifica palinsesto** esistente
- **Visualizzazione prenotazioni** per lezione

#### 📈 **Analytics e Report**
- **Metriche avanzate**: ricavi settimanali, retention rate, rating lezioni
- **Analisi comportamentale**: corsi più popolari, orari di punta
- **Report automatici** per ottimizzazione business

## 🔐 Sistema di Autenticazione

### Credenziali di Test

**👤 UTENTE NORMALE:**
```
Username: marco
Password: user123
Ruolo: Accesso dashboard utente
```

**👨‍💼 AMMINISTRATORE:**
```
Username: admin
Password: admin123
Ruolo: Accesso dashboard amministratore
```

### 🔄 Flusso di Autenticazione
1. **Login unificato** con reindirizzamento automatico basato sul ruolo
2. **Sessione persistente** con localStorage
3. **Protezione route** - accesso negato se ruolo non corretto
4. **Logout sicuro** con pulizia sessione

## 🛠️ Stack Tecnologico

### Frontend
- **HTML5** semantico e accessibile
- **CSS3** con design system coerente
- **JavaScript ES6+** vanilla per performance ottimali
- **Progressive Web App** features

### Design System
- **Color Palette**: Dark theme con accenti verdi (#00d084) e arancioni (#ff6b35)
- **Typography**: Inter font family per leggibilità ottimale
- **Components**: Sistema modulare e riutilizzabile
- **Responsive**: Mobile-first con breakpoint ottimizzati

### Data Management
- **LocalStorage** per persistenza dati lato client
- **JSON** per struttura dati flessibile
- **Session Management** per autenticazione

## 🚀 Come Avviare l'App

### Installazione Locale
1. Clona il repository:
   ```bash
   git clone https://github.com/samusam91/sistema-login.git
   cd sistema-login
   ```

2. Apri `index.html` nel browser:
   ```bash
   open index.html
   # oppure
   python -m http.server 8000  # per server locale
   ```

3. Usa le credenziali di test per accedere

## 🌐 Opzioni di Pubblicazione

### Opzione 1: Netlify (Consigliata)
1. Vai su [netlify.com](https://netlify.com)
2. Trascina la cartella del progetto nel browser
3. Ottieni URL tipo: `https://fitapp-demo.netlify.app`

### Opzione 2: GitHub Pages
1. Crea repository su GitHub
2. Carica tutti i file
3. Attiva GitHub Pages nelle impostazioni
4. URL: `https://tuousername.github.io/fitapp`

### Opzione 3: Vercel
1. Connetti repository GitHub a [vercel.com](https://vercel.com)
2. Deploy automatico ad ogni commit
3. URL personalizzabile

## 📱 Roadmap Mobile

### Fase 1: PWA (Attuale)
- ✅ Responsive design
- ✅ Installabile come app
- 🔄 Service Worker (in sviluppo)
- 🔄 Offline capability

### Fase 2: App Store
- **iOS**: Wrapper con Capacitor/PWABuilder
- **Android**: Google Play accetta PWA direttamente
- **Notifiche Push** per promemoria lezioni
- **Geolocalizzazione** per centri vicini

## 🎨 Competitive Advantage

### Vs. Competitor (app.shaggyowl.com)
- ✅ **UX Superiore**: Design più moderno e intuitivo
- ✅ **Performance**: Caricamento più veloce
- ✅ **Mobile-First**: Ottimizzazione mobile nativa
- ✅ **Dual Dashboard**: Interfacce specializzate per ruoli
- ✅ **Real-time**: Aggiornamenti istantanei
- ✅ **Analytics**: Metriche più dettagliate

## 🔧 Sviluppi Futuri

### Features Pianificate
- **Sistema di Pagamento** integrato (Stripe/PayPal)
- **QR Code** per check-in automatico
- **Chat** tra membri e staff
- **Gamification** con badge e sfide
- **API Integration** con wearables (Fitbit, Apple Watch)
- **Multi-centro** per catene di palestre

### Scalabilità
- **Backend** con Node.js/Express
- **Database** PostgreSQL/MongoDB
- **Cloud** deployment (AWS/Azure)
- **Microservizi** per modularità

## 📞 Supporto

Per domande o supporto:
- **Email**: [inserire email]
- **GitHub Issues**: Per bug report e feature request
- **Documentazione**: Wiki del progetto

---

**Fitapp** - *Rivoluzionando l'esperienza fitness digitale* 🏋️‍♀️💪