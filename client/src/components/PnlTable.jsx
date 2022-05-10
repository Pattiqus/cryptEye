import React, { useState } from 'react';
import styled from 'styled-components';

const TableStyles = styled.table`
  
`
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

`

export default function PnlTable() {
  const [showInput, setShowInput] = useState(false);

  const calculatePnl = () => {

  }

  const [formState, setFormState] = useState({ coinId: '', quantity: 0,  });
  
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
      <form>
        <table>
            <tr className='tableTitles'>
                <th className='currancyHead'>Currancy</th>
                <th>Quantity</th>
                <th>Bought On</th>
                <th>Bought for</th>
                <th>Current price</th>
                <th>Net Position</th>
                <th className='removeHead'>Remove</th>
            </tr>
            <tr>
                {
                  //  pnlData.map((v)=>{
                  //      return <td>{data[v]}</td>
                  //  })
                }
           </tr>
            { /* map through existing coins */}
            { showInput && 
            <tr>
                <td className='addCurrancy'><select>Select Coin</select></td>
                <td className='addQuantity'><input type="text"></input></td>
                <td className='boughtDate'></td>
                <td className='boughtPrice'></td>
                <td className='currentPrice'></td>
                <td><button onClick={setShowInput(false)}>X</button></td>
            </tr>
            }
        </table>
        {showInput && <button onClick={saveCoin} >Save coin</button>}
        {!showInput && <button className='addCoinButton' onClick={() => setShowInput(true)}>Add coin</button>}
      </form>
      </div>
      </ContainerStyles>
    </div>
  )
}

