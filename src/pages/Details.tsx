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
                <div style={{ width: '100%' }}>
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
                <button
                    style={{
                        backgroundColor: 'transparent',
                        fontSize: '1rem',
                        fontWeight: 300,
                        color: '#313136',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '.1rem',
                        height: '50%',
                        alignSelf: 'center',
                        border: '.01rem solid #313136',
                        padding: '1rem',
                        borderRadius: '1.5rem',
                        marginRight: '3rem',
                        cursor: 'pointer'
                    }}
                >
                    <img style={{ marginRight: '.1rem' }} src={ArrowLeft} />
                    Back to catalog
                </button>
                <img
                    style={{ maxWidth: '75%' }}
                    src={`${process.env.PUBLIC_URL}/assets/details.png`}
                    alt="logo"
                />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
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
                <button
                    style={{
                        display: 'flex',
                        gap: '1rem',
                        color: '#fff',
                        padding: '1rem 2rem',
                        alignSelf: 'center',
                        fontSize: '1rem',
                        backgroundColor: '#313136',
                        border: 'none',
                        borderRadius: '1.7rem',
                        cursor: 'pointer'
                    }}
                >
                    Book now <img src={ArrowRight} />
                </button>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '3rem'
                }}
            >
                <button
                    style={{
                        height: '50%',
                        alignSelf: 'center',
                        padding: '.6rem .5rem',
                        backgroundColor: '#313136',
                        borderRadius: '2.5rem',
                        border: 'none'
                    }}
                >
                    <img
                        style={{ width: '1.2rem' }}
                        src={ArrowLeft2}
                        alt="An arrow pointing to the left"
                    />
                </button>
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
                <button
                    style={{
                        height: '50%',
                        alignSelf: 'center',
                        padding: '.6rem .5rem',
                        backgroundColor: '#313136',
                        borderRadius: '2.5rem',
                        border: 'none'
                    }}
                >
                    <img
                        style={{ width: '1.2rem' }}
                        src={ArrowRight}
                        alt="An arrow pointing to the right"
                    />
                </button>
            </div>
        </S.Container>
    );
};

export default Details;
