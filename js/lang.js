// js/lang.js

// Definición de textos para distintos idiomas
const translations = {
    it: {
        nav_services: "Servizi",
        nav_booking: "Prenota",
        nav_contact: "Contatto",
        hero_title: "Esplora il Lago di Garda a Tuo Ritmo ",
        hero_desc: "Goditi il Lago di Garda in totale libertà. Scegli il tuo itinerario e lascia che l’avventura inizi!",
        hero_cta: "Prenota Ora"
    },
    en: {
        nav_services: "Services",
        nav_booking: "Book",
        nav_contact: "Contact",
        hero_title: "Explore Lake Garda at Your Own Pace ",
        hero_desc: "Enjoy Lake Garda in total freedom. Choose your itinerary and let the adventure begin!",
        hero_cta: "Book Now"
    },
    es: {
        nav_services: "Servicios",
        nav_booking: "Reserva",
        nav_contact: "Contacto",
        hero_title: "Explora el Lago de Garda a Tu Ritmo ",
        hero_desc: "Disfruta del Lago de Garda con total libertad. Elige tu itinerario y deja que la aventura comience.",
        hero_cta: "Reserva Ahora"
    },
    de: {
        nav_services: "Dienstleistungen",
        nav_booking: "Buchen",
        nav_contact: "Kontakt",
        hero_title: "Erkunde den Gardasee in deinem eigenen Tempo ",
        hero_desc: "Genieße den Gardasee in völliger Freiheit. Wähle deine Route und lass das Abenteuer beginnen!",
        hero_cta: "Jetzt Buchen"
    },
    fr: {
        nav_services: "Services",
        nav_booking: "Réserver",
        nav_contact: "Contact",
        hero_title: "Explorez le lac de Garde à votre rythme ",
        hero_desc: "Profitez du lac de Garde en toute liberté. Choisissez votre itinéraire et laissez l'aventure commencer !",
        hero_cta: "Réservez Maintenant"
    },
    pt: {
        nav_services: "Serviços",
        nav_booking: "Reservar",
        nav_contact: "Contato",
        hero_title: "Explore o Lago de Garda no Seu Ritmo ",
        hero_desc: "Aproveite o Lago de Garda com total liberdade. Escolha seu itinerário e deixe a aventura começar!",
        hero_cta: "Reserve Agora"
    }
};

// Función para cambiar el idioma
function changeLanguage() {
    const language = document.getElementById("language").value;
    document.querySelectorAll("[data-key]").forEach((element) => {
        const key = element.getAttribute("data-key");
        if (translations[language] && translations[language][key]) {
            element.innerHTML = translations[language][key];
        }
    });
}