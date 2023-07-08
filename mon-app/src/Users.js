import { Component } from "react";



export default class Users extends Component {
    //http request (serveur) //recuperer API JSON (des données pour tester Free fake API)
    // class alors il m faut un state pour enregistrer les donnes alors ....
    //j'ai un tableau (users) je vasi enregis les donnés (json)dans c tableau avec setstate
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {

        fetch('https://jsonplaceholder.ir/users')
            .then(response => response.json())
            .then(json => this.setState({ users: json }))//les donnes json on va les enregitster dans le tableau users apres on va les affich dans le div
    }
    render() {
        return (
            <div>
                <h1>List users from API </h1>
                {this.state.users.map((user, index) => {
                    return (
                        <p>{user.name}</p>
                    )

                })}
            </div>
        )
    }
}