import React, { Component } from 'react'

const UserContext = React.createContext(); //for provider and consumer

export class UserProvider extends Component {
    state = {
        users:
        [
            {
                id:1,
                name: "Serpil Safa",
                department: "IT",
                salary: "1000"
            },
            {
                id:2,
                name: "Leyla Sevimli",
                department: "Aşçı",
                salary: "5000"
            },
            {
                id:3,
                name: "Zulfü Cakiroğlu",
                department: "Sucu",
                salary: "7000"
            }
        ]
    }
    render() {
        return (
         <UserContext.Provider value = {this.state}>
             {this.props.children}
         </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;
export default UserConsumer;
