import React, { useEffect, useState } from "react";
import {getCurrentPrice} from '../utils/api';
import styled from "styled-components";

const ButtonStyles = styled.div`
  .editButton {
    color: silver;
    background-color: black;
    border-radius: 2px;
    font-weight: bolder;
    font-size: 20px;
    &&:hover {
      background-color: green;
      cursor: pointer;
    }
  }
  .deleteButton {
    color: silver;
    background-color: black;
    border-radius: 2px;
    font-weight: bolder;
    font-size: 20px;
    &&:hover {
      background-color: red;
      cursor: pointer;
    }
  }
`

const ReadOnlyRow = ({ input, handleEditClick, handleDeleteClick }) => {
  const [currentPrice, setCurrentPrice] = useState(0);
  const [currentPos, setCurrentPos] = useState(0)

  const updatePrice = async () => {
    const cp = await getCurrentPrice(input.coinId);
    console.log(cp);
    setCurrentPrice(cp);
  }
  useEffect(() => {
    updatePrice();
    const interval = setInterval(async () => {
      updatePrice();
    }, 10000);

    return () => {
      clearInterval(interval);
    }
  }, [input.coinId]);

  useEffect(() => {
    updatePos();
  }, [currentPrice])

  const updatePos = async () => {
    const cPos = (currentPrice - input.boughtPrice)/100;
    setCurrentPos(cPos);
  }


  return (
    <tr>
      <td>{input.coinId}</td>
      <td>{input.quantity}</td>
      <td>{input.boughtDate.toString().slice(0, 10)}</td>
      <td>{input.boughtPrice}</td>
      <td>{currentPrice.toFixed(2)}</td>
      <td>{currentPos.toFixed(2)}</td>
      <td>
        <ButtonStyles>
        <button
          type="button"
          className="editButton"
          onClick={(event) => handleEditClick(event, input)}
        >
          Edit
        </button>
        </ButtonStyles>
        </td>
        <td>
          <ButtonStyles>
        <button type="button" className="deleteButton" onClick={() => handleDeleteClick(input._id)}>
          Delete
        </button>
        </ButtonStyles>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;