import React, { useState, useEffect } from "react";
import "./ElementStudy.css";
import Atom from "./Atom";

export default function ElementStudy() {
  const [element, setElement] = useState("Hydrogen");

  const [data, setData] = useState({
    Hydrogen: {
      appearance: "colorless gas",
      atomic_mass: 1.008,
      boil: 20.271,
      category: "diatomic nonmetal",
      color: null,
      density: 0.08988,
      discovered_by: "Henry Cavendish",
      melt: 13.99,
      molar_heat: 28.836,
      named_by: "Antoine Lavoisier",
      number: 1,
      period: 1,
      phase: "Gas",
      source: "https://en.wikipedia.org/wiki/Hydrogen",
      spectral_img: "https://en.wikipedia.org/wiki/File:Hydrogen_Spectra.jpg",
      summary:
        "Hydrogen is a chemical element with chemical symbol H and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass.",
      symbol: "H",
      xpos: 1,
      ypos: 1,
      shells: [1],
      electron_configuration: "1s1",
      electron_affinity: 72.769,
      electronegativity_pauling: 2.2,
      ionization_energies: [1312],
    },
  });

  useEffect(() => {
    fetch("https://chemistrydata.herokuapp.com/elements")
      .then((res) => res.json())
      .then((jsonData) => {
        setData(jsonData);
      });
  }, []);

  return (
    <div className="element-study">
      <select
        onChange={(e) => {
          e.preventDefault();
          setElement(e.target.value);
          e.target.blur();
        }}
      >
        {Object.keys(data).map((elem) => (
          <option key={elem} value={elem}>
            [{data[elem].number}]{"  "}
            {elem} ({data[elem].symbol})
          </option>
        ))}
      </select>

      <h1 id="element-name">
        {element} ({data[element].symbol})
      </h1>

      <Atom config={data[element].shells} />

      <div className="section">
        <h2 className="sub-heading">Summary</h2>
        {data[element].summary && (
          <div className="info">
            <h3 className="label">Information: </h3>
            <p className="value">{data[element].summary}</p>
          </div>
        )}

        {data[element].appearance && (
          <div className="info">
            <h3 className="label">Appearance: </h3>
            <p className="value" style={{ textTransform: "capitalize" }}>
              {data[element].appearance}
            </p>
          </div>
        )}

        {data[element].color && (
          <div className="info">
            <h3 className="label">Color: </h3>
            <p className="value">{data[element].color}</p>
          </div>
        )}
      </div>

      <div className="section">
        <h2 className="sub-heading">Chemical Properties</h2>
        {data[element].category && (
          <div className="info">
            <h3 className="label">Category: </h3>
            <div className="value" style={{ textTransform: "capitalize" }}>
              {data[element].category}
            </div>
          </div>
        )}

        {data[element].number && (
          <div className="info">
            <h3 className="label">Atomic Number: </h3>
            <p className="value">{data[element].number}</p>
          </div>
        )}

        {data[element].atomic_mass && (
          <div className="info">
            <h3 className="label">Atomic Mass: </h3>
            <p className="value">{data[element].atomic_mass} amu</p>
          </div>
        )}

        {data[element].density && (
          <div className="info">
            <h3 className="label">Density (at STP): </h3>
            <p className="value">{data[element].density} g/L</p>
          </div>
        )}

        {data[element].boil && (
          <div className="info">
            <h3 className="label">Boiling Point: </h3>
            <p className="value">{data[element].boil} K</p>
          </div>
        )}

        {data[element].melt && (
          <div className="info">
            <h3 className="label">Melting Point: </h3>
            <p className="value">{data[element].melt} K</p>
          </div>
        )}

        {data[element].molar_heat && (
          <div className="info">
            <h3 className="label">Molar Heat: </h3>
            <p className="value">{data[element].molar_heat} K</p>
          </div>
        )}

        {data[element].phase && (
          <div className="info">
            <h3 className="label">State (in room temperature): </h3>
            <p className="value">{data[element].phase}</p>
          </div>
        )}

        {data[element].shells && (
          <div className="info">
            <h3 className="label">Electronic configuration: </h3>
            <p className="value">
              {data[element].shells.map((s, i) => {
                if (i < data[element].shells.length - 1) {
                  return `${s}, `;
                } else {
                  return `${s}`;
                }
              })}
            </p>
          </div>
        )}
      </div>

      <div className="section">
        <h2 className="sub-heading">History</h2>
        {data[element].discovered_by && (
          <div className="info">
            <h3 className="label">Discovered by: </h3>
            <p className="value">{data[element].discovered_by}</p>
          </div>
        )}

        {data[element].named_by && (
          <div className="info">
            <h3 className="label">Named By: </h3>
            <p className="value">{data[element].named_by}</p>
          </div>
        )}
      </div>
    </div>
  );
}
