'use strict'

import {heroSearch} from "./heroFetch.js";


async function showHero(){
    const heroes=document.getElementById('heroes');
    const search=document.getElementById('search').value;
    const heroesCatalog= await assembleHeroes(search);
    heroesCatalog.data.results.map(hero=>{
        console.log(hero);

		//Front name
        const heroName=document.createElement('p');
        heroName.style.fontWeight="bold";
        heroName.style.fontSize="2rem";
        heroName.textContent=hero.name;

		//Front image
        const imgHero=document.createElement ('img');
        imgHero.src=`${hero.thumbnail.path}.${hero.thumbnail.extension}`;
        imgHero.alt=hero.name;
        imgHero.style="width:10rem; height:10rem; objectFit=cover; objectPosittion:center;";
		imgHero.className = "heroImg"

        //Front id
        const id=document.createElement('p');
        id.style.fontSize="2rem";
        id.textContent="Id: "+hero.id;

		const comics=document.createElement('p');
		comics.textContent=`Comics: ${hero.comics.available}`

		const series=document.createElement('p');
		series.textContent=`most significant comic:  ${hero.comics.items[0].name}`

        //Front info container
        const infoSection=document.createElement("div");
		infoSection.className="infoSection"
        infoSection.appendChild(heroName);
        infoSection.appendChild(id);
		infoSection.append(comics)
		infoSection.append(series)
		

		//Front section
		const frontSection = document.createElement("div");
		frontSection.id = "frontSection"
		frontSection.className = "frontSection"
        frontSection.append(imgHero);
        frontSection.append(infoSection);

		//Back title
		const title = document.createElement("h2");
		title.textContent = hero.name;
		title.className = "heroTitle"

		// Back description
		const description = document.createElement("p");
		description.textContent = hero.description;
		description.className = "description"

		//Back section 
		const backSection = document.createElement("div");
		backSection.id = "backSection"
		backSection.className = "backSection"

		backSection.append(title)
		backSection.append(description)

		const cardContainer = document.createElement("div");
		cardContainer.id = "container"
		cardContainer.className = "container"
		cardContainer.append(frontSection)
		cardContainer.append(backSection)

		heroes.append(cardContainer)
        heroes.style.border="0.7rem solid #f3f4f3";
        heroes.style.borderRadius="1.5rem"
        heroes.style="padding:1.5rem;"

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


