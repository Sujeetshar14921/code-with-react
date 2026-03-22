import React from "react";
import "./Cards.css";
import { Bookmark } from "lucide-react";

export const Cards = (props) => {
  return (
    <div className="card">
      {/* This is the top part */}
      <div className="top">
        <img
          src = {props.logo}
          alt = ""
        />
        <button>
          save <Bookmark size={10} />
        </button>
      </div>
      {/* This is the center part */}
      <div className="center">
        <h3>
          {props.company} <span>{props.time}</span>
        </h3>
        <h2>{props.role}</h2>
        <div className="tag">
          <h4>{props.type}</h4>
          <h4>{props.level}</h4>
        </div>
      </div>
      {/* This is the bottom part */}
      <div className="bottom">
        <div>
          <h3>{props.salary}</h3>
          <p>{props.location}</p>
        </div>
        <div>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
};
