// Renders the map on the page
const accessToken = 'pk.eyJ1IjoianVsaWV0LWdlb3JnZSIsImEiOiJjazhnOXNzN3gwMXoyM2RxbjNzbXdrYXJjIn0.a653svYKdCmg2wkjY5HxVg';
var map = L.map('map').setView([30, -40], 3);

// Add tiles from the Mapbox Static Tiles API
// Tiles are 512x512 pixels and are offset by 1 zoom level
L.tileLayer(
    'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=' + accessToken, {
        tileSize: 512, zoomOffset: -1,
        attribution: '© <a href="https://apps.mapbox.com/feedback/" SameSite=None;Secure >Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function loadCountryMarkers() {
    // LOAD MAP MARKERS after Summary Data is received
    const blueIcon = new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    marker1 = L.marker([39.0119, -98.4842], { icon: blueIcon }).addTo(map).on('click', countryClick); // US
        marker1.key = "united-states";
    marker2 = L.marker([41.9028, 12.4964], { icon: blueIcon }).addTo(map).on('click', countryClick); // Italy
        marker2.key = "italy";
    marker3 = L.marker([19.4326, -99.1332], {icon: blueIcon}).addTo(map).on('click', countryClick); // Mexico
        marker3.key = "mexico";
    marker4 = L.marker([35.8617, 104.1954], { icon: blueIcon }).addTo(map).on('click', countryClick); //China
        marker4.key = "china";
    marker5 = L.marker([51.1657, 10.4515], { icon: blueIcon }).addTo(map).on('click', countryClick); // Germany
        marker5.key = "germany";
    marker6 = L.marker([46.2276, 2.2137], { icon: blueIcon }).addTo(map).on('click', countryClick); // France
        marker6.key = "france";
    marker7 = L.marker([56.1304, -106.3468], { icon: blueIcon }).addTo(map).on('click', countryClick); // Canada
        marker7.key = "canada";
    marker8 = L.marker([55.3781, -3.4360], { icon: blueIcon }).addTo(map).on('click', countryClick); // United Kingdom
        marker8.key = "united-kingdom";
    marker9 = L.marker([46.8182, 8.2275], { icon: blueIcon }).addTo(map).on('click', countryClick); // Switzerland
        marker9.key = "switzerland";
    marker10 = L.marker([50.5039, 4.4699], { icon: blueIcon }).addTo(map).on('click', countryClick); // Belgium
        marker10.key = "belgium";
    marker11 = L.marker([-25.2744, 133.7751], { icon: blueIcon }).addTo(map).on('click', countryClick); // Australia
        marker11.key = "australia"
    marker12 = L.marker([-13.8267, -47.9218], { icon: blueIcon }).addTo(map).on('click', countryClick); // Brazil
        marker12.key = "brazil"
    marker13 = L.marker([40.4637, -3.7492], { icon: blueIcon }).addTo(map).on('click', countryClick); // Spain
        marker13.key = "spain"
    marker14 = L.marker([55.7558, 37.6173], { icon: blueIcon }).addTo(map).on('click', countryClick); // Russia
        marker14.key = "russia"
    marker15 = L.marker([20.5937, 78.9629], { icon: blueIcon }).addTo(map).on('click', countryClick); // India
        marker15.key = "india"
}

function loadStateMarkers() {
    // MARKERS placed on the states to pull up the US Totals
    const redIcon = new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [15, 25],
        iconAnchor: [10, 41],
        popupAnchor: [1, -34],
        shadowSize: [25, 25]
      });
    const redCircle = new L.circle({
        color: 'red',
        weight: 0,
        fillColor:'red',
        fillOpacity: 0.5,
        radius: 100000
    });
    const wisconsin = L.marker([44.00, -89.50], {icon: redIcon}).addTo(map).on('click', onClick);
          wisconsin.key = "WI";
    const westVirginia = L.marker([38.00, -80.75], {icon: redIcon}).addTo(map).on('click', onClick);
          westVirginia.key = "WV";
    const vermont = L.marker([43.75, -72.75], {icon: redIcon}).addTo(map).on('click', onClick);
          vermont.key = "VT";
    const texas = L.marker([31.25, -99.00], {icon: redIcon}).addTo(map).on('click', onClick);
          texas.key = "TX";
    const southdakota = L.marker([43.50, -100], {icon: redIcon}).addTo(map).on('click', onClick);
          southdakota.key = "SD";
    const rhodeIsland = L.marker([41.50, -71.25], {icon: redIcon}).addTo(map).on('click', onClick);
          rhodeIsland.key = "RI";
    const oregon = L.marker([43.50, -120.50], {icon: redIcon}).addTo(map).on('click', onClick);
          oregon.key = "OR";
    const newyork = L.marker([42.50, -75.20], {icon: redIcon}).addTo(map).on('click', onClick);
          newyork.key = "NY";
    const newHampshire = L.marker([43.50, -71.50], {icon: redIcon}).addTo(map).on('click', onClick);
          newHampshire.key = "NH";
    const nebraska = L.marker([41.50, -100.00], {icon: redIcon}).addTo(map).on('click', onClick);
          nebraska.key = "NE";
    const kansas = L.marker([36.75, -98.50], {icon: redIcon}).addTo(map).on('click', onClick);
          kansas.key = "KS";
    const mississippi = L.marker([32.00, -90.00], {icon: redIcon}).addTo(map).on('click', onClick);
          mississippi.key = "MS";
    const illinois = L.marker([40.00, -89.00], {icon: redIcon}).addTo(map).on('click', onClick);
          illinois.key = "IL";
    const delaware = L.marker([38.50, -75.50], {icon: redIcon}).addTo(map).on('click', onClick);
          delaware.key = "DE";
    const connecticut = L.marker([41.40, -72.69], {icon: redIcon}).addTo(map).on('click', onClick);
          connecticut.key = "CT";
    const arkansas = L.marker([34.50, -92.19], {icon: redIcon}).addTo(map).on('click', onClick);
          arkansas.key = "AR";
    const indiana = L.marker([39.25, -86.12], {icon: redIcon}).addTo(map).on('click', onClick);
          indiana.key = "IN";
    const missouri = L.marker([37.57, -92.60], {icon: redIcon}).addTo(map).on('click', onClick);
          missouri.key = "MO";
    const florida = L.marker([27.99, -81.76], {icon: redIcon}).addTo(map).on('click', onClick);
          florida.key = "FL";
    const nevada = L.marker([39.25, -117.00], {icon: redIcon}).addTo(map).on('click', onClick);
          nevada.key = "NV";
    const maine = L.marker([45.00, -68.97], {icon: redIcon}).addTo(map).on('click', onClick);
          maine.key = "ME";
    const michigan = L.marker([42.78, -84.50], {icon: redIcon}).addTo(map).on('click', onClick);
          michigan.key = "MI";
    const georgia = L.marker([32.00, -83.44], {icon: redIcon}).addTo(map).on('click', onClick);
          georgia.key = "GA";
    const hawaii = L.marker([19.74, -155.84], {icon: redIcon}).addTo(map).on('click', onClick);
          hawaii.key = "HI";
    const alaska = L.marker([66.16, -153.36], {icon: redIcon}).addTo(map).on('click', onClick);
          alaska.key = "AK";
    const tennessee = L.marker([35.00, -86.66], {icon: redIcon}).addTo(map).on('click', onClick);
          tennessee.key = "TN";
    const virgina = L.marker([37.25, -78.25], {icon: redIcon}).addTo(map).on('click', onClick);
          virgina.key = "VA";
    const newjersey = L.marker([39.50, -74.30], {icon: redIcon}).addTo(map).on('click', onClick);
          newjersey.key = "NJ";
    const kentucky = L.marker([36.83, -85.00], {icon: redIcon}).addTo(map).on('click', onClick);
          kentucky.key = "KY";
    const northdakota = L.marker([46.05, -100.43], {icon: redIcon}).addTo(map).on('click', onClick);
          northdakota.key = "ND";
    const minnesota = L.marker([45.39, -94.63], {icon: redIcon}).addTo(map).on('click', onClick);
          minnesota.key = "MN";
    const oklahoma = L.marker([35.08, -96.92], {icon: redIcon}).addTo(map).on('click', onClick);
          oklahoma.key = "OK";
    const montana = L.marker([46.96, -109.53], {icon: redIcon}).addTo(map).on('click', onClick);
          montana.key = "MT";
    const washington = L.marker([47.00, -120.74], {icon: redIcon}).addTo(map).on('click', onClick);
          washington.key = "WA";
    const utah = L.marker([38.41, -111.30], {icon: redIcon}).addTo(map).on('click', onClick);
          utah.key = "UT";
    const colorado = L.marker([38.11, -105.35], {icon: redIcon}).addTo(map).on('click', onClick);
          colorado.key = "CO";
    const ohio = L.marker([38.75, -82.99], {icon: redIcon}).addTo(map).on('click', onClick);
          ohio.key = "OH";
    const alabama = L.marker([32.31, -86.90], {icon: redIcon}).addTo(map).on('click', onClick);
          alabama.key = "AL";
    const iowa = L.marker([41.03, -93.58], {icon: redIcon}).addTo(map).on('click', onClick);
          iowa.key = "IA";
    const newmexico = L.marker([34.00, -106.01], {icon: redIcon}).addTo(map).on('click', onClick);
          newmexico.key = "NM";
    const southcarolina = L.marker([33.00, -81.00], {icon: redIcon}).addTo(map).on('click', onClick);
          southcarolina.key = "SC";
    const pennsylvania = L.marker([40.20, -77.75], {icon: redIcon}).addTo(map).on('click', onClick);
          pennsylvania.key = "PA";
    const arizona = L.marker([34.04, -111.09], {icon: redIcon}).addTo(map).on('click', onClick);
          arizona.key = "AZ";
    const maryland = L.marker([39.04, -76.64], {icon: redIcon}).addTo(map).on('click', onClick);
          maryland.key = "MD";
    const massachusetts = L.marker([42.00, -72.00], {icon: redIcon}).addTo(map).on('click', onClick);
          massachusetts.key = "MA";
    const california = L.marker([36.00, -120.75], {icon: redIcon}).addTo(map).on('click', onClick);
          california.key = "CA";
    const idaho = L.marker([44.06, -114.74], {icon: redIcon}).addTo(map).on('click', onClick);
          idaho.key = "ID";
    const wyoming = L.marker([43.07, -107.29], {icon: redIcon}).addTo(map).on('click', onClick);
          wyoming.key = "WY";
    const northcarolina = L.marker([35.00, -80.00], {icon: redIcon}).addTo(map).on('click', onClick);
          northcarolina.key = "NC";
    const louisiana = L.marker([30.39, -92.32], {icon: redIcon}).addTo(map).on('click', onClick);
          louisiana.key = "LA";
}

function renderStateChart(stateLabel, datesArr, countsArr) {

    // renders the chart onto the DOM
    var ctx = document.getElementById('myChart');
    $('#map').attr("style", "opacity: 0.5; ");
    ctx.setAttribute("style", "display:flex;");

    var labelsArr = datesArr;
    var dataArr = countsArr;
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labelsArr,
            datasets: [{
                label: '# of Cases for: ' + stateLabel,
                data: dataArr,
                backgroundColor: "rgba(6, 30, 54, 0.801)",
                borderColor: [],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    // console.log(myChart);
}

function chartPrep(state) {
    // Create two arrays to pass to renderStateChart
    // clear the arrays before processing another state in the same session
    let datesArr = [];
    let countsArr = [];

    const stateStats = confirmedStats[state];
    console.log(stateStats);

    // prep and aggregate dates
    // Prep the dates from the Confirmed Cases Array
    // setting variables for two arrays
    let day = "";
    let count = 0;
    
    // iterate through each object
    stateStats.forEach((obj, index) => {
        // if this is the first object set the day and count
        if(index === 0) {
            day = obj.date;
            count = obj.confirmed;
        }
        else if(day === obj.date){
            count += +obj.confirmed;
        } else {
            // use callback to ensure the data is pushed before reseting day and count
            function pushInfo(cb){
            datesArr.push(day);
            countsArr.push(count);
            cb();
            }

            pushInfo(function(){
                day = obj.date;
                count = obj.confirmed;
            //     console.log(`Reset Day to ${day}`)
            //     console.log(`Reset Count to ${count}`)
            });
        }
    });

    // console.log(datesArr);
    // console.log(countsArr);
    renderStateChart(state, datesArr, countsArr);
}

function getHealthNews(location) {
    let api = "ded0283d522fb9eaf85a008be625e5fc"

    fetch('https://gnews.io/api/v3/search?q=covid19&country=' + location + '&token=' + api)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            $("#news-box").empty();
            const articles = data.articles

            // clear news
            const news = [];

            // Sets the news list objects to 10 articles in an array
            for (var i = 0; i < 10; i++) {
                var headlines = {
                    headline: articles[i].title,
                    description: articles[i].description,
                    link: articles[i].url,
                    publisher: articles[i].source.name,
                    pubDate: articles[i].publishedAt.slice(0, 10)
                };
                news.push(headlines);
            }

            // console.log(news);
            renderNews(news);
        })
        .catch(error => console.log('error', error));
}

function renderNews(news) {
    //renders the News in the box
    for (let i = 0; i < news.length; i++) {

        // Create News card divs
        $('#news-box').append('<div id="news-card' + [i] + '" class="card">');
        $('#news-card' + [i]).html('<div id="card-header' + [i] + '" class="card-header">');
        $('#news-card' + [i]).append('<div id="card-content' + [i] + '" class="card-content">');
        $('#card-content' + [i]).html('<div id="content' + [i] + '" class="content">');

        // Headline and URL
        $('#card-header' + [i]).html('<p class="card-header-title"><a href="' + news[i].link + '" target="blank">' + news[i].headline + '</a></p>');

        // Article description, Publisher, and Pub Date
        $('#content' + [i]).append(`${news[i].description}<br />Publisher: ${news[i].publisher}<br />Pub Date: ${news[i].pubDate}`);
    }
}

// define global variables
let countries = {};
var confirmedStats = {};

// Define global map markers
let marker1;
let marker2;
let marker3;
let marker4;
let marker5;
let marker6;
let marker7;
let marker8;
let marker9;
let marker10;
let marker11;
let marker12;
let marker13;
let marker14;
let marker15;

// Get the Summary data for all Countries
let requestOptions = {
    method: 'GET',
    redirect: 'follow'
}

// Get daily stats by state for the trending chart
fetch("https://api.covid19api.com/dayone/country/united-states/status/confirmed", requestOptions)
    .then(response => response.json())
    .then(result => setconfirmedStats(result))
    .catch(error => console.log("Failed to get State data: ", error));

// TESTING DATA
// var statesInfo = [];
// $.getJSON("USstateResponse.json", function(json) {
//     statesInfo = json;
//     console.log(json);
//     setconfirmedStats(statesInfo);
// })

// Get Summary Data for all Countries
fetch("https://api.covid19api.com/summary", requestOptions)
    .then(response => response.json())
    .then(result => processGlobalData(result))
    .catch(error => console.log("Failed to get summary data: ", error));

// TESTING DATA
// $.getJSON("globalResponse.json", json => processGlobalData(json))


var addComma = function(num) {
    return (num.toString().split("").reverse()
    .map((digit, index) => 
    index != 0 && index % 3 === 0 ? `${digit},`:digit)
    .reverse()
    .join("")
    );
}

// Process GlobalData for header and set countries OBJ for future clicks
function processGlobalData(result) {
    let globalData = result.Global;
    // console.log(globalData);

    let newConfirmed = addComma(globalData.NewConfirmed);
    let totalConfirmed = addComma(globalData.TotalConfirmed);
    // let newRecovered = addComma(globalData.NewRecovered);
    // let totalRecovered = addComma(globalData.TotalRecovered);
    let totalDeaths = addComma(globalData.TotalDeaths);
   
    renderGlobalStats(totalConfirmed, newConfirmed, totalDeaths);
    setCountriesData(result.Countries);
}

// Sets the variable countries for the country marker clicks
function setCountriesData(Countries) {
    console.log(Countries);
    Countries.forEach(obj => {
        let countryID = obj.Slug;
        countries[countryID]={obj};
    });

    // Loads country markers
    loadCountryMarkers();
    return countries;
}

function countryClick() {
    let countryCode = (this.key);
        // console.log(this.key);
    getHealthNews(countryCode);

        // console.log(countries);
    // points to the data for clicked country
    let countryData = countries[countryCode].obj;
        // console.log(countryData);

    let totalConfirmed = addComma(countryData.TotalConfirmed);
    let newConfirmed = addComma(countryData.NewConfirmed);
    let totalRecovered = addComma(countryData.TotalRecovered);
    let totalDeaths = addComma(countryData.TotalDeaths);

    let popUpStats = `${countryData.Country}<br/>
    Total Confirmed: &nbsp ${totalConfirmed}<br/>
    New Confirmed: &nbsp ${newConfirmed}<br/>
    Total Recovered: &nbsp ${totalRecovered}<br/>
    Total Deaths: &nbsp ${totalDeaths} `

    marker1.bindPopup(popUpStats);
    marker2.bindPopup(popUpStats);
    marker3.bindPopup(popUpStats);
    marker4.bindPopup(popUpStats);
    marker5.bindPopup(popUpStats);
    marker6.bindPopup(popUpStats);
    marker7.bindPopup(popUpStats);
    marker8.bindPopup(popUpStats);
    marker9.bindPopup(popUpStats);
    marker10.bindPopup(popUpStats);
    marker11.bindPopup(popUpStats);
    marker12.bindPopup(popUpStats);
    marker13.bindPopup(popUpStats);
    marker14.bindPopup(popUpStats);
    marker15.bindPopup(popUpStats);
}

function renderGlobalStats(conf, newConf, deaths) {
    $('#global-stats').html(
       `Global Confirmed Cases: &nbsp ${conf} <br/>
        Global New Cases: &nbsp ${newConf} <br/>
        Global Deaths: &nbsp ${deaths}`);
}

// Clears the chart from displaying
$(document).on('click', "#myChart", function () {

    $('#myChart').attr('style', 'display:none;');
    $('#map').attr('style', 'display:block; opacity: 1; height: 480px;');
});

function setconfirmedStats(statesApiData){
    let unreported = 0;
    let state = null;
    const lookUp = {
        "Alaska": "AK", "Alabama": "AL", "Arizona": "AZ", "Arkansas": "AR", "California": "CA", "Colorado": "CO", "Connecticut": "CT", "Delaware": "DE",
        "District of Columbia": "DC","Florida": "FL","Georgia": "GA","Hawaii": "HI","Idaho": "ID","Illinois": "IL", "IL": "IL", "Indiana": "IN", "IN": "IN",
        "Iowa": "IA", "Kansas": "KS","Kentucky": "KY", "Louisiana": "LA","Maine": "ME","Maryland": "MD","Massachusetts": "MA", "MA": "MA", "Michigan": "MI", 
        "Minnesota": "MN", "Mississippi": "MS", "Missouri": "MO","Montana": "MT","Nebraska": "NE", "Nevada": "NV", "New Hampshire": "NH","New Jersey": "NJ",
        "New Mexico": "NM","New York": "NY","North Carolina": "NC", "North Dakota": "ND", "Ohio": "OH", "Oklahoma": "OK", "Oregon": "OR", "Pennsylvania": "PA", 
        "Rhode Island": "RI", "South Carolina": "SC", "South Dakota": "SD","Tennessee": "TN", "Texas": "TX", "Utah": "UT", "Vermont": "VT", "Virginia": "VA", 
        "Washington": "WA", "West Virginia": "WV", "Wisconsin": "WI", "Wyoming": "WY"
    };

    statesApiData.forEach(report =>{
        let state = lookUp[report.Province];
        let date = report.Date;
        let cases = report.Cases;
        let dailyReport = {
            date: date.slice(0,10),
            confirmed: cases
        };
        if(report.Province === ""){
            unreported + +report.Cases;
        }
        else {
            confirmedStats[state] ?        
            confirmedStats[state].push(dailyReport) :
            confirmedStats[state]=[dailyReport]
        }        
    })
    console.log(`Unreported: ${unreported}`)
    loadStateMarkers();
}


// Responds to clicks on US State markers
function onClick() {
    var state = (this.key);
    // get US News
    getHealthNews("us");
    // Get State Info for Chart
    console.log(`clicked state: ${state}`);
    chartPrep(state);
}

getHealthNews("united-states");
