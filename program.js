var map = L.map('map').setView([4.698373373828598, -74.11625257556045],13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

async function loadpolygon(){
    let myData = await fetch("AlamosNorte.geojson");
    let myPolygon = await myData.json();
    l.geoJSON(myPolygon, 
        {
            style:{
                color:"blue"
            }


        }


    ).addTo(map);

}

loadpolygon();