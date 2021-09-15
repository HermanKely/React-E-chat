import React from "react";
import '../css/App.css'
import Liste from "./liste";
import { Link } from "react-router-dom";
import { Actif } from "./actif";
import sary from '../image/img_avatar1.png'
import sary1 from '../image/img_avatar2.png'
import sary2 from '../image/img_avatar3.png'
import sary3 from '../image/img_avatar4.png'
import sary4 from '../image/img_avatar5.png'
import pic from '../pict/105487.jpg'
import pic1 from '../pict/211641.jpg'
import pic2 from '../pict/391864.jpg'
import pic3 from '../pict/422643.jpg'
import pic4 from '../pict/458495.jpg'
const Premier = ()=>{
        return(
            <div className="contenue">
                <nav className="navbar">
                    <h1 className="text">Acceuil</h1>
                </nav>
                <div className="liste">
                    <div className="actif">
                        <p style={{color:"white" , textAlign:"center"}}>Liste des actifs</p>
                        <Link to="/Message"><Actif sary={sary} nom="herman"/></Link>
                        <Link to="/Message"><Actif sary={sary1} nom="Tolojanahary"/></Link>
                        <Link to="/Message"><Actif sary={sary2} nom="Fenitra"/></Link>
                        <Link to="/Message"><Actif sary={sary3} nom="Miara"/></Link>
                        <Link to="/Message"><Actif sary={sary4} nom="Hitler"/></Link>
                    </div>
                    <div className="demos"> 
                        <Liste name="Herman"  sary={sary} pictu={pic}/>
                        <Liste name="Fitiavana"  sary={sary1} pictu={pic1}/>
                        <Liste name="Fenitra"  sary={sary2} pictu={pic2}/>
                        <Liste name="Hitler"  sary={sary3} pictu={pic3}/>
                        <Liste name="Miara" sary={sary4} pictu={pic4}/>
                    </div>
                    
                </div>
                <div className="foot">
                    <p>RAZANAKOLONA Anjara Herman IGGLI3 n°5</p>
                </div>
            </div>
        );
};


export default Premier;