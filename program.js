var map = L.map('map').setView([4.698373373828598, -74.11625257556045],16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

async function loadpolygon(){
    let myData = await fetch("AlamosNorte.geojson");
    let myPolygon = await myData.json();
    L.geoJSON(myPolygon, 
        {
            style:{
                color:"blue"
            }

        }


    ).addTo(map);

}

loadpolygon();

async function loadpolygon2(){
    let myData = await fetch("arboles_AlamosNorte.geojson");
    let myPolygon2 = await myData.json();
    L.geoJSON(myPolygon2, 
        {
            style:{
                color:"blue"
            }

        }


    ).addTo(map);

}

loadpolygon2();


let btntrees = document.getElementById('btntrees');
btntrees.addEventListener("click",()=> alert("hola"));



