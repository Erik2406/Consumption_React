import React, { useState } from 'react';
import CostForm from './CostForm';
import './NewCost.css'

const NewCost = (props) => {

    const [isForm, setisForm] = useState(false)





    const SveCostDataHandler = (inputCostData) => {
        const CostData = {
            ...inputCostData,
            id: Math.random().toString()
        }
        props.onnAddCost(CostData);
        setisForm(false)
    }


    const inputCostDataHandler = () => {
        setisForm(true)
    }

    const cancelCostHandrel = () => {
        setisForm(false)
    }


    return <div className='new-cost'>
        {!isForm && <button onClick={inputCostDataHandler}>Add new consumption</button>}
        {isForm && <CostForm onSveCostData=
            {SveCostDataHandler}
            onCancel={cancelCostHandrel} />}
    </div>

}

export default NewCost;