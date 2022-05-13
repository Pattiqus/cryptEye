import React, { useState, Fragment } from 'react';
import { nanoid } from "nanoid";
import EditableRow from './EditableRow';
import ReadOnlyRow from './ReadOnlyRow';
import { getCurrentPrice } from '../utils/api';
import { ContainerStyles } from './PnlTableTest/PnlTable.styles';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_PNL, EDIT_PNL, DROP_PNL } from '../utils/mutations';
import { QUERY_PNLS } from '../utils/queries';


const formDefaults = {
  coinId: "",
  quantity: "",
  boughtDate: new Date(),
  boughtPrice: "",
};

export default function PnlTable() {
  const [showInput, setShowInput] = useState(false);
  const { loading, data } = useQuery(QUERY_PNLS);
  const pnlDb = data?.pnls
  


  const [inputs, setInputs] = useState([]);
  const [addFormData, setAddFormData] = useState(formDefaults);
  const [addPnl, { error }] = useMutation(ADD_PNL);
  

  const [editFormData, setEditFormData] = useState();

  const [editInputId, setEditInputId] = useState(null);

  const [dropPnl, { error2 }] = useMutation(DROP_PNL);

  /**
   * Function: handleAddFormChange
   * Description: handles the data for adding a new currancy to the pnl table
   * @param {*} event 
   */
  const handleAddFormChange = async (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    if (fieldName === 'coinId' && fieldValue.length >= 3) { 
      newFormData.currentPrice = await getCurrentPrice(fieldValue);
      if (newFormData.boughtPrice.length) {
        newFormData.netPos = (newFormData.currentPrice / newFormData.boughtPrice) * 100;
      }
    } else if (fieldName === 'boughtPrice') {
        newFormData.netPos = (newFormData.currentPrice / newFormData.boughtPrice) * 100;
    }

    setAddFormData(newFormData);
  };

  /**
   * Function: handEditFormChange
   * Description: handles the data for editing an existing currancy log in the pnl table 
   * @param {*} event 
   */
  const handleEditFormChange = async (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    if (fieldName === 'coinId' && fieldValue.length >= 3) { 
      newFormData.currentPrice = await getCurrentPrice(fieldValue);
      if (newFormData.boughtPrice.length) {
        newFormData.netPos = (newFormData.currentPrice - newFormData.boughtPrice) / 100;
      }
    } else if (fieldName === 'boughtPrice') {
        newFormData.netPos = (newFormData.currentPrice - newFormData.boughtPrice) / 100;
    }

    setEditFormData(newFormData);
  };

  /**
   * Function: handleAddFormSubmit
   * Description: handles submission of new entry to pnl table
   * @param {*} event 
   * @returns 
   */
  const handleAddFormSubmit = async (event) => {
    event.preventDefault();
    // if (!addFormData.coinId || !addFormData.quantity) {
    //   return ;
    // }
    console.log(addFormData)
    const newInput = {
      id: nanoid(), 
      ...addFormData
    };
    const newInputs = [...inputs, newInput];
    try {
      const { data } = await addPnl({
        variables: {
          data : {
            coinId: addFormData.coinId,
            boughtDate: addFormData.boughtDate,
            quantity: Number(addFormData.quantity),
            boughtPrice: Number(addFormData.boughtPrice),
          }
        }
      })
    } catch (error){
      
    }
    setInputs(newInputs);
    setAddFormData(formDefaults);
  };

  /**
   * Function: handleEditFormSubmit
   * Description: handles submission of editted entry existing in the pnl table
   * @param {*} event 
   */
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedInput = {
      id: editInputId,
      coinId: editFormData.coinId,
      quantity: editFormData.quantity,
      boughtDate: editFormData.boughtDate,
      boughtPrice: editFormData.boughtPrice,
      currentPrice: editFormData.currentPrice,
      netPos: editFormData.netPos
    };

    const newInputs = [...inputs];

    const index = inputs.findIndex((input) => input.id === editInputId);

    newInputs[index] = editedInput;

    setInputs(newInputs);
    setEditInputId(null);
  };

  /**
   * Function: handleEditClick
   * Description: onclick function for editing a current entry in the pnl table
   * @param {*} event 
   * @param {*} input 
   */
  const handleEditClick = (event, input) => {
    event.preventDefault();
    setEditInputId(input.id);

    const formValues = {
      coinId: input.coinId,
      quantity: input.quantity,
      boughtDate: input.boughtDate,
      boughtPrice: input.boughtPrice,
      currentPrice: input.currentPrice,
      netPos: input.netPos
    };    setEditFormData(formValues);
  };

  /**
   * Function: handleCancelClick
   * Description: cancels editing of existing pnl table entry
   */
  const handleCancelClick = () => {
    setEditInputId(null);
  };

  /**
   * Function: handleDeleteClick
   * Description: Removes a existing entry in the PNL table.
   * @param {*} inputId 
   */
  const handleDeleteClick = (inputId) => {
    const newInputs = [...inputs];

    const index = inputs.findIndex((input) => input.id === inputId);

    newInputs.splice(index, 1);

    setInputs(newInputs);
  };

  const isFormValid = () => {
    return addFormData.coinId && addFormData.quantity && addFormData.boughtPrice;
  }
  console.log("pnl = ", pnlDb);
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
            {pnlDb?.map((input) => (
              <Fragment>
                {editInputId === input.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                    handleEditFormSubmit={handleEditFormSubmit}
                    getCurrentPrice={getCurrentPrice}
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
                    name="coinId"
                    value={addFormData.coinId}
                    onChange={handleAddFormChange}>
                    </input>
                  </td>
                  <td className='addQuantity'>
                    <input 
                    type="text"
                    required="required"
                    placeholder="Qty"
                    name="quantity"
                    value={addFormData.quantity}
                    onChange={handleAddFormChange}>
                    </input>
                  </td>
                  <td className='boughtDate'>
                    <input type="date"
                    required="required"
                    placeholder="Date Bought"
                    name="boughtDate"
                    value={addFormData.boughtDate}
                    onChange={handleAddFormChange}>
                    </input>
                  </td>
                  <td className='boughtPrice'>
                    <input type="text"
                    required="required"
                    placeholder="AUD"
                    name="boughtPrice"
                    value={addFormData.boughtPrice}
                    onChange={handleAddFormChange}>
                    </input>
                  </td>
                  <td className='currentPrice'>
                    {addFormData && addFormData.currentPrice}
                  </td>
                  <td className='netPos'>
                    {addFormData && addFormData.netPos}
                  </td>
                  <td></td>
                  <td>
                    <button onClick={() => setShowInput(false)}>❌</button>
                  </td>
              </tr>
            )}
            </tfoot>
        </table>
        {showInput && <button disabled={!isFormValid()} onClick={handleAddFormSubmit} >Save coin</button>}
        {!showInput && <button className='addCoinButton' onClick={() => setShowInput(true)}>Add coin</button>}
      </div>
      </ContainerStyles>
    </div>
  )
}

