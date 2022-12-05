<<<<<<< HEAD
'use strict'

export const heroSearch= async (heroName)=>{
    const response=await fetch('https://gateway.marvel.com/v1/public/characters?ts=timestamp&apikey=2cb0e5c92ffe810a3112ed1058a034fe&hash=acf7dddc477b3e9f78917373a3b119b0'
    +heroName);
    const data=await response.json();
    return data;
=======
'use strict'

export const heroSearch= async (heroName)=>{
    const response=await fetch(''+heroName);
    const data=await response.json();
    return data;
>>>>>>> 7e5f2b8e3821b81c8b51aceb4521ee104b5f53b4
}