import './Parson.css';

const Parson = (props) => {
    return (
        <div className="Parson">
            <h1>{props.name}</h1>
            <p>{props.city}</p>
            <p>{props.gender}</p>
        </div>
    )
}

export default Parson;