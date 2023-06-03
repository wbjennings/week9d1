import React from 'react';
import CarCard from './CarCard';

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
}

interface CarListProps {
  cars: Car[];
}

const CarList: React.FC<CarListProps> = ({ cars }) => {
  return (
    <div className="car-list">
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}

export default CarList;
