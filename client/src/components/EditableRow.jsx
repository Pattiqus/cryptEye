import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleEditFormSubmit,
  getCurrentPrice
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="CUR"
          name="coinId"
          value={editFormData.coinId}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Qty"
          name="quantity"
          value={editFormData.quantity}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Date Bought"
          name="boughtDate"
          value={editFormData.boughtDate}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="AUD"
          name="boughtPrice"
          value={editFormData.boughtPrice}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td ></td>
      <td ></td>
      <td>
        <button type="submit" onClick={handleEditFormSubmit}>Save</button>
      </td>
      <td>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;