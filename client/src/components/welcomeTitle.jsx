import React from 'react';
import styled from 'styled-components';
import Auth from '../utils/auth';

const HeroStyles = styled.div`
    .hero {
        margin-top: 70px;
        height: 20vh;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .hero__heading {
        font-size: 2rem;
        margin-bottom: -4rem;
        position: relative;
        color: var(--gold-1);
        span {
            display: inline-block;
            width: 100%;
            color: var(--gold-2);
        }
        .hero__name {
            font-size: 7rem;
            font-family: 'RobotoMono-Regular';
            color: var(--gold-1); 
        }
    }
    .hero__image {
        max-width: 900px;
        width: 100%;
        height: 600px;
        margin: 0 auto;
        border: 2px solid var(--gold-2);
    }
`;

export default function WelcomeTitle() {
  return (
    <HeroStyles>
        <div className="hero">
            <div className="container">
                <h1 className='hero__heading'>
                    <span>Welcome</span>
                    <span className='hero__name'>{Auth.getProfile().data.username}</span>
                </h1>
            </div>
        </div>
    </HeroStyles>
  )
}
