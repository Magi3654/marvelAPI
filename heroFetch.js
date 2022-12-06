
'use strict'

export const heroSearch= async (heroName)=>{
    const response=await fetch(`https://gateway.marvel.com/v1/public/characters?name=${heroName}&ts=timestamp&apikey=2cb0e5c92ffe810a3112ed1058a034fe&hash=d949edeb36153c3c119f6f0c47e859c3`);
    const data=await response.json();
	console.log(data)
    return data;
}
