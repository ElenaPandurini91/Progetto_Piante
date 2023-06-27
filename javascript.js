document.getElementById('plant-care-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Recupera i valori inseriti dagli utenti
    let plantName = document.getElementById('plant-name').value;
    let soilType = document.getElementById('soil-type').value;
    let sunlightExposure = document.getElementById('sunlight-exposure').value;

    // Effettua la corrispondenza con le informazioni delle piante
    let plantCareSuggestions = getPlantCareSuggestions(plantName, soilType, sunlightExposure);

    // Mostra i suggerimenti di cura
    displayCareSuggestions(plantCareSuggestions);
});

function getPlantCareSuggestions(plantName, soilType, sunlightExposure) {
    // Effettua il confronto con la base di conoscenza delle piante e restituisci i suggerimenti appropriati

    // Esempio di base di conoscenza delle piante
    let plantKnowledgeBase = {
        'rosa': {
            soilType: 'clay',
            sunlightExposure: 'full-sun',
            careSuggestions: `La ${plantName} richiede un terreno argilloso e luce solare diretta. Assicurati di innaffiarla regolarmente e potarla ogni anno.`
        },
        'lavanda': {
            soilType: 'sandy',
            sunlightExposure: 'full-sun',
            careSuggestions: `La ${plantName} cresce meglio in un terreno sabbioso e richiede molta luce solare. Innaffia moderatamente e fallo asciugare tra un\'irrigazione e l\'altra.`
      },

        // Aggiungi qui altre piante con le relative informazioni di cura

    };

    // Effettua la corrispondenza con la pianta specificata dagli utenti

    if (plantName.toLowerCase() in plantKnowledgeBase) {
        let plant = plantKnowledgeBase[plantName.toLowerCase()];   // il confronto di stringhe in js è case-sensitive

        // Effettua il confronto con i parametri specificati dagli utenti
        if (plant.soilType == soilType && plant.sunlightExposure == sunlightExposure) {
            return plant.careSuggestions;
        }
    }

    // Nel caso di nessuna corrispondenza trovata, restituisci un messaggio di avviso generico
    return `Non abbiamo suggerimenti specifici per la cura della ${plantName}. Mandaci un'email e ti riconttaremo al più presto!`;
}

function displayCareSuggestions(suggestions) {
    let careSuggestionsDiv = document.getElementById('care-suggestions');
    careSuggestionsDiv.textContent = suggestions;
}
