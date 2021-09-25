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
        console.log(jsonData);
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
            <div className="label">Information: </div>
            <div className="value">{data[element].summary}</div>
          </div>
        )}

        {data[element].appearance && (
          <div className="info">
            <div className="label">Appearance : </div>
            <div className="value" style={{ textTransform: "capitalize" }}>
              {data[element].appearance}
            </div>
          </div>
        )}

        {data[element].color && (
          <div className="info">
            <div className="label">Color : </div>
            <div className="value">{data[element].color}</div>
          </div>
        )}
      </div>

      <div className="section">
        <h2 className="sub-heading">Chemical Properties</h2>
        {data[element].category && (
          <div className="info">
            <div className="label">Category : </div>
            <div className="value" style={{ textTransform: "capitalize" }}>
              {data[element].category}
            </div>
          </div>
        )}

        {data[element].number && (
          <div className="info">
            <div className="label">Atomic Number : </div>
            <div className="value">{data[element].number}</div>
          </div>
        )}

        {data[element].atomic_mass && (
          <div className="info">
            <div className="label">Atomic Mass : </div>
            <div className="value">{data[element].atomic_mass} amu</div>
          </div>
        )}

        {data[element].density && (
          <div className="info">
            <div className="label">Density (at STP): </div>
            <div className="value">{data[element].density} g/L</div>
          </div>
        )}

        {data[element].boil && (
          <div className="info">
            <div className="label">Boiling Point : </div>
            <div className="value">{data[element].boil} K</div>
          </div>
        )}

        {data[element].melt && (
          <div className="info">
            <div className="label">Melting Point : </div>
            <div className="value">{data[element].melt} K</div>
          </div>
        )}

        {data[element].molar_heat && (
          <div className="info">
            <div className="label">Molar Heat : </div>
            <div className="value">{data[element].molar_heat} K</div>
          </div>
        )}

        {data[element].phase && (
          <div className="info">
            <div className="label">State (in room temperature) : </div>
            <div className="value">{data[element].phase}</div>
          </div>
        )}

        {data[element].shells && (
          <div className="info">
            <div className="label">Electronic configuration : </div>
            <div className="value">
              {data[element].shells.map((s, i) => {
                if (i < data[element].shells.length - 1) {
                  return `${s}, `;
                } else {
                  return `${s}`;
                }
              })}
            </div>
          </div>
        )}
      </div>

      <div className="section">
        <h2 className="sub-heading">History</h2>
        {data[element].discovered_by && (
          <div className="info">
            <div className="label">Discovered by : </div>
            <div className="value">{data[element].discovered_by}</div>
          </div>
        )}

        {data[element].named_by && (
          <div className="info">
            <div className="label">Named By : </div>
            <div className="value">{data[element].named_by}</div>
          </div>
        )}
      </div>
    </div>
  );
}
