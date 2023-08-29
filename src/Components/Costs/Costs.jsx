import './Costs.css';
import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import React, { useState } from 'react';
import CoostList from './CostList';
import CostsDiagram from './CostsDiagram';



const Costs = (props) => {
    const [selectedYear, setselectedYear] = useState('2023')

    const yearChangeHandler = (year) => {
        setselectedYear(year)
    }

    const filteredCosts = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() ===
            selectedYear
    }
    );

    return (
        <div>
            <Card className='costs'>
                <CostsFilter year={selectedYear}
                    onChangeYear={yearChangeHandler} />
                    <CostsDiagram costs={filteredCosts} />                    
                <CoostList costs={filteredCosts} />
            </Card>
        </div>
    )
}

export default Costs;