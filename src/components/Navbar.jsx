
import React from "react";

const Nav = () => {
    return <>
        <div style = {{display:"flex",background:"black",height:"50px",width:"80%",margin:"auto",justifyContent:"space-evenly"}}>
            <div style = {{color:"white",height:"50px",width:"30%"}}>
                <p>LOGOBAKERY</p>
            </div>
            <div style = {{display:"flex",height:"50px",width:"30%",color:"white",justifyContent:"space-evenly"}}>
                <p>Service</p>
                <p>Project</p>
                <p>About</p>
            </div>
            <div style={{height:"50px",width:"30%",margin:"auto"}}>
                <button style = {{backgroundColor:"blue",borderRadius:"30px",height:"30px",width:"80px",textAlign:"center",color:"white",marginTop:"10px"}}>Contact</button>
            </div>
        </div>
    </>
}

export {Nav}