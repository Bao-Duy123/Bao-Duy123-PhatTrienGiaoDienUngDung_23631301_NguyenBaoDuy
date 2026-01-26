import { useState } from 'react';

function CarComponent() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    color: "red"
  });

  const updateColor = () => {
    // Correct way: use the spread operator to create a new object
    setCar(prevCar => {
      return { ...prevCar, color: "blue" };
    });
  };

  return (
    <div>
      <h1>My {car.brand}</h1>
      <p>It is a {car.color} {car.model}.</p>
      <button onClick={updateColor}>Change Color to Blue</button>
    </div>
  );
}
export default CarComponent;
