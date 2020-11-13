import React, { Component } from 'react'
import UserConsumer from '../context';
import User from './User';

 class Users extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    value =>{
                        const {users} = value;
                        return(
                            <div>
                                {
                                    users.map(user=>{
                                        return (
                                            <User 
                                                key = {user.id}
                                                name = {user.name}
                                                department = {user.department}
                                                salary = {user.salary}
                                            />
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}

export default Users;
