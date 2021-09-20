import React from 'react';
import * as S from 'styles/body';
import Info from 'cars.json';
import Car from 'components/Car';

const Cars = () => {
    return (
        <S.Container>
            {Info.cars.map((car) => (
                <Car
                    key={car.id}
                    brand={car.brand}
                    model={car.model}
                    price={car.price}
                    img={car.fileName}
                />
            ))}
        </S.Container>
    );
};

export default Cars;
