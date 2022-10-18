import {useState, useEffect} from "react"


//component to render the images and names of all doggos
const PuppyPictures = (props) =>{

    return(
        <div>
            {
                //if props.puppy and props.puppy.length are not empty (false) then map all the puppies to a div with an idx of the puppy  
                    props.puppy && props.puppy.length ? props.puppy.map((individualPuppy, idx) => {
                            console.log(individualPuppy);
                            
                        // apply key ind to element
                        return <div key={idx} className="puppyBox">

                            {/* show puppy name and image */}
                            <p>Puppy name: {individualPuppy.name}</p>
                                <SeeDetails puppy={props}/>
                            <img className="puppyImage" src={individualPuppy.imageUrl}/>
                            </div>
                    }): <div>Not connected</div>
            }
        </div>
        
    )
}




export const SeeDetails = (props) =>{
    // let detailsRevealed = false;

    const [detailsRevealed, setDetailsRevealed] = useState(false);
    return(

        <div>
            <div id="color-buttons-container">
                <button className="seeDetails"onClick={() => setDetailsRevealed == ("true")}>See Details</button>
            { 
                detailsRevealed? <div> details </div>: <div>Reveal details? </div>
            }
            </div>
        </div>

    )
}

export default PuppyPictures;