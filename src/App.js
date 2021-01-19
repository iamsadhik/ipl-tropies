import React, { useState } from "react";
import "./styles.css";

var teams = {
  IPLteams: [
    {
      Name: "Mumbai Indians"
    },
    {
      Name: "Chennai super kings"
    },
    {
      Name: "Kolkata knight riders"
    },
    {
      Name: "Sunrisers hyderabad"
    },
    {
      Name: "Rajastan royals"
    },
    {
      Name: "Delhi capitals"
    },
    {
      Name: "Kings XI punjab"
    },
    {
      Name: "Royal challengers bengaluru"
    }
  ],
  Mumbai: [
    {
      Name: "MI won in the year:",
      year: "2013"
    },
    {
      year: "2015"
    },
    {
      year: "2017"
    },
    {
      year: "2019"
    },
    {
      year: "2020"
    }
  ],
  Chennai: [
    {
      Name: "CSK won in the year:",
      year: "2010"
    },
    {
      year: "2011"
    },
    {
      year: "2018"
    }
  ],
  Kolkata: [
    {
      Name: "KKR won in the year:",
      year: "2012"
    },
    {
      year: "2014"
    }
  ],
  Hyderabad: [
    {
      Name: "SRH won in the year:",
      year: "2009"
    },
    {
      year: "2016"
    }
  ],
  Rajastan: [
    {
      Name: "RR won in the year:",
      year: "2008"
    }
  ],
  bengaluru: [
    {
      Name: "RCB won in the year:",
      year: "Sorry! Next sala cup namde."
    }
  ]
};

var ipl = Object.keys(teams);

export default function App() {
  var [winners, setWinners] = useState("IPLteams");

  function onClickHandler(cricket) {
    setWinners(cricket);
  }

  return (
    <div className="App">
      <nav className="heading">
        <h1>IPL winners</h1>
      </nav>

      <div id="play">
        {ipl.map((cricket) => (
          <button id="btns" onClick={() => onClickHandler(cricket)}>
            {cricket}
          </button>
        ))}
      </div>
      <div id="border">
        <ul id="list">
          {teams[winners].map((cricket) => (
            <li>
              <div className="name">{cricket.Name}</div>
              <div className="year">{cricket.year}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
