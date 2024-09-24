import React, { useState, useEffect } from "react";
import Card from "./card";

const SecondsCounter = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")

    useEffect(() => {
        let intervalID = setInterval(() => {
            setCount(count +1)
        }, 1000)
        return () =>{
            clearInterval(intervalID)
        }
    }, [count])

    const space = count.toString().padStart(6, "0").split("")

    return (
        <div className="SecondsCounter d-flex gap-3 align-items-center justify-content-center" style={{height:'190px', background:'gray'}}>
           {text}
            <Card/>
            {space.map((value, index)=> {
            return <Card value={value} key={index} heigth="9vw" width="10%" /> 
            })}
        </div>
    );
};
export default SecondsCounter;

/*let Contador = () => {
    const [Counter, setCounter] = useState(0)
let SumarCounter = () => {
    if(Counter<10){
    setCounter(Counter+1)
} else{
    setCounter(0)
}   
}
let Contrato = () => {
    alert('hola a todos! tengo mucho sueño')
}
    return (
        <>
            <div className="card">
                <div className="card-body" onClick={Contrato}>
                    Click in here!
                </div>
                <button className="btn btn-primary w-25" onClick={SumarCounter}>tocame aqui</button>
                <p>Counter:{Counter}</p>
            </div>
        </>
    )
};
 export default Contador;*/