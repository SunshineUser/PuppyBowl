import React,{useEffect, useState} from "react"


const SeeDetails = (props) =>{
    // let detailsRevealed = false;
            //getter         setter
   
    const [detailsRevealed, setDetailsRevealed] =useState(false);
    
    console.log(props.individualPuppy);

    const clickHandler = () =>{
        //if true make it false, if false make it true
        detailsRevealed ? setDetailsRevealed(false):setDetailsRevealed(true);
    }
    return(

        <div>
            {/* button that shows see details if see details is false and hide details if true(because the details are being shown if true) */}
            <button className="seeDetails" onClick={clickHandler}>{detailsRevealed?"Hide Details":"See Details"}</button>

            { 
            detailsRevealed?
            <div className="puppyDetails">
            <div>Breed: {props.individualPuppy.breed} </div>
            <div>Field Status: {props.individualPuppy.status}</div>
            <div>Id#: {props.individualPuppy.id}</div>
            </div>
            
            :<div>Reveal details? </div>
            }
        </div>

    )
}

export default SeeDetails;