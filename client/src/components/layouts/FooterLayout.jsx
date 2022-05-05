import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components';

const FooterStyles = styled.div`
.footer__container {
    display: flex;
    flex-direction: column;
    bottom: 0;
    position: fixed;
    justify-content: center;
    width: 100%;
    background: var(--dark-bg);
}
.footerLinksList {
    display: flex;
    list-style: none;
    bottom: 0;
    justify-content: center;
    &:hover {
        color: var(--steel-1);
    }
}
.footerButtons {
    margin: 5px 20px 5px 20px;
    font-size: 4rem;

}
.trademark {
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
}
`;

export default function footerLayout(props) {
  
    const socialLinks = [
        {
            title: <FontAwesomeIcon icon={faGithub} />,
            link: 'https://github.com/Pattiqus'
        },
        {
            title: <FontAwesomeIcon icon={faLinkedin}/>,
            link: 'https://www.linkedin.com/in/pat-b-52553410a/'
        },
        {
            title: <FontAwesomeIcon icon={faTwitter} />,
            link: 'https://twitter.com/Patticus_TV'
        },
        {
            title: <FontAwesomeIcon icon={faStackOverflow} />,
            link: 'https://stackoverflow.com/users/17328724/patticus'
        },
    ]
  
    return (
    <div>
        <FooterStyles>
        <div className="footer__container">
            <ul className='footerLinksList'>
            {socialLinks.map((item, index) => (
                    <li key={index} className='footerButtons'>
                        <a href={item.link} target='_blank' rel='noreferrer'>
                        {item.title}
                        </a>
                    </li>
                ))} 
            </ul>
            <span className='trademark'>Written by Pattiqus © </span>
        </div>
        </FooterStyles>
        {props.children}

    </div>
  )
}
