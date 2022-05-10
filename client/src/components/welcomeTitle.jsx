import React from 'react';
import styled from 'styled-components';
import Auth from '../utils/auth';

const HeroStyles = styled.div`
    .hero {
        height: 20vh;
        /* min-height: 1000px; */
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        /* position: relative; */
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
            font-family: 'Montserrat-Bold';
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
    .hero__info {
        margin-top: -18rem;
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
                {/* <div className="hero__image">
                    <img src={HeroImage} alt='me-chinatown'/>
                </div> */}
            </div>
        </div>
    </HeroStyles>
  )
}
