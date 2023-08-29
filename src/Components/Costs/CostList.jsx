import Costitem from './Costitem';
import './CoostList.css'


const CoostList = (props) => {

    if (props.costs.length === 0) {
        return <h1 className='cost-list__fallback'>
            No expenses were incurred this year
        </h1>
    }

    return <ul className='cost-list'>
        {props.costs.map((cost) => (
            <Costitem
                key={cost.id}
                date={cost.date}
                description={cost.description}
                amount={cost.amount} />
        ))}
    </ul>
}

export default CoostList;