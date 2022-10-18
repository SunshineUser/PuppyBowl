import React, {useState, useEffect} from "react";
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom";


const HomePage = () => {
    // setter, getter for a puppy array    
    const [puppy, setPuppy] = useState([])
    // fetching all the puppy data with a useEffect hook when the page loads
    useEffect(()=>{
        

        //asynchronous function that runs until it's finished instead of as quickly as possible to load all the API data into the back-end of my website
        async function fetchPuppyData(){
            //try and catch statement that runs with an attempt to fetch the API and sets it to the object "puppy" two awaits to get the api info
            try{
            const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-mt-web-ft/players")
            const info = await response.json();

            //prints all info into the console 
            console.log("I am the translated data from the response", info.data.players);
            console.log(info.data)

            setPuppy(info.data.players)

                //catch error for if it fails to catch the API (the website is down)
            } catch (error){
                console.log(error , "Something went wrong with the API fetching, ")
            }
        }
        fetchPuppyData();
        //this guaruntees that the useEffect is only a single dom rendered function
    }, [])


    //start JSX code here
    return ( 
        <div>
            <div>
                {/* this is a component I'm attempting to use to replace the code on the page for rendering puppy names and images. */}
                <Navbar />

                <Outlet context = {[puppy, setPuppy]}/>
            </div>
        </div>
    )

}


export default HomePage;