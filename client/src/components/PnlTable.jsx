import React, { useState } from 'react';
import styled from 'styled-components';

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



  // const calculatePnl = () => {

  // }

  // const [formState, setFormState] = useState({ coinId: '', quantity: 0,  });
  
  const saveCoin = (props) => {
    // const tradingView = await fetch()
    // code to post data
        // code to reset form state
        // const handleCoinSubmit = async (event) => {
        //     event.preventDefault();
        //     console.log(formState);
        //     try {
        //       const { data } = await login({
        //         variables: { ...formState },
        //       });
        
        //       Auth.login(data.login.token);
        //     } catch (e) {
        //       console.error(e);
        //     }
        
        //     // clear form values
        //     setFormState({
        //       coinId: '',
        //       quantity: '',
        //       boughtDate: '',
        //       boughtPrice: '',
        //     });
        //   };
        

        setShowInput(false);
  }

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
                  <td className='addCurrancy'><label>Select Coin</label><select>Select Coin</select></td>
                  <td className='addQuantity'><label>Quantity bought</label><input type="text"></input></td>
                  <td className='boughtDate'><label>Date Bought</label><input type="text"></input></td>
                  <td className='boughtPrice'><label>Price bought</label><input type="text"></input></td>
                  <td className='currentPrice'></td>
                  <td className='netPos'></td>
                  <td><button onClick={setShowInput(false)}>❌</button></td>
              </tr>
            )}
            </tfoot>
        </table>
        {showInput && <button onClick={saveCoin} >Save coin</button>}
        {!showInput && <button className='addCoinButton' onClick={() => setShowInput(true)}>Add coin</button>}
      </div>
      </ContainerStyles>
    </div>
  )
}

