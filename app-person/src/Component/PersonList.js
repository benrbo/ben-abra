
import Person from './Person';

const PersonList = (props) => {
    const {title} = props;
    return (
        <div>
            <h1>{title}</h1>
            <Person name="liad" city="Netanya" gender="Male"/>
            <Person name="sapir" city="Or-Yeuda" gender="Famle"/>
            <Person name="yosef" city="Dimona" gender="Male"/>
        </div>
    )
}

export default PersonList;