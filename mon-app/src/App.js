
import './App.css';
import Etudiant from './Etudiant';
import Module from  './Module';

function App() {
  //declaration variable
  /// on va afficher le nom a coter d hello {nom}
  // let note = 8;  
  // let msg ="" ;
  //une methode 
  // if(note >= 10){
  //   msg ="Admis"
  // }else{
  //   msg ="Nom admis"
  // }{msg} pour l'afficher
  return (
    <div className="App">
      <header className="App-header">

        <h1>Hello  Functional components</h1>
        <Module nom ="site statique" coefficient ="3" catégorie="web"   />
        <Module nom ="Python" coefficient ="2" catégorie="programmation"   />
        <Module nom ="ANdroid" coefficient ="1" catégorie="mobile"   />
        <hr></hr>
        <Etudiant/>
        <img src="logo192.png" />
      </header>
    </div>
  );
}

export default App;
