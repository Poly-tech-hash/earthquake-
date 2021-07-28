import React, {component} from 'react';
import './layout.css';

export default class users extends component {
    //array value
    state = [
        {
            user_name: 'pearl',
            user_surname: 'Ledwaba',
            user_age: 29,
            user_location: 'Lecowza'
        }
       
     
,
     {
        user_name: 'Lebo',
        user_surname: 'Tsebe',
        user_age: 19,
        user_location: 'Polokwane'
     }
,
     {
        user_name: 'Kgaugelo',
        user_surname: 'Khuto',
        user_age: 20,
        user_location: 'Montana'
     }
    ]
}
//render info
render () 
    return [
        <div className="cover">
        <h2> Name | Surname | Age | Location</h2>
        <h1>{this.state.students.map(elements=> <li>
            elements[0] + "\t" + elements[1] + "\t" + this.verifyAge
            </li>)}</h1> 
        </div>

    ];
//function to verify age
verifyAge(user_age)
    let ageMassege="";
//boolean user_age = false;
if (user_age<19) {
    ageMassege=("you are not old enough to date");
}
else{
    ageMassege=("you are old enough to date");
}
return ageMassege;




    



    



 