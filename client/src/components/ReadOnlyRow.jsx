import React, { useEffect, useState } from "react";
import {getCurrentPrice} from '../utils/api';

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
      <td>{input.boughtDate}</td>
      <td>{input.boughtPrice}</td>
      <td>{currentPrice.toFixed(2)}</td>
      <td>{currentPos.toFixed(2)}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, input)}
        >
          Edit
        </button>
        </td>
        <td>
        <button type="button" onClick={() => handleDeleteClick(input._id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;