import propertiesRent from "./data/propertiesRent.js";
import propertiesSale from "./data/propertiesSale.js";

const showProperties = (properties, containerId) => {
const container = document.getElementById(containerId)

const propertiesLimited = properties.slice(0,3)

propertiesLimited.forEach((property) =>{

const card = document.createElement('div')
card.className= 'child';  

const cardContent =`
<div class="card">
<img src="${property.src}" alt="${property.name}">
<div class="card-body">
<h5 class="card-tittle">${property.name}</h5>
<p class="description">${property.description}</p>
<p class="address"><i class="fa-solid fa-location-pin"></i> ${property.address}</p>
<p class="utilities"><i class="fa-solid fa-bed"></i> ${property.rooms} habitaciones <i class="fa-solid fa-bath"></i> ${property.bath} baños</p>
<p class="price">$${property.price.toLocaleString('es-CL')}</p>
<p class="${property.smoke ? 'text-success' : 'text-danger'}">
<i class="fas ${property.smoke ? 'fa-solid fa-smoking' : 'fa-solid fa-ban-smoking'}"></i>
 ${property.smoke ? 'Permitido fumar' : 'No se permite fumar' }</p>
<p class="${property.pets ? 'text-success' : 'text-danger'}">
<i class="fas ${property.pets ? 'fa-solid fa-dog' : 'fa-solid fa-ban'}"></i> ${property.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}</p>
</div>
</div>
`
card.innerHTML = cardContent
container.appendChild(card)

})}

showProperties(propertiesSale, 'propertiesForSaleContainer')
showProperties(propertiesRent, 'propertiesForRentContainer')