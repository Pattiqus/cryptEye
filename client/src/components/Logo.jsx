import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";

const LogoStyles = styled.div`
    .icon {
        color: var(--gold-1);
        margin-top: 200px;
        font-size: 30rem;
    }
`

export default function Logo() {
  return <div>
            <LogoStyles>
                <FontAwesomeIcon className="icon" icon={faEye} />
            </LogoStyles>
        </div>;
}
