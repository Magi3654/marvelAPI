
'use strict'

import {searchHero} from "./heroFetch.js";


async function showHero(){
    const heroes=document.getElementById('heroes');
    const search=document.getElementById('search').value;
    const heroesCatalog= await assembleHeroes(search);
    heroesCatalog.data.recipes.map(hero=>{
        console.log(hero.name);

        const heroName=document.createElement('p');
        heroName.style.fontWeight="bold";
        heroName.style.fontSize="2rem";
        heroName.textContent=hero.name;

        const imgHero=document.createElement ('img');
        imgHero.src=hero.data.results.thumbnail;
        imgHero.alt=hero.name;
        imgHero.style="width:10rem; height:10rem; objectFit=cover; objectPosittion:center";
        
        const id=document.createElement('p');
        id.style.fontSize="2rem";
        id.textContent="Id"+hero.id;
        

        const infoSection=document.createElement("div");
        infoSection.appendChild(heroName);
        infoSection.appendChild(id);

        heroes.append(imgHero);
        heroes.append(infoSection);

        heroes.style.border="1rem solid #f3f4f3";
        heroes.style.borderRadius="1.5rem"

    }) 
}

async function assembleHeroes(data){
    return await searchHero(data.toLowerCase());
}

async function cleanData(){
    search.value="";
    document.getElementById('heroes').innerHTML="";
    heroes.style.border="1rem";

}

const heroesCatalog=document.getElementById('app-header-search');

const buscar=document.createElement('input');
buscar.id="search";
buscar.style="width:100rem;";
buscar.placeholder="IronMan...";

const button=document.createElement('button');
button.textContent="Assemble";
button.onclick=showHero;
button.style="font-size:1.2rem;width:10%; height:2rem;margin:2rem;border-radius:1.2rem;background-color:#f3f4f3;font-weight:bolder;padding:1.2rem 2rem;";

const clean=document.createElement('button');
clean.textContent="Swipe";
clean.id="Swipe";
clean.onclick=cleanData;
clean.style="font-size:1.2rem;width:10%; height:2rem;margin:2rem;border-radius:1.2rem;background-color:#f3f4f3;font-weight:bolder;padding:1.2rem 2rem;";


heroesCatalog.append(buscar);
heroesCatalog.append(button);
heroesCatalog.append(clean);

