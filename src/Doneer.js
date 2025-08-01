// src/Doneer.js
import React from "react";
import "./App.css";

const Doneer = () => {
  return (
    <div className="donation-page">
      <h1>🎁 Dankjewel voor je hulp!</h1>
      <p>Je kunt nu je bijdrage doen via onderstaande links. Arigatooo ❤️</p>
      <br />
      <a
        href="https://revolut.me/lotteqfym"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Betaal via Revolut of Credit Card</button>
      </a>
      <br />
      <p style={{ marginTop: "2rem" }}>
        Of via iDEAL via Tikkie (mocht hij niet meer werken stuur Lirry even een appje):
      </p>
      <a
        href="https://tikkie.me/pay/gt2n6gko31aqm273979k"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Betaal met iDEAL</button>
      </a>
    </div>
  );
};

export default Doneer;
