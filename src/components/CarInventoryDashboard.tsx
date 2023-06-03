import React from 'react';
import CarList from './CarList';

const CarInventoryDashboard: React.FC = () => {
  const carData = [
    { id: 1, make: 'Toyota', model: 'Camry', year: 2020 },
    { id: 2, make: 'Honda', model: 'Civic', year: 2021 },
    { id: 3, make: 'Ford', model: 'Mustang', year: 2019 },
  ];

  return (
    <div className="car-inventory-dashboard">
      <h2>Car Inventory Dashboard</h2>
      <CarList cars={carData} />
    </div>
  );
}

export default CarInventoryDashboard;
