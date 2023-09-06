import React, { useState, useEffect } from "react";
import axios from "axios";
import "./dadjoke.css";

function DadJoke() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      })
      .then((response) => {
        const randomJoke = response.data.joke;
        setJoke(randomJoke);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dad joke:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="dad_container">
      <h2>Random Dad Joke</h2>
      {loading ? <p>Loading joke...</p> : <p>"{joke}"</p>}
    </div>
  );
}

export default DadJoke;
