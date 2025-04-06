import React from "react";
import "./App.css";

function App() {
  const activities = [
    {
      name: "Sunset Cruise",
      description: "Help us sail into the sunset!",
      price: "$150",
      paymentLink: "https://revolut.me/your-sunset-cruise-link",
    },
    {
      name: "Cooking Class",
      description: "Sponsor a pasta-making adventure!",
      price: "$75",
      paymentLink: "https://revolut.me/your-cooking-class-link",
    },
    {
      name: "Wine Tasting",
      description: "Support our journey to becoming amateur sommeliers!",
      price: "$120",
      paymentLink: "https://revolut.me/your-wine-tasting-link",
    },
  ];

  return (
    <div className="App">
      <h1>🏖️ Our Honeymoon Adventure</h1>
      <p>Pick an experience you'd like to gift us!</p>
      <div className="activities">
        {activities.map((activity, index) => (
          <div key={index} className="activity-card">
            <h2>{activity.name}</h2>
            <p>{activity.description}</p>
            <p><strong>{activity.price}</strong></p>
            <a href={activity.paymentLink} target="_blank" rel="noopener noreferrer">
              <button>Donate</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;