

const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWhereZoom: false,
    zoomControl: false
}

const map = L.map('mapid', options).setView([-26.0714523,-48.6177776], 15);

L
.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})



// create and add marker
L
.marker([-26.0714523,-48.6177776], { icon })
.addTo(map)


/* image gallery */

function selectImage(event) {
    const button = event.currentTarget

    // remover as classes actives
    const buttons = document.querySelector('images button')
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    // selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o container
    imageContainer.src = image.src

    // adicionar .active
    button.classList.add('active')
}
