console.log("map does't show up becaues api key is't valid anymore after free trial ended")

let map;



function initMap() {

    //map option
   var options = {
    center: { lat: 41.716667, lng: 44.783333 },
    zoom:13
   }

   // maot itself

  map = new google.maps.Map(document.getElementById("map"), options);

  // marker

  const marker = new google.maps.Marker ({
      position: {lat:41.714809, lng: 44.777676},
      map:map
  });

  // info on mouseover
  const detailWindow = new google.maps.InfoWindow({
      content: `<h2>Happy End</h2>`
  })

  marker.addListener("mouseover", () => {
      detailWindow.open(map, marker);
  })

}