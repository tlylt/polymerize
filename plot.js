// fetch data CC MDN
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

// helper method
function getResultArray(data, name) {
    return Object.entries(data[name]).map(item => item[1]);
}


// process the data
postData('https://api.sandbox.polymerize.io/v1/data/_get_plot', { "company_id": "polymerize.io" })
.then(data => {
    const myDiv = document.getElementById('myDiv');

    result = data["result"]["data"];
    data = {
    x:getResultArray(result,"layer_height"),
    y:getResultArray(result,"wall_thickness"),
    z:getResultArray(result,"roughness"),
    mode:"markers",
    type: 'scatter3d',
    marker: {
		size: 12,
		line: {
		color: 'rgba(217, 217, 217, 0.14)',
		width: 0.5},
		opacity: 0.8},
    }
    const trace = [data];

    const fig = {
        data: trace,
        layout: {
            showlegend: true,
            legend: {
                x: "layer height",
                y: "wall thickness",
                z: "roughness"
            },
            xaxis: {
                title :"layer height",
            },
            yaxis: {
                title: "wall thickness",
            },
            autosize: true,
        },
    }
    
    Plotly.plot(myDiv, fig);
});

