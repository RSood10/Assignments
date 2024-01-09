/* eslint-disable react/prop-types */
import "./index.css";

export default function Card(props) {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <p> {props.desc}</p>
      <h3>Interests</h3>
      <p>{props.interest}</p>
      <Buttons />
    </div>
  );
}

function Buttons() {
  return (
    <div className="btn">
      <button>Linkdin</button>
      <button>Twitter</button>
    </div>
  );
}
/*
The Card must show a person's
    - Name
    - A short description
    - LinkedIn, Twitter and other Social Media Handle buttons
    - Interests Section
    */
