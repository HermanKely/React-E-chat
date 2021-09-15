import React from "react";
import '../css/login.css'
import { Link } from "react-router-dom";
const Login:React.FC =()=>{
    return(
        <div>
            <div className="contenues">
                <div className="login">
                    <h1 style={{textAlign:"center"}}>Login</h1>
                    <div className="form">
                        <div className="text"> 
                            <label htmlFor="nom">Nom  </label>
                        </div>
                        <div className="inpute"> 
                            <input type="text" name="nom" />
                        </div>
                        <div className="text"> 
                            <label htmlFor="nom">Mot de passe  </label>
                        </div>
                        <div className="inpute"> 
                            <input type="password" name="nom" />
                        </div>
                        <Link to="/Premier"><input type="submit" value="connexion" /></Link>
                        <div className="inscrire">
                            <Link to="/inscription"><p >S'inscrire</p></Link>
                        </div>
                    
                    </div>
                </div>
                
            </div>
            <div className="foot">
                    <p>RAZANAKOLONA Anjara Herman IGGLI3 n°5</p>
                </div>
        </div>
        
    );
}
export {Login}