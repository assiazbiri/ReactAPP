// declaration des variables let et const
let age = 28;
const nom = "karim";



// declaration des Fonctions
//arrow function (flech fonction flecher)

const  sayHello= (a)=>{

    alert("HELLO " +  a);
}
sayHello("ASSIA");



//template string
let  ville ="RABAT";
alert(`je suis de ${ville}`) ;//on met pas le plus pour concatener just le $ et le variable entre parenthese 

//spread operator
let person = {
    nom : "ali",
    age :25
}// le but est de rajouter la ville
// person.ville ="Rabat";
// alert(person.ville); merthode traditionnel
person = {...person , ville :"rabat"}; // c'est ca le Spread on lui dit tu laisse tout (age et nom avec les points et tu rajout la ville)


//Destracturing il nous permet de recup un seul var ou deux cadep dans l'objet ex:
// let personn = {
//     nom : "ali",
//     age :25,
//     ville,
// } //on veut just récupérer l'age c'est tout
// const{nom,age} = personn;
// alert(nom + age); affiche ali 25

//ARRAY Methods : map filter find some every reduce sont bcp utiliser dans react dans ce cas là on va travailler sur un tableau

let notes = [17,18,10,9,8,15]; //on va commencer avec le map

let res = notes.map((value,index,array)=>{
// return value;
// })
// alert(res) //il va affi tout les nombres on peut changer valeur avec index il v affich 0,1,2,3,..
})

//filtre on v affi les notes > de 10
let resfiltre = notes.filter((value)=>{
return value >=10;
})
alert(resfiltre) //17,18,10,15
//find 

resfind= notes.find((value)=>{
return value ===19;

})
alert(resfind)

//every check les notes et cherche si sont > 10 par exemple
resEvery=notes.every((value)=>{
    return value >10;
})
alert(resEvery)// return false resultat boolen soit true ou false

