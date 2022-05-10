import React, { useState } from 'react';

export default function PnlTable() {
  const [showInput, setShowInput] = useState(false);

  const calculatePnl = () => {

  }

  const saveCoin = () => {
        // code to post data
        // code to reset form state
        // const handleFormSubmit = async (event) => {
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
        //       email: '',
        //       password: '',
        //     });
        //   };
        

        setShowInput(false);
  }

  return (
    <div>
        <table>
            <tr>
                <th>Currancy</th>
                <th>Quantity</th>
                <th>Bought On</th>
                <th>Bought for</th>
                <th>Current price</th>
                <th>Net Position</th>
                <th>Remove</th>
            </tr>
            { /* map through existing coins */}
            { showInput && 
            <tr>
                <td className='addCurrancy'></td>
                <td className='addQuantity'></td>
                <td className='boughtDate'></td>
                <td className='boughtPrice'></td>
                <td className='currentPrice'></td>
                <td><button onClick={setShowInput(false)}>X</button></td>
            </tr>
            }
        </table>
        {showInput && <button onClick={saveCoin} >Save coin</button>}
        {!showInput && <button onClick={() => setShowInput(true)}>Add coin</button>}
    </div>
  )
}

