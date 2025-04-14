import React, { useState } from "react";
import ghibli from "./images/ghibli.jpeg";
import spa from "./images/spa.jpeg";
import dinner from './images/dinner.png';
import diving from "./images/diving.jpg.webp";
import fuji from "./images/fuiji.webp";
import japan from "./images/japan.webp";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("nl");
  const [showModal, setShowModal] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);


  const activities = {
    en: [
      {
        name: "Michelin Star Dinner in Tokyo",
        description: "Help us experience an unforgettable fine dining night!",
        price: "$300",
        paymentLink: "https://revolut.me/your-michelin-star-link",
        image: dinner,
      },
      {
        name: "Diving in Okinawa",
        description: "Support our underwater adventure in crystal-clear waters!",
        price: "$200",
        paymentLink: "https://revolut.me/your-diving-link",
        image: diving,
      },
      {
        name: "Private Hot Tub Stay with Mount Fuji View",
        description: "Gift us a magical night overlooking Mount Fuji.",
        price: "$400",
        paymentLink: "https://revolut.me/your-hottub-fuji-link",
        image: fuji
      },
      {
        name: "Spa Day with Massages",
        description: "Help us relax and recharge with a full spa experience.",
        price: "$250",
        paymentLink: "https://revolut.me/your-spa-day-link",
        image: spa
      },
      {
        name: "Studio Ghibli Museum Visit",
        description: "Support a dreamy visit to the world of Ghibli!",
        price: "$100",
        paymentLink: "https://revolut.me/your-ghibli-link",
        image: ghibli,
      },
      {
        name: "Choose your own activity",
        description: "Do you have a suggestion or tip? Let us know in the personal message!",
        price: "€100",
        paymentLink: "https://revolut.me/your-ghibli-link",
        image: japan
      },
    ],
    nl: [
      {
        name: "Michelin Sterren Diner in Tokio",
        description: "Help ons een onvergetelijke fine dining ervaring beleven!",
        price: "€300",
        paymentLink: "https://revolut.me/your-michelin-star-link",
        image: dinner,
      },
      {
        name: "Duiken in Okinawa",
        description: "Steun ons onderwateravontuur in kristalhelder water!",
        price: "€200",
        paymentLink: "https://revolut.me/your-diving-link",
        image: diving,
      },
      {
        name: "Verblijf met Privé Bubbelbad en Uitzicht op Mount Fuji",
        description: "Geef ons een magische nacht met uitzicht op Mount Fuji.",
        price: "€400",
        paymentLink: "https://revolut.me/your-hottub-fuji-link",
        image: fuji
      },
      {
        name: "Wellnessdag met Massages",
        description: "Help ons ontspannen en opladen met een volledige spa-ervaring.",
        price: "€250",
        paymentLink: "https://revolut.me/your-spa-day-link",
        image: spa,
      },
      {
        name: "Bezoek aan Studio Ghibli Museum",
        description: "Steun een droomachtige reis naar de wereld van Ghibli!",
        price: "€100",
        paymentLink: "https://revolut.me/your-ghibli-link",
        image: ghibli
      },
      {
        name: "Kies je eigen activiteit",
        description: "Heb je een eigen suggestie of tip? Laat het weten in het persoonlijke berichtje",
        price: "€100",
        paymentLink: "https://revolut.me/your-ghibli-link",
        image: japan
      },
    ],
  };

  return (
    <div className="App">
      <div className="language-switcher">
        <button onClick={() => setLanguage("en")}>English</button>
        <button onClick={() => setLanguage("nl")}>Nederlands</button>
      </div>
      <h1>
        {language === "en" ? "Lot & Lir go to Japan!" : "🏖️ Lot & Lir gaan naar Japan!"}
      </h1>
      <p>
        {language === "en"
          ? "Pick an experience you'd like to gift us!"
          : "Kies een ervaring die je ons cadeau wilt doen!"}
      </p>
      <div className="activities">
        {activities[language].map((activity, index) => (
          <div key={index} className="activity-card">
            <img src={activity.image} alt={activity.name} className="activity-image" />
            <h2>{activity.name}</h2>
            <p>{activity.description}</p>
            <button onClick={() => {   setSelectedActivity(activity); 
  setShowModal(true);  }}>
                {language === "en" ? "Donate" : "Doneer"}
            </button>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="overlay">
          <div className="modal">
            <h2>{selectedActivity?.name}</h2>
            <img src={selectedActivity?.image} alt={selectedActivity?.name} className="activity-image" />
            <h4>Geweldig dat je ons wilt helpen! Laat hier je naam en persoonlijk bericht achter, en we zullen je een berichtje sturen als we jouw activiteit gaan doen!</h4>
            <div>
            <iframe
  src="https://tally.so/embed/wvWdov?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
  loading="lazy"
  width="100%"
  height="300"
  frameBorder="0"
  marginHeight="0"
  marginWidth="0"
  title="Thanks :)"
></iframe>
            </div>
              <button type="button" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
