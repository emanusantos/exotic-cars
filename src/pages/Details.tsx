import React from 'react';
import * as S from 'styles/details';
import ArrowRight from 'assets/arrow1.svg';
import ArrowLeft from 'assets/arrow2.svg';
import ArrowLeft2 from 'assets/arrow3.svg';

const Details = () => {
    return (
        <S.Container>
            <div style={{ display: 'flex', gap: '2rem' }}>
                <img
                    style={{ maxWidth: '6rem', maxHeight: '8rem' }}
                    src={`${process.env.PUBLIC_URL}/assets/logo.png`}
                    alt="logo"
                />
                <div style={{ width: '100%', cursor: 'default' }}>
                    <S.Title>Ferrari California</S.Title>
                    <p style={{ fontSize: '2rem' }}>$725/day</p>
                </div>
            </div>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <S.CatalogButton>
                    <img style={{ marginRight: '.1rem' }} src={ArrowLeft} />
                    Back to catalog
                </S.CatalogButton>
                <img
                    style={{ maxWidth: '75%' }}
                    src={`${process.env.PUBLIC_URL}/assets/details.png`}
                    alt="logo"
                />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        cursor: 'default'
                    }}
                >
                    <S.Title>01</S.Title>
                    <p style={{ fontSize: '2rem', fontWeight: 300 }}>Gray</p>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <S.BookButton>
                    Book now <img src={ArrowRight} />
                </S.BookButton>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '3rem'
                }}
            >
                <S.Arrow>
                    <img
                        style={{ width: '1.2rem' }}
                        src={ArrowLeft2}
                        alt="An arrow pointing to the left"
                    />
                </S.Arrow>
                <img
                    style={{ width: '75%', height: '50%' }}
                    src={`${process.env.PUBLIC_URL}/assets/redfront.png`}
                    alt="Red car in front position"
                />
                <img
                    style={{
                        width: '75%',
                        height: '50%'
                    }}
                    src={`${process.env.PUBLIC_URL}/assets/grayfront.png`}
                    alt="Gray car in front position"
                />
                <img
                    style={{
                        width: '75%',
                        height: '50%',
                        paddingRight: '2rem'
                    }}
                    src={`${process.env.PUBLIC_URL}/assets/yellowfront.png`}
                    alt="Yellow car in front position"
                />
                <S.Arrow>
                    <img
                        style={{ width: '1.2rem' }}
                        src={ArrowRight}
                        alt="An arrow pointing to the right"
                    />
                </S.Arrow>
            </div>
        </S.Container>
    );
};

export default Details;
