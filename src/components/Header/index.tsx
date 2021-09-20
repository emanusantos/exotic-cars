import React from 'react';
import * as S from './styles';
import { ReactComponent as Calendar } from 'assets/calendar.svg';
import { ReactComponent as Location } from 'assets/location.svg';
import { ReactComponent as Search } from 'assets/search.svg';

const Header = () => {
    return (
        <S.Header>
            <S.Wrapper>
                <S.Title>EXOTIC</S.Title>
                <S.Subtitle>CARS</S.Subtitle>
            </S.Wrapper>
            <S.Wrapper colored>
                <S.Wrapper marginRight="4rem">
                    <Location />
                    <S.Text>North Carolina, NC 90025</S.Text>
                </S.Wrapper>
                <S.Wrapper marginRight="1rem">
                    <Calendar />
                    <S.Text>11/03/2021</S.Text>
                </S.Wrapper>
                <S.Wrapper marginRight="1rem">
                    <Calendar />
                    <S.Text>12/12/2021</S.Text>
                </S.Wrapper>
                <div
                    style={{
                        backgroundColor: '#fff',
                        padding: '.2rem .5rem',
                        borderRadius: '5rem'
                    }}
                >
                    <Search />
                </div>
            </S.Wrapper>
            <S.Wrapper>
                <S.Button>Sign up</S.Button>
                <S.Button primary>Sign in</S.Button>
            </S.Wrapper>
        </S.Header>
    );
};

export default Header;
