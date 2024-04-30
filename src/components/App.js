import React, { useState, useEffect } from "react";

function App() {
  const [dogPicture, setDogPicture] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogPicture(data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dog picture:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogPicture} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
