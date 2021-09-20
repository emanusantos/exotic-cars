import React from 'react';

const Dots = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '.2rem',
                cursor: 'pointer'
            }}
        >
            <div
                style={{
                    width: '.3rem',
                    height: '.3rem',
                    backgroundColor: '#C8C8CA',
                    borderRadius: '.2rem'
                }}
            ></div>
            <div
                style={{
                    width: '.3rem',
                    height: '.3rem',
                    backgroundColor: '#C8C8CA',
                    borderRadius: '.2rem'
                }}
            ></div>
            <div
                style={{
                    width: '.3rem',
                    height: '.3rem',
                    backgroundColor: '#C8C8CA',
                    borderRadius: '.2rem'
                }}
            ></div>
        </div>
    );
};

export default Dots;
