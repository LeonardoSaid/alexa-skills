const Alexa = require('ask-sdk-core');
var request = require("request");
var cheerio = require("cheerio");

var cardapio;
var dias = ['domingo','segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
var dia = dias[new Date().getDay()];
const amanha = (new Date().getDay() === 6) ? "domingo" : dias[new Date().getDay()+1];

const fetchCardapio = request("https://unifei.edu.br/restaurante-universitario/cardapio-semanal/", async function (error, response, html) {
        if (!error) {
            const $ = cheerio.load(html)
    
            const base = $(".row-3").map((i, element) => ({
                segunda: $(element).find('td:nth-of-type(2)').text().trim().replace(/\n/g, ', ')
                , terca: $(element).find('td:nth-of-type(3)').text().trim().replace(/\n/g, ', ')
                , quarta: $(element).find('td:nth-of-type(4)').text().trim().replace(/\n/g, ', ')
                , quinta: $(element).find('td:nth-of-type(5)').text().trim().replace(/\n/g, ', ')
                , sexta: $(element).find('td:nth-of-type(6)').text().trim().replace(/\n/g, ', ')
                , sabado: $(element).find('td:nth-of-type(7)').text().trim().replace(/\n/g, ', ')
            })).get()
    
            const principalalmoco = $(".row-4").map((i, element) => ({
                segunda: $(element).find('td:nth-of-type(2)').text().trim().replace(/\n/g, ', ')
                , terca: $(element).find('td:nth-of-type(3)').text().trim().replace(/\n/g, ', ')
                , quarta: $(element).find('td:nth-of-type(4)').text().trim().replace(/\n/g, ', ')
                , quinta: $(element).find('td:nth-of-type(5)').text().trim().replace(/\n/g, ', ')
                , sexta: $(element).find('td:nth-of-type(6)').text().trim().replace(/\n/g, ', ')
                , sabado: $(element).find('td:nth-of-type(7)').text().trim().replace(/\n/g, ', ')
            })).get()
    
            const principaljantar = $(".row-5").map((i, element) => ({
                segunda: $(element).find('td:nth-of-type(2)').text().trim().replace(/\n/g, ', ')
                , terca: $(element).find('td:nth-of-type(3)').text().trim().replace(/\n/g, ', ')
                , quarta: $(element).find('td:nth-of-type(4)').text().trim().replace(/\n/g, ', ')
                , quinta: $(element).find('td:nth-of-type(5)').text().trim().replace(/\n/g, ', ')
                , sexta: $(element).find('td:nth-of-type(6)').text().trim().replace(/\n/g, ', ')
                , sabado: $(element).find('td:nth-of-type(7)').text().trim().replace(/\n/g, ', ')
            })).get()
    
            const vegetariana = $(".row-6").map((i, element) => ({
                segunda: $(element).find('td:nth-of-type(2)').text().trim().replace(/\n/g, ', ')
                , terca: $(element).find('td:nth-of-type(3)').text().trim().replace(/\n/g, ', ')
                , quarta: $(element).find('td:nth-of-type(4)').text().trim().replace(/\n/g, ', ')
                , quinta: $(element).find('td:nth-of-type(5)').text().trim().replace(/\n/g, ', ')
                , sexta: $(element).find('td:nth-of-type(6)').text().trim().replace(/\n/g, ', ')
                , sabado: $(element).find('td:nth-of-type(7)').text().trim().replace(/\n/g, ', ')
            })).get()
    
            const guarnicao = $(".row-7").map((i, element) => ({
                segunda: $(element).find('td:nth-of-type(2)').text().trim().replace(/\n/g, ', ')
                , terca: $(element).find('td:nth-of-type(3)').text().trim().replace(/\n/g, ', ')
                , quarta: $(element).find('td:nth-of-type(4)').text().trim().replace(/\n/g, ', ')
                , quinta: $(element).find('td:nth-of-type(5)').text().trim().replace(/\n/g, ', ')
                , sexta: $(element).find('td:nth-of-type(6)').text().trim().replace(/\n/g, ', ')
                , sabado: $(element).find('td:nth-of-type(7)').text().trim().replace(/\n/g, ', ')
            })).get()
    
            const salada = $(".row-8").map((i, element) => ({
                segunda: $(element).find('td:nth-of-type(2)').text().trim().replace(/\n/g, ', ')
                , terca: $(element).find('td:nth-of-type(3)').text().trim().replace(/\n/g, ', ')
                , quarta: $(element).find('td:nth-of-type(4)').text().trim().replace(/\n/g, ', ')
                , quinta: $(element).find('td:nth-of-type(5)').text().trim().replace(/\n/g, ', ')
                , sexta: $(element).find('td:nth-of-type(6)').text().trim().replace(/\n/g, ', ')
                , sabado: $(element).find('td:nth-of-type(7)').text().trim().replace(/\n/g, ', ')
            })).get()
    
            const sobremesa = $(".row-9").map((i, element) => ({
                segunda: $(element).find('td:nth-of-type(2)').text().trim().replace(/\n/g, ', ')
                , terca: $(element).find('td:nth-of-type(3)').text().trim().replace(/\n/g, ', ')
                , quarta: $(element).find('td:nth-of-type(4)').text().trim().replace(/\n/g, ', ')
                , quinta: $(element).find('td:nth-of-type(5)').text().trim().replace(/\n/g, ', ')
                , sexta: $(element).find('td:nth-of-type(6)').text().trim().replace(/\n/g, ', ')
                , sabado: $(element).find('td:nth-of-type(7)').text().trim().replace(/\n/g, ', ')
            })).get()
    
            const bebida = $(".row-10").map((i, element) => ({
                segunda: $(element).find('td:nth-of-type(2)').text().trim().replace(/\n/g, ', ')
                , terca: $(element).find('td:nth-of-type(3)').text().trim().replace(/\n/g, ', ')
                , quarta: $(element).find('td:nth-of-type(4)').text().trim().replace(/\n/g, ', ')
                , quinta: $(element).find('td:nth-of-type(5)').text().trim().replace(/\n/g, ', ')
                , sexta: $(element).find('td:nth-of-type(6)').text().trim().replace(/\n/g, ', ')
                , sabado: $(element).find('td:nth-of-type(7)').text().trim().replace(/\n/g, ', ')
            })).get()
    
            const molho = $(".row-11").map((i, element) => ({
                segunda: $(element).find('td:nth-of-type(2)').text().trim().replace(/\n/g, ', ')
                , terca: $(element).find('td:nth-of-type(3)').text().trim().replace(/\n/g, ', ')
                , quarta: $(element).find('td:nth-of-type(4)').text().trim().replace(/\n/g, ', ')
                , quinta: $(element).find('td:nth-of-type(5)').text().trim().replace(/\n/g, ', ')
                , sexta: $(element).find('td:nth-of-type(6)').text().trim().replace(/\n/g, ', ')
                , sabado: $(element).find('td:nth-of-type(7)').text().trim().replace(/\n/g, ', ')
            })).get()
    
            cardapio = {
                base: base[0],
                principalalmoco: principalalmoco[0],
                principaljantar: principaljantar[0],
                vegetariana: vegetariana[0],
                guarnicao: guarnicao[0],
                salada: salada[0],
                sobremesa: sobremesa[0],
                bebida: bebida[0],
                molho: molho[0]
            }
        }
    }
);

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = "OK, o que deseja saber?"
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


const AlmocoHojeIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AlmocoHojeIntent';
    },
    handle(handlerInput) {
        const speakOutput = (cardapio.principalalmoco[dia])
        ?`O almoço de hoje será ${cardapio.principalalmoco[dia]} <break time="0.3s"/> e ${cardapio.vegetariana[dia]} como opção vegetariana, <break time="0.3s"/> a guarnição é ${cardapio.guarnicao[dia]} <break time="0.3s"/> e a sobremesa ${cardapio.sobremesa[dia]}`
        : 'De acordo com o cardápio semanal, o restaurante universitário não irá servir almoço hoje.'
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const JantarHojeIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'JantarHojeIntent';
    },
    handle(handlerInput) {
        const speakOutput = (cardapio.principaljantar[dia])
        ?`O jantar de hoje será ${cardapio.principaljantar[dia]} <break time="0.3s"/> e ${cardapio.vegetariana[dia]} como opção vegetariana, <break time="0.3s"/> a guarnição é ${cardapio.guarnicao[dia]} <break time="0.3s"/> e a sobremesa ${cardapio.sobremesa[dia]}`
        : 'De acordo com o cardápio semanal, o restaurante universitário não irá servir jantar hoje.'
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const AlmocoAmanhaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AlmocoAmanhaIntent';
    },
    handle(handlerInput) {
        const speakOutput = (cardapio.principalalmoco[amanha])
        ?`O almoço amanhã será ${cardapio.principalalmoco[amanha]} <break time="0.3s"/> e ${cardapio.vegetariana[amanha]} como opção vegetariana, <break time="0.3s"/> a guarnição é ${cardapio.guarnicao[amanha]} <break time="0.3s"/> e a sobremesa ${cardapio.sobremesa[amanha]}`
        : 'De acordo com o cardápio semanal, o restaurante universitário não irá servir almoço amanhã.'
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const JantarAmanhaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'JantarAmanhaIntent';
    },
    handle(handlerInput) {
        const speakOutput = (cardapio.principaljantar[amanha])
        ?`O jantar amanhã será ${cardapio.principaljantar[amanha]} <break time="0.3s"/> e ${cardapio.vegetariana[amanha]} como opção vegetariana, <break time="0.3s"/> a guarnição é ${cardapio.guarnicao[amanha]} <break time="0.3s"/> e a sobremesa ${cardapio.sobremesa[amanha]}`
        : 'De acordo com o cardápio semanal, o restaurante universitário não irá servir jantar amanhã.'
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const NaoEntendiHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'NaoEntendi';
    },
    async handle(handlerInput) {
        const speakOutput = 'Desculpe, não consegui entender o que disse, pode repetir?';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Posso lhe falar sobre o cardápio semanal da UNIFEI, <break time="0.3s"/> o que deseja saber?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = '<say-as interpret-as="interjection">até a próxima</say-as>';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = 'Desculpe, não consigo fazer isso agora.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        AlmocoHojeIntentHandler,
        AlmocoAmanhaIntentHandler,
        JantarHojeIntentHandler,
        JantarAmanhaIntentHandler,
        NaoEntendiHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        //IntentReflectorHandler, // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .lambda();
