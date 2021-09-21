import React from 'react';

type Car = {
    brand: string;
    model: string;
    price: number;
};

type ContextType = {
    car: Car;
    setCar: React.Dispatch<React.SetStateAction<Car>>;
};

export const CarContext = React.createContext<ContextType>({
    car: { brand: '', model: '', price: 0 },
    setCar: () => {
        console.log('');
    }
});

export const useCarContext = () => React.useContext(CarContext);
