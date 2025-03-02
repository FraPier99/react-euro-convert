export const handler = async (event, context) => {
    // Blocca le chiamate API in locale
    if (process.env.NODE_ENV === "development") {
      console.log("🛑 API disabilitata in sviluppo, nessuna chiamata effettuata.");
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Modalità sviluppo: nessuna chiamata API" }),
      };
    }
  
    // Import dinamico di axios
    const axios = (await import("axios")).default;
  
    // Legge la base dalla query string
    const { base } = event.queryStringParameters;
    const API_KEY = process.env.API_KEY; 
  
    if (!base) {
      console.error("❌ Errore: manca la valuta base.");
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Errore: valuta base richiesta." }),
      };
    }
  
    const url = `https://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&base=${base}`;
  
    try {
      console.log(`🔄 Richiesta API: ${url}`);
      const res = await axios.get(url);
  
      return {
        statusCode: 200,
        body: JSON.stringify({ rates: res.data?.rates || {} }),
      };
  
    } catch (error) {
      console.error("❌ Errore durante il fetch dei dati:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Errore durante il recupero dei dati." }),
      };
    }
  };
  