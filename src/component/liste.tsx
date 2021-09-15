import React from "react";
import '../css/App.css';
import {Link} from 'react-router-dom'

interface element {
    name:string 
    sary :string
    pictu:string
}
class Liste extends React.Component<element>{
    render(){
        
        return(
            <div className="kote">
                <div className="element">
                    <div className="image">
                        <img src={this.props.sary} alt="un avatar" height="100%" width="100%"/>       
                    </div>
                    <p className="text1">{this.props.name}</p>
                    <Link to="/message" className="bouton"> message </Link>
                 </div>
                 <div className="picture">
                    <img src={this.props.pictu} alt="profil" height="100%" width="100%"/>
                 </div>
            </div>
            
        );
    }
}
export default Liste;