import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { nanoid } from "nanoid";
import PnlReadOnlyRow from "./components/ReadOnlyRow";
import PnlEditableRow from "./components/EditableRow";

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
  const [inputCoin, setInputCoin] = useState(data);
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

    const newCoin = {
      id: nanoid(),
      coinId: addFormData.coinId,
      quantity: addFormData.quantity,
      boughtDate: addFormData.boughtDate,
      boughtPrice: addFormData.boughtPrice,
    };

    const newCoins = [...inputCoin, newCoin];
    setInputCoin(newCoins);
  };

  return (
    <div>
      <ContainerStyles>
      <div className='tableContainer'>
      <form>
        <table>
            <thead>
              <tr className='tableTitles'>
                  <th className='currancyHead'>Currancy</th>
                  <th>Quantity</th>
                  <th>Bought On</th>
                  <th>Bought for</th>
                  <th>Current price</th>
                  <th>Net Position</th>
                  <th className='removeHead'>Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  {
                    //  pnlData.map((v)=>{
                    //      return <td>{data[v]}</td>
                    //  })
                  }
            </tr>
           </tbody>
            { /* map through existing coins */}
            <tfoot>
            { showInput && (
              <tr>
                  <td className='addCurrancy'>
                    <select>

                    </select>
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
                  <td><button onClick={setShowInput(false)}>❌</button></td>
              </tr>
            )}
            </tfoot>
        </table>
        {showInput && <button onClick={handleAddFormSubmit} >Save coin</button>}
        {!showInput && <button className='addCoinButton' onClick={() => setShowInput(true)}>Add coin</button>}
      </form>
      </div>
      </ContainerStyles>
    </div>
  )
}

