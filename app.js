'use strict'

import {heroSearch} from "./heroFetch.js";


async function showHero(){
    const heroes=document.getElementById('heroes');
    const search=document.getElementById('search').value;
    const heroesCatalog= await assembleHeroes(search);
    heroesCatalog.data.results.map(hero=>{
        console.log(hero.name);

        const heroName=document.createElement('p');
        heroName.style.fontWeight="bold";
        heroName.style.fontSize="2rem";
        heroName.textContent=hero.name;

        const imgHero=document.createElement ('img');
        imgHero.src=`${hero.thumbnail.path}.${hero.thumbnail.extension}`;
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

        heroes.style.border="0.2rem solid #f3f4f3";
        heroes.style.borderRadius="1.5rem"

    }) 
}

async function assembleHeroes(data){
    return await heroSearch(data.toLowerCase());
}

async function cleanData(){
    search.value="";
    document.getElementById('heroes').innerHTML="";
    heroes.style.border="1rem";

}

const heroesCatalog=document.getElementById('heroesCatalog');

const buscar=document.createElement('input');
buscar.id="search";
buscar.style="width:auto;";
buscar.placeholder=" Ej. Iron Man";

const button=document.createElement('button');
button.textContent="Assemble";
button.onclick=showHero;
button.className="assemble";

const clean=document.createElement('button');
clean.textContent="Swipe";
clean.id="Swipe";
clean.onclick=cleanData;
clean.className="swipe";

heroesCatalog.append(buscar);
heroesCatalog.append(button);
heroesCatalog.append(clean);

