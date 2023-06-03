import React from 'react';

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
}

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="car-card">
      <h3>{car.make}</h3>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
    </div>
  );
}

export default CarCard;
