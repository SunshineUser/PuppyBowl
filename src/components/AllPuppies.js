import React from "react";
import {useOutletContext} from "react-router-dom";
import SeeDetails from "./SeeDetails"


const AllPuppies=(props)=>{
    const puppies = useOutletContext();
    console.log(puppies);
    return(
        <div>
            <div>
            {
                //if props.puppy and props.puppy.length are not empty (false) then map all the puppies to a div with an idx of the puppy  
                    puppies[0] && puppies[0].length ? puppies[0].map((individualPuppy, idx) => {
                            console.log(individualPuppy);
                            
                        // apply key ind to element
                        return <div key={idx} className="puppyBox">

                            {/* show puppy name and image */}

                            <div>
                            <p>Puppy name: {individualPuppy.name}</p>
                            {/* import information for individual puppies with a button that relays information */}
                            <SeeDetails individualPuppy={individualPuppy}/>
                            </div>

                            <img className="puppyImage" src={individualPuppy.imageUrl}/>
                            </div>
                    }): <div>Not connected</div>
            }
            </div>
        </div>
    )
}

export default AllPuppies
