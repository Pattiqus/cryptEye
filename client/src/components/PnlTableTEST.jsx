import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { nanoid } from "nanoid";
import EditableRow from './EditableRow';
import ReadOnlyRow from './ReadOnlyRow';

const ContainerStyles = styled.div`
  .tableContainer {
  justify-content: center;
  text-align: center;
  display: flex;
  }
  table {
    /* border:  1px solid yellow; */
    width: 997.99px;
    /* border-color: var(--gold-1);
    /* border-collapse: collapse; */
    /* border-radius: 5px 5px 0px 0px; */
  }
  tr {
    line-height: 50px;
    border:  1px solid;
    border-color: var(--gold-1);
  }
  th {
    font-size: 15px;
    display: table-cell;
    border:  3px solid;
    border-color: var(--gold-1);
    background-color: var(--gold-1);
    color: black;
  }
  .currancyHead {
    border-radius: 35px 0px 0px 0px;
  }
  .removeHead {
    border-radius: 0px 35px 0px 0px;
  }
  td {
    border-left: solid ;
    border-right: solid;
    border-color: var(--gold-1);
    border:  1px solid;
  }
  .addCoinButton {
    font-family: 'RobotoMono Regular';
    padding: 1rem 2rem;
    font-size: 2rem;
    color: var(--gold-2);
    outline: none;
    background-color: black;
    border-radius: 10px;
    &:hover {
      cursor: pointer;
      background-color: var(--gold-1);
      color: black;
    }

  }

`

export default function PnlTable() {
  const [showInput, setShowInput] = useState(false);

  const saveCoin = (props) => {
    // code to post data
        // code to reset form state
        setShowInput(false);
  }
  const [inputs, setInputs] = useState([]);
  const [addFormData, setAddFormData] = useState({
    coinId: "",
    quantity: "",
    boughtDate: "",
    boughtPrice: "",
  });

  const [editFormData, setEditFormData] = useState({
    coinId: "",
    quantity: "",
    boughtDate: "",
    boughtPrice: "",
  });

  const [editInputId, setEditInputId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newInput = {
      id: nanoid(),
      coinId: addFormData.coinId,
      quantity: addFormData.quantity,
      boughtDate: addFormData.boughtDate,
      boughtPrice: addFormData.boughtPrice,
    };

    const newInputs = [...inputs, newInput];
    setInputs(newInputs);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedInput = {
      id: editInputId,
      coinId: addFormData.coinId,
      quantity: addFormData.quantity,
      boughtDate: addFormData.boughtDate,
      boughtPrice: addFormData.boughtPrice,
    };

    const newInputs = [...inputs];

    const index = inputs.findIndex((input) => input.id === editInputId);

    newInputs[index] = editedInput;

    setInputs(newInputs);
    setEditInputId(null);
  };

  const handleEditClick = (event, input) => {
    event.preventDefault();
    setEditInputId(input.id);

    const formValues = {
      coinId: input.coinId,
      quantity: input.quantity,
      boughtDate: input.boughtDate,
      boughtPrice: input.boughtPrice,
    };    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditInputId(null);
  };

  const handleDeleteClick = (inputId) => {
    const newInputs = [...inputs];

    const index = inputs.findIndex((input) => input.id === inputId);

    newInputs.splice(index, 1);

    setInputs(newInputs);
  };

  return (
    <div>
      <ContainerStyles>
      <div className='tableContainer'>
        <table>
            <thead>
              <tr className='tableTitles'>
                  <th className='currancyHead'>Currancy</th>
                  <th>Quantity</th>
                  <th>Bought On</th>
                  <th>Bought for</th>
                  <th>Current price</th>
                  <th>Net Position</th>
                  <th>Edit</th>
                  <th className='removeHead'>Remove</th>
              </tr>
            </thead>
            <tbody>
            {inputs && inputs.length > 0 && inputs.map((input) => (
              <Fragment>
                {editInputId === input.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    input={input}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
            { /* map through existing coins */}
            <tfoot>
            { showInput && (
              <tr>
                  <td className='addCurrancy'>
                  <input 
                    type="text"
                    required="required"
                    placeholder="CUR"
                    name="addCurrancy"
                    onChange={handleAddFormChange}>
                    </input>
                  </td>
                  <td className='addQuantity'>
                    <input 
                    type="text"
                    required="required"
                    placeholder="Qty"
                    name="addQuantity"
                    onChange={handleAddFormChange}>
                    </input>
                  </td>
                  <td className='boughtDate'>
                    <input type="text"
                    required="required"
                    placeholder="Date Bought"
                    name="boughtDate"
                    onChange={handleAddFormChange}>
                    </input>
                  </td>
                  <td className='boughtPrice'>
                    <input type="text"
                    required="required"
                    placeholder="USDT"
                    name="boughtPrice"
                    onChange={handleAddFormChange}>
                    </input>
                  </td>
                  <td className='currentPrice'>
                    {/**get from tradingview somehow */}
                  </td>
                  <td className='netPos'>
                    {/**use function to calculate PNL between current price and bought price */}
                  </td>
                  <td></td>
                  <td>
                    <button onClick={() => setShowInput(false)}>❌</button>
                  </td>
              </tr>
            )}
            </tfoot>
        </table>
        {showInput && <button onClick={handleAddFormSubmit} >Save coin</button>}
        {!showInput && <button className='addCoinButton' onClick={() => setShowInput(true)}>Add coin</button>}
      </div>
      </ContainerStyles>
    </div>
  )
}

