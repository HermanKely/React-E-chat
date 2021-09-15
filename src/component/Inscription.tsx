import React from "react";
import '../css/inscription.css'
import { Link } from "react-router-dom";
const Inscription:React.FC =()=>{
    return(
        <div className="contenuesi">
            <div className="logini">
                <h1 style={{textAlign:"center"}}>Inscription</h1>
                <div className="form">
                    <div className="text"> 
                        <label htmlFor="nom">Nom  </label>
                    </div>
                    <div className="inpute"> 
                        <input type="text" name="nom" />
                    </div>
                    <div className="text"> 
                        <label htmlFor="nom">Prenom  </label>
                    </div>
                    <div className="inpute"> 
                        <input type="text" name="Prenom" />
                    </div>
                    <div className="text"> 
                        <label htmlFor="nom">Mot de passe  </label>
                    </div>
                    <div className="inpute"> 
                        <input type="password" name="nom" />
                    </div>
                    <div className="text"> 
                        <label htmlFor="nom">Confirmer le mot de passe  </label>
                    </div>
                    <div className="inpute"> 
                        <input type="password" name="nom" />
                    </div>
                    <Link to="/"><input type="submit" value="S'inscrire" /></Link>
                </div>
            </div>

        </div>
    );
}
export {Inscription}