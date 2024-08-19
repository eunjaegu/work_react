import React, { useState } from 'react';

function MyForm() {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '', 
        email: ''
    });

    // const {firstName, lastName, email} = user;
    
    const inputChanged = (event) => { 
        // const {name, value} = event.target;
        setUser({...user, [event.target.name]: event.target.value});
        console.log(user);
    }
   


    const handleSubmit = (event) => {
        alert(`Hello ${user.firstName} ${user.lastName} ${user.email}`);
        event.preventDefault();
    }

        return (
            <form onSubmit={handleSubmit}>
                <label>First name</label>
                <input type = "text" name="firstName" onChange={inputChanged} value={user.firstName}/><br/>

                <label>Last name</label>
                <input type = "text" name="lastName" onChange={inputChanged} value={user.lastName}/><br/>

                <label>Email</label>
                <input type = "email" name="email" onChange={inputChanged} value={user.email}/><br/>
                <input type="submit" value="Press me"/>
            </form>
        );
    
}

export default MyForm;