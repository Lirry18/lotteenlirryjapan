import React, { useState } from "react";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("en");

  const activities = {
    en: [
      {
        name: "Michelin Star Dinner in Tokyo",
        description: "Help us experience an unforgettable fine dining night!",
        price: "$300",
        paymentLink: "https://revolut.me/your-michelin-star-link",
        image: "./images/dinner.png",
      },
      {
        name: "Diving in Okinawa",
        description: "Support our underwater adventure in crystal-clear waters!",
        price: "$200",
        paymentLink: "https://revolut.me/your-diving-link",
        image: "/images/diving.png",
      },
      {
        name: "Private Hot Tub Stay with Mount Fuji View",
        description: "Gift us a magical night overlooking Mount Fuji.",
        price: "$400",
        paymentLink: "https://revolut.me/your-hottub-fuji-link",
        image: "/images/fuji.jpg",
      },
      {
        name: "Spa Day with Massages",
        description: "Help us relax and recharge with a full spa experience.",
        price: "$250",
        paymentLink: "https://revolut.me/your-spa-day-link",
        image: "/images/spa.jpeg",
      },
      {
        name: "Studio Ghibli Museum Visit",
        description: "Support a dreamy visit to the world of Ghibli!",
        price: "$100",
        paymentLink: "https://revolut.me/your-ghibli-link",
        image: "/images/ghibli.jpeg",
      },
    ],
    nl: [
      {
        name: "Michelin Sterren Diner in Tokio",
        description: "Help ons een onvergetelijke fine dining ervaring beleven!",
        price: "€300",
        paymentLink: "https://revolut.me/your-michelin-star-link",
        image: "/images/michelin.jpg",
      },
      {
        name: "Duiken in Okinawa",
        description: "Steun ons onderwateravontuur in kristalhelder water!",
        price: "€200",
        paymentLink: "https://revolut.me/your-diving-link",
        image: "/images/diving.jpg",
      },
      {
        name: "Verblijf met Privé Bubbelbad en Uitzicht op Mount Fuji",
        description: "Geef ons een magische nacht met uitzicht op Mount Fuji.",
        price: "€400",
        paymentLink: "https://revolut.me/your-hottub-fuji-link",
        image: "/images/hottub.jpg",
      },
      {
        name: "Wellnessdag met Massages",
        description: "Help ons ontspannen en opladen met een volledige spa-ervaring.",
        price: "€250",
        paymentLink: "https://revolut.me/your-spa-day-link",
        image: "/images/spa.jpg",
      },
      {
        name: "Bezoek aan Studio Ghibli Museum",
        description: "Steun een droomachtige reis naar de wereld van Ghibli!",
        price: "€100",
        paymentLink: "https://revolut.me/your-ghibli-link",
        image: "/images/ghibli.jpg",
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
        {language === "en" ? "🏖️ Our Honeymoon Adventure" : "🏖️ Ons Huwelijksreis Avontuur"}
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
            <p><strong>{activity.price}</strong></p>
            <a href={activity.paymentLink} target="_blank" rel="noopener noreferrer">
              <button>
                {language === "en" ? "Donate" : "Doneer"}
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
