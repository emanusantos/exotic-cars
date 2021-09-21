import React from 'react';
import * as S from 'styles/body';
import Info from 'cars.json';
import Car from 'components/Car';
import { useHistory } from 'react-router';
import { useCarContext } from 'CarContext';

const Cars = () => {
    const history = useHistory();
    const { setCar } = useCarContext();
    return (
        <S.Container>
            {Info.cars.map((car) => (
                <Car
                    key={car.id}
                    brand={car.brand}
                    model={car.model}
                    price={car.price}
                    img={car.fileName}
                    onClick={() => {
                        setCar({
                            brand: car.brand,
                            model: car.model,
                            price: car.price
                        });
                        history.push('/details');
                    }}
                />
            ))}
        </S.Container>
    );
};

export default Cars;
