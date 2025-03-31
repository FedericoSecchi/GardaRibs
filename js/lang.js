// js/lang.js

// Definición de textos para distintos idiomas
const translations = {
    it: {
        nav_services: "Servizi",
        nav_booking: "Prenota",
        nav_contact: "Contatto",
        hero_title: "Esplora il Lago di Garda a Tuo Ritmo",
        hero_desc: "Goditi il Lago di Garda in totale libertà. Scegli il tuo itinerario e lascia che l’avventura inizi!",
        hero_cta: "Prenota Ora",
        
        // Sección de Servicios
        servicios: "SERVIZI",
        alquiler_title: "Noleggio di Gommoni",
        alquiler_desc: "Noleggia uno dei nostri gommoni e scopri il Lago di Garda in totale autonomia. Ideale per chi desidera allenarsi in diverse discipline acquatiche come Optimist, 29er e altre classi veliche.",
        tour_title: "Tour Guidati",
        tour_desc: "Esplora i segreti del Lago di Garda con una guida esperta. Offriamo anche tour speciali per gli amanti del kite, portandoti nei migliori spot dove praticare kitesurf in sicurezza.",
        privadas_title: "Esperienze Private",
        privadas_desc: "Crea la tua avventura personalizzata: picnic sull’acqua, snorkeling o relax al tramonto. La tua esperienza unica sul Lago di Garda!"
    },
    en: {
        nav_services: "Services",
        nav_booking: "Book",
        nav_contact: "Contact",
        hero_title: "Explore Lake Garda at Your Own Pace",
        hero_desc: "Enjoy Lake Garda in total freedom. Choose your itinerary and let the adventure begin!",
        hero_cta: "Book Now",
        
        // Sección de Servicios
        servicios: "SERVICES",
        alquiler_title: "Rib Rentals",
        alquiler_desc: "Rent one of our ribs and discover Lake Garda at your own pace. Ideal for those who want to train in various water sports like Optimist, 29er, and other sailing classes.",
        tour_title: "Guided Tours",
        tour_desc: "Explore the secrets of Lake Garda with an expert guide. We also offer special tours for kite enthusiasts, taking you to the best spots for safe kitesurfing.",
        privadas_title: "Private Experiences",
        privadas_desc: "Create your personalized adventure: water picnics, snorkeling, or sunset relaxation. Your unique experience on Lake Garda!"
    },
    es: {
        nav_services: "Servicios",
        nav_booking: "Reserva",
        nav_contact: "Contacto",
        hero_title: "Explora el Lago de Garda a Tu Ritmo",
        hero_desc: "Disfruta del Lago de Garda con total libertad. Elige tu itinerario y deja que la aventura comience.",
        hero_cta: "Reserva Ahora",
        
        // Sección de Servicios
        servicios: "SERVICIOS",
        alquiler_title: "Alquiler de Semirrígidos",
        alquiler_desc: "Alquila uno de nuestros gommones y descubre el Lago di Garda en total libertad. Ideal para quienes desean entrenar en diversas disciplinas acuáticas como Optimist, 29er y otras clases.",
        tour_title: "Tours Guiados",
        tour_desc: "Explora los secretos del Lago di Garda con un guía experto. También ofrecemos tours especiales para amantes del kite, llevándote a los mejores spots para practicar kitesurf.",
        privadas_title: "Experiencias Privadas",
        privadas_desc: "Crea tu aventura personalizada: picnic en el agua, snorkel o relax al atardecer. ¡Tu experiencia única en el Lago di Garda!"
    },
    de: {
        nav_services: "Dienstleistungen",
        nav_booking: "Buchen",
        nav_contact: "Kontakt",
        hero_title: "Erkunde den Gardasee in deinem eigenen Tempo",
        hero_desc: "Genieße den Gardasee in völliger Freiheit. Wähle deine Route und lass das Abenteuer beginnen!",
        hero_cta: "Jetzt Buchen",
        
        // Sección de Servicios
        servicios: "DIENSTLEISTUNGEN",
        alquiler_title: "Vermietung von Schlauchbooten",
        alquiler_desc: "Miete eines unserer Schlauchboote und erkunde den Gardasee auf eigene Faust. Ideal für diejenigen, die sich in verschiedenen Wassersportarten wie Optimist, 29er und anderen Klassen üben möchten.",
        tour_title: "Geführte Touren",
        tour_desc: "Entdecke die Geheimnisse des Gardasees mit einem erfahrenen Führer. Wir bieten auch spezielle Touren für Kitesurf-Liebhaber an, um dich zu den besten Spots für sicheres Kitesurfen zu bringen.",
        privadas_title: "Private Erlebnisse",
        privadas_desc: "Erstelle dein persönliches Abenteuer: Picknick auf dem Wasser, Schnorcheln oder Entspannung bei Sonnenuntergang. Dein einzigartiges Erlebnis am Gardasee!"
    },
    fr: {
        nav_services: "Services",
        nav_booking: "Réserver",
        nav_contact: "Contact",
        hero_title: "Explorez le lac de Garde à votre rythme",
        hero_desc: "Profitez du lac de Garde en toute liberté. Choisissez votre itinéraire et laissez l'aventure commencer !",
        hero_cta: "Réservez Maintenant",
        
        // Sección de Servicios
        servicios: "SERVICES",
        alquiler_title: "Location de Semi-rigides",
        alquiler_desc: "Louez l'un de nos semi-rigides et explorez le lac de Garde en toute autonomie. Idéal pour ceux qui souhaitent s'entraîner dans diverses disciplines nautiques comme Optimist, 29er et d'autres classes.",
        tour_title: "Visites Guidées",
        tour_desc: "Découvrez les secrets du lac de Garde avec un guide expert. Nous proposons également des visites spéciales pour les amateurs de kite, vous emmenant vers les meilleurs endroits pour pratiquer le kitesurf en toute sécurité.",
        privadas_title: "Expériences Privées",
        privadas_desc: "Créez votre aventure personnalisée : pique-nique sur l'eau, snorkeling ou détente au coucher du soleil. Votre expérience unique sur le lac de Garde !"
    },
    pt: {
        nav_services: "Serviços",
        nav_booking: "Reservar",
        nav_contact: "Contato",
        hero_title: "Explore o Lago de Garda no Seu Ritmo",
        hero_desc: "Aproveite o Lago de Garda com total liberdade. Escolha seu itinerário e deixe a aventura começar!",
        hero_cta: "Reserve Agora",
        
        // Sección de Servicios
        servicios: "SERVIÇOS",
        alquiler_title: "Aluguel de Botes",
        alquiler_desc: "Alugue um dos nossos barcos e descubra o Lago de Garda no seu próprio ritmo. Ideal para quem deseja treinar em diversas disciplinas aquáticas como Optimist, 29er e outras classes.",
        tour_title: "Passeios Guiados",
        tour_desc: "Explore os segredos do Lago de Garda com um guia experiente. Também oferecemos passeios especiais para amantes de kite, levando você aos melhores locais para praticar kitesurf com segurança.",
        privadas_title: "Experiências Privadas",
        privadas_desc: "Crie sua aventura personalizada: piquenique na água, mergulho com snorkel ou relaxamento ao pôr do sol. Sua experiência única no Lago de Garda!"
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