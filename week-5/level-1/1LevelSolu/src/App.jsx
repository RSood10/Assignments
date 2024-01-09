import { Suspense, useEffect, useState } from "react";
import Card from "./Card.jsx";
import "./index.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [cards, setCard] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [interest, setInterest] = useState("");

  //getting data from db
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      console.log(res.data.users);
      const ar = res.data.users;
      console.log(ar);
      sessionStorage.setItem("condition", "working");
      // setCard([...cards, ar]);
      setCard(ar);
      return res;
    });
  }, []);
  // const [custom, setCustom] = useState(false);
  //sending data to server
  async function userData(name, desc, interest) {
    const jsonData = {
      name: name,
      desc: desc,
      interest: interest,
    };
    try {
      const response = await axios.post("http://localhost:3000/data", jsonData);
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error sending JSON:", error);
    }
  }

  return (
    <>
      <div className="allbox">
        <div className="eleven">
          <h1>Add A BusinessCard</h1>
        </div>
        <hr />
        <div className="uservalue">
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter Your name"
          />
          <input
            type="text"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            placeholder="Enter Description"
          />
          <input
            type="text"
            onChange={(e) => {
              setInterest(e.target.value);
            }}
            placeholder="Enter Interests"
          />
        </div>
        <Suspense fallback={<Loading />}>
          <div>
            <button
              onClick={() => {
                const rkey = uuidv4();
                const newcard = {
                  ukey: rkey,
                  name: name,
                  desc: desc,
                  interest: interest,
                };

                userData(name, desc, interest);
                setCard([...cards, newcard]);
              }}
            >
              Add
            </button>
          </div>
        </Suspense>

        <div className="card-box">
          <Card name="Harsh" desc="Works at Oracle" interest="Watch Movies" />
          {cards.map((card) => {
            return (
              <Card
                key={card.ukey}
                name={card.name}
                desc={card.desc}
                interest={card.interest}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export default App;
