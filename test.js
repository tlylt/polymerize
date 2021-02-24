
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
class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {titles: []};
      }
    // fetch data CC MDN

    componentDidMount() {
        postData('https://api.sandbox.polymerize.io/v1/data/_get_plot', { "company_id": "polymerize.io" })
        .then(data => {
        this.state({
            titles: Object.entries(data["result"]["data"]).slice(1).map(item => item[0])
        })});
    }


    render() { return (
        <table>
            <tr>
                {this.state.titles.map(item =>
                <th>item</th>
                )}
            </tr>
        </table>
    )}
}

ReactDOM.render(
    <Table/>,
    document.getElementById('root')
  );
  
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

const titles = Object.entries(displayData).slice(1).map(item => item[0]);
console.log(titles);
function Header({titles}) {
    return (
        <tr>
            {titles.map(name => {
                <th>{name}</th>
            })}
        </tr>
    )
}
  function Table({titles}) {
    return (
    <table>
    <tr>
            {titles.map(name => {
                <th>{name}</th>
            })}
        </tr>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
    <tr>
      <td>Ernst Handel</td>
      <td>Roland Mendel</td>
      <td>Austria</td>
    </tr>
    <tr>
      <td>Island Trading</td>
      <td>Helen Bennett</td>
      <td>UK</td>
    </tr>
    <tr>
      <td>Laughing Bacchus Winecellars</td>
      <td>Yoshi Tannamuri</td>
      <td>Canada</td>
    </tr>
    <tr>
      <td>Magazzini Alimentari Riuniti</td>
      <td>Giovanni Rovelli</td>
      <td>Italy</td>
    </tr>
  </table>
    )
  }
  ReactDOM.render(
    <Table titles={titles}/>,
    document.getElementById('root')
  );
  