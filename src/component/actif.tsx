import React from "react";
import '../css/actif.css'
interface profil{
    nom:string;
    sary:string;
}
const Actif =({nom,sary}:profil)=>{
    return(
        <div className="cont">
                <img className="images" src={sary} alt="photo" height="50px" width="50px"/>
                <p style={{color:"white"}}> {nom} </p>
            
            <p className="point"> </p>
        </div>
    );
}
export {Actif}