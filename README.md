# 💱 React Euro Convert
Una semplice applicazione che consente di  **convertire valute**  utilizzando l'API di **ExchangeRatesAPI**.
Per semplicità il le 
Il backend è gestito con **Netlify Functions**, che mantiene le API Key nascoste per una maggiore sicurezza. 🔒  

📌 **Prima di iniziare:**  
Crea un account su [ExchangeRatesAPI](https://manage.exchangeratesapi.io/signup/free) e genera la tua **API Key** (100 richieste gratuite al mese).  
Se desideri **convertire tra più valute oltre all'Euro (€)**, puoi eseguire l'upgrade del piano.

(Con il piano gratuito, anche se scegli una valuta diversa da convertire, la base rimarrà sempre l'Euro (EUR))


## 🚀 Funzionalità

✅ Conversione tra **Euro (EUR) e un'altra valuta**  
✅ Input dinamico per selezionare l'importo da convertire  
✅ Interfaccia con **Material-UI** e **React-Bootstrap**  
✅ Gestione delle richieste API con **Axios**  
✅ Deploy su **Netlify** per una distribuzione rapida  

## 🛠️ Tecnologie utilizzate

- **React.js** (Create React App)  
- **Axios** (per effettuare richieste API)  
- **Material-UI**  
- **React-Bootstrap** 
- **Netlify Functions**

## 📦 Installazione

1. **Clona il repository:**
   ```bash
   git clone https://github.com/FraPier99/react-euro-convert.git
   cd currency-converter  

2. **Installa dipendenze:**
   ```bash
   npm install   

3. **Crea un file.env:**

   come in .env.example
     

4. **Avvia l'app:**
   ```bash
   npx netlify-cli dev


