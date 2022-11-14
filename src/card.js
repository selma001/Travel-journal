import localogo from "./images/location-pin.svg"

function Card (props){

    let selma 
    if (props.test===0) {
        selma=true
    }

    return(
        <div className="container">
            <div className="card">
            <img src={props.coverImg} className="cover"/>
            <div className="texts">
                <ul className="list">
                   <li ><img src={localogo} className="local"/></li>
                   <li>{props.location}</li>
                   <li> <span>{props.mapsLink} </span></li>
                </ul>
                <h1> {props.title} </h1>
                <p className="date"> {props.startDate} - {props.endDate} </p>
                <p> {props.description} </p>
            </div>
           </div>
           {selma && <hr /> }
        </div>
        
        
    )
}

export default Card