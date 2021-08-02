import React, { Component,  }  from 'react';

export default class users extends  Component {
    
        state = [
            {
                user_name: 'pearl',
                user_surname: 'Ledwaba',
                user_age: 18,
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
            user_name: 'Sydney',
            user_surname: 'Masebe',
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
        <h1>{this.state.users.map(elements=> <li>
            elements[0] + "\t" + elements[1] + "\t" + this.verifyAge
            </li>)}</h1> 
        </div>

    ];