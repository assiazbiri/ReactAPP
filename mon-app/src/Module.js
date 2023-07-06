//functional components on v les afficg dans App.js avec import
import React, { Component } from 'react'

export default class Module extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div> <ul>
        <li>nom : {this.props.nom}</li>
        <li> coefficient : {this.props.coefficient}</li>
        <li>catégorie : {this.props.catégorie}</li>
        </ul> </div>
    )
  }
}
 // export ca veut dire qu'on peut l'utilisé à l"exterieurs
 //on va tester le propos le componant parent (app) donne des données a  afficher dans le component child(module ) on v accueillir les donnes propos
 // propos contient les donnés (nom catégorie , etc)