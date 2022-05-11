import React from "react";

const ReadOnlyRow = ({ input, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{input.coinId}</td>
      <td>{input.quantity}</td>
      <td>{input.boughtDate}</td>
      <td>{input.boughtPrice}</td>
      <td>{input.currentPrice}</td>
      <td></td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, input)}
        >
          Edit
        </button>
        </td>
        <td>
        <button type="button" onClick={() => handleDeleteClick(input.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;