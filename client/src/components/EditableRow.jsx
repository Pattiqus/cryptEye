import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.div`
  .saveButton {
    color: silver;
    font-size: 20px;
    background-color: black;
    border-radius: 2px;
    font-weight: bolder;
    &&:hover {
      background-color: silver;
      cursor: pointer;
    }
  }
  .cancelButton {
    color: silver;
    font-size: 20px;
    background-color: black;
    border-radius: 2px;
    font-weight: bolder;
    &&:hover {
      background-color: var(--gold-1);
      cursor: pointer;
    }
  }
`

const InputStyles = styled.div`
  input[type=text] {
    color: green;
    font-size: 20px;
  }
  input[type=date] {
    color: green;
    font-size: 20px;
    background-color: var(--deep-dark);
    border: none;
    
  }
  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
  .editBoughtDate {
    background-color: var(--deep-dark);
  }
`

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleEditFormSubmit,
}) => {
  return (
    <tr>
      <td>
      <InputStyles>
        <input
          type="text"
          required="required"
          placeholder="CUR"
          name="coinId"
          value={editFormData.coinId}
          onChange={handleEditFormChange}
        ></input>
      </InputStyles>
      </td>
      <td>
        <InputStyles>
        <input
          type="text"
          required="required"
          placeholder="Qty"
          name="quantity"
          value={editFormData.quantity}
          onChange={handleEditFormChange}
        ></input>
        </InputStyles>
      </td>
      <td className="editBoughtDate">
      <InputStyles>
        <input
          type="date"
          required="required"
          placeholder="Date Bought"
          name="boughtDate"
          value={editFormData.boughtDate}
          onChange={handleEditFormChange}
        ></input>
      </InputStyles>
      </td>
      <td>
      <InputStyles>
        <input
          type="text"
          required="required"
          placeholder="AUD"
          name="boughtPrice"
          value={editFormData.boughtPrice}
          onChange={handleEditFormChange}
        ></input>
        </InputStyles>
      </td>
      <td ></td>
      <td ></td>
      
      <td>
        <ButtonStyles>
        <button type="submit" className="saveButton" onClick={handleEditFormSubmit}>Save</button>
        </ButtonStyles>
      </td>
      <td>
      <ButtonStyles>
        <button type="button" className="cancelButton"onClick={handleCancelClick}>
          Cancel
        </button>
        </ButtonStyles>
      </td>
    </tr>
  );
};

export default EditableRow;