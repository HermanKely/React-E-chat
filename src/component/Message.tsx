import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import { Actif } from './actif';
import sary from '../image/img_avatar1.png'
import sary1 from '../image/img_avatar2.png'
import sary2 from '../image/img_avatar3.png'
import '../css/message.css'
const Message:React.FC =()=>{
        const [value,setValue] = useState<string>("");
        const [values,setValues] = useState<string[]>([]);
        return(
            <div className="contenue">
                <nav className="navbar">
                    <h1 className="text">e-chat</h1>
                </nav>
                <div className="grand">
                    <div className="Actife">
                        <p style={{color:"white",textAlign:"center"}}>Liste des actifs</p>
                        <Link to="/Message" className="like"><Actif sary={sary} nom="herman"/></Link>
                        <Link to="/Message" className="like"><Actif sary={sary1} nom="Tolojanahary"/></Link>
                        <Link to="/Message" className="like"><Actif sary={sary2} nom="Miara"/></Link>
                        <Link to="/Message" className="like"><Actif sary={sary} nom="Fenitra"/></Link>
                        <Link to="/Message" className="like"><Actif sary={sary1} nom="Tolojanahary"/></Link>
                    </div>
                    <div className="message">
                        <div id="message1">
                            <div id="allmess2">Soratana ery ambany raha amaly</div>
                        </div>
                        <div id="message2">
                                {values.map((value)=>(
                                    <div id="allmess" key={value}>{value}</div>
                                ))}
                        </div>
                        <div className="input">
                            <input type="text" className="textin" id="message" placeholder="ecrire ici votre message ..." 
                            onChange={(e) =>{setValue(e.target.value)}}
                            />
                            <input type="submit"  value="envoyer" className="envoyer" id="envoyer" 
                            onClick={()=>{setValues([... values,value]);}}
                            />
                        </div> 
                    </div>
                </div>
                
                      
            </div>
        );
}


export default Message;