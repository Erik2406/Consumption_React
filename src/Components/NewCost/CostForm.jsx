import React, { useState } from 'react';
import './CostForm.css'

const CostForm = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputData, setInputDate] = useState('');

    const nameChangeHendler = (event) => {
        setInputName(event.target.value)
     
    };

    const amountChangler = (event) => {
        setInputAmount(event.target.value)
      
    }

    const dateChangeHendler = (event) => {
        setInputDate(event.target.value)      
    }

    const submitHendle = (event) => {
        event.preventDefault();

        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputData)
        }
        props.onSveCostData(costData);
        setInputName('');
        setInputAmount('');
        setInputDate('');
    }

    return <form onSubmit={submitHendle}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Name</label>
                <input type="text" value={inputName} onChange={nameChangeHendler} />
            </div>
            <div className="new-cost__control">
                <label>Price</label>
                <input type="number" value={inputAmount} min={10} step={1} onChange={amountChangler} />
            </div>
            <div className="new-cost__control">
                <label>Date</label>
                <input type="date" value={inputData} min={2023} step={1} onChange={dateChangeHendler} />
            </div>
            <div className="new-cost__actions">
                <button type='submit'>Add consumption</button>
                <button type='button' onClick={props.onCancel}>Cancel</button>
            </div>
        </div>
    </form>
}

export default CostForm