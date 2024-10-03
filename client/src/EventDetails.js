const eventData = {
    "Technical Events": {
        "Paper Presentation": { "desc": "", "team_size": 2, "price": "" },
        "Sql Code Off": { "desc": "", "team_size": 2, "price": "" },
        "Bid for Code Wars": { "desc": "", "team_size": 2, "price": "" },
        "Logic break": { "desc": "", "team_size": 2, "price": "" },
        "Technical Fued": { "desc": "", "team_size": 2, "price": "" },
        "UI UX figma": { "desc": "", "team_size": 2, "price": "" },
        "Code Relay": { "desc": "", "team_size": 2, "price": "" },
        "Capture the Flag": { "desc": "", "team_size": 2, "price": "" },
        "Bid to Predict": { "desc": "", "team_size": 2, "price": "" },
        "The Code Gambit": { "desc": "", "team_size": 2, "price": "" }
    },
    "Non-Technical Events": {
        "Channel Surfing": { "desc": "", "team_size": 2, "price": "" },
        "Title Event": { "desc": "", "team_size": 2, "price": "" },
        "Cine Quiz": { "desc": "", "team_size": 2, "price": "" },
        "Fem Screen": { "desc": "", "team_size": 2, "price": "" },
        "Green Screen": { "desc": "", "team_size": 2, "price": "" },
        "Fifa": { "desc": "", "team_size": 2, "price": "" }
    },
    "Pre Events": {
        "Photography": { "desc": "", "team_size": 1, "price": "" },
        "Reel Song": { "desc": "", "team_size": 2, "price": "" },
        "Reel Dance": { "desc": "", "team_size": 2, "price": "" },
        "Valorant": { "desc": "", "team_size": 5, "price": "" }
    },
    "Playground Events": {
        "Box Cricket": { "desc": "", "team_size": 5, "price": "" },
        "Futsal": { "desc": "", "team_size": 5, "price": "" }
    }
};

function getEventData(eventName) {
    for (let category in eventData) {
        if (eventData[category].hasOwnProperty(eventName)) {
            return eventData[category][eventName];
        }
    }
    console.log("Data does not exist for event: " + eventName);
    return undefined;
}

export { eventData, getEventData };
