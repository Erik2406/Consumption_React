import './Diagram.css';
import Diagrambar from './Diagrambr';


const Diagram = (props) => {
    const dataSetValue = props.dataSets.map(dataSets => dataSets.value);
    const maxManthCost = Math.max(...dataSetValue);

    return <div className="diagram">
         {props.dataSets.map((dataSet)=> (
                <Diagrambar
                key={dataSet.label}
                value={dataSet.value}
                maxValue={maxManthCost}
                label={dataSet.label} />
         ))            
        }
    </div>
}

export default Diagram;