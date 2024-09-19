import React, { useEffect, useState } from "react";

//include images into your bundle
import PropTypes from "prop-types";
import Card from "./card.jsx";


const SecondsCounter = (props) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let intervalID = setInterval(() => {
            setCount(count +1)
        },1000)
        return () =>{
            clearInterval(intervalID)
        }
    }, [count])

    const space = count.toString().padStart(6, "0").split("")

    return (
        <div className="SecondsCounter d-flex gap-3 align-items-center justify-content-center" style={{height:'190px', background:'gray'}}>
            <Card/>
            {space.map((value, index)=> {
                return <Card value={value} key={index} heigth="9vw" width="10%" /> 

            })}
        </div>
    );
};


SecondsCounter.propTypes = {

}

export default SecondsCounter;