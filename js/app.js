//random testing
var myName = "kp";
console.log(myName);
//loadJSON();
//I want to use a json file but dont understand how to get information from the file

//places array
var place = [{
    name: 'Econ River Wilderness Area',
    address: "3795 Old Lockwood Rd, Oviedo, FL 32765",
    latlng: {
        lat: 28.6133534,
        lng: -81.1736201
    }
}, {
    name: "East Orange Park",
    address: "12080 E Colonial Dr, Orlando, FL 32828",
    latlng: {
        lat: 28.5626999,
        lng: -81.20196190000001
    }
},{
  name: "UCF Arboretum",
  address: "110 Apollo Cir, Orlando, FL 32816",
  latlng: {
      lat: 28.6005403,
      lng:-81.12381199999999
  }

},{
  name: "Lake Mills Park",
  address: "1301 Tropical Ave, Chuluota, FL 32766",
  latlng: {
      lat: 28.63136,
      lng:-81.19697300000001
  }
},{
  name: "The Pop Parlour",
  address: "4214 E Plaza Dr, Orlando, FL 32816",
  latlng: {
      lat: 28.6068833,
      lng:-81.19686489999998
  }
}
];


//initMap function
window.initMap = () => {

    let loc = {
        lat: 28.5626999,
        lng: -81.20196190000001
    };
    self.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: loc,
        scrollwheel: true
    });
    //for the markers/infowindow of each place
    place.forEach(function(e){
    //makes all names a header
      var name = "<h1>"+e.name+"</h1>";

        var marker = new google.maps.Marker({
            position: e.latlng,
            map: map
        })
        var infowindow = new google.maps.InfoWindow({
            content: name + e.address
        });

        marker.addListener('click', function() {
            infowindow.open(map,marker);

console.log(name.length);
        });
        //for add the list to the sidebar
        //for each in list add to li in html
        var ul = document.getElementById("place_list");
        var list = document.createElement("li");
        var t = document.createTextNode(e.name);
        list.appendChild(t);
        ul.appendChild(list);

    });

}
