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

// process the data
postData('https://api.sandbox.polymerize.io/v1/data/_get_plot', { "company_id": "polymerize.io" })
.then(data => {
    const myTable =document.querySelector("#myTable");
    result = data["result"]["data"];
    // titles of the parameters have been fetched
    titles = Object.entries(result).slice(1).map(item => item[0]);
    
    const elements = titles.map(item => {
      let head = document.createElement("th");
      head.innerText = item;
      return head;
    })
    let heading = document.createElement("tr");
    elements.map(item => {
      heading.appendChild(item);
    })
    myTable.appendChild(heading);
    for (let i = 0;i<46;i++) {
      let dataHeading = document.createElement("tr");
      titles.map(item => {
        let tempTd = document.createElement("td");
        tempTd.innerText = result[item][i];
        dataHeading.appendChild(tempTd);
      })
      myTable.appendChild(dataHeading);
    }    
});

    // return result;
    // detailedData = Object.entries(result).slice(1);
    // console.log(result);
    // titles = Object.entries(result).slice(1).map(item => item[0]);
    
    // console.log(titles);
    // for (let i =0; i<Object.keys(result["layer_height"]).length;i++){
    //     titles.forEach((title)=>{
    //         console.log(result[title][i]);
    //     })
    // }

