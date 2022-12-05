'use strict'

export const heroSearch= async (heroName)=>{
    const response=await fetch(''+heroName);
    const data=await response.json();
    return data;
}