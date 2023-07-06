// de type class
import React, { Component } from "react";


//extends component c veut dire quil hérite d component et tjr return dans render
//les données ont enregistrer dans state pour afficher les données faut que j'accede a state avec this.state.nom
//on v creer une fonction hors le constructeur Changestate on veut changer la note 
class Etudiant extends Component {
    constructor(propos){

        super(propos);
        this.state ={
            nom :'ASSIA',
            note :17
            
        }
    }
 changeState =()=>{
    this.setState({note :18})

}
    render(){
        return(
        <div>
            <h1>Hello {this.state.nom}</h1>
            <p>la note est : {this.state.note}</p>
            <button onClick={this.changeState}>CHanger</button>  
        </div>
        )
    }
}
export default Etudiant;