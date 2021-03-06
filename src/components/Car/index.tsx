import React from 'react';
import * as S from 'styles/body';
import Dots from 'components/Dots';

type CarProps = {
    brand: string;
    model: string;
    img: string;
    price: number;
    onClick: () => void;
};

const Car = ({ brand, model, img, price, onClick }: CarProps) => {
    return (
        <S.Card onClick={onClick}>
            <S.Wrapper primary>
                <S.Title>{brand}</S.Title>
                <Dots />
            </S.Wrapper>
            <S.Subtitle>{model.toUpperCase()}</S.Subtitle>
            <img
                src={`${process.env.PUBLIC_URL}/assets/${img}.png`}
                alt="logo"
            />
            <S.Wrapper>
                <S.Price>$</S.Price>
                <h2>{price}</h2>
                <S.Price footer>/day</S.Price>
            </S.Wrapper>
        </S.Card>
    );
};

export default Car;
