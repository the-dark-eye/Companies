import React, { Component } from "react"

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        companies: []
      };
    };

    async componentDidMount() {
      try {
        const res = await fetch('http://localhost:8000/');
        const companies = await res.json();
        this.setState({
          companies
        });
      } catch(e) {
        console.log(e);
      }
    }

    renderItems = () => {
      return this.state.companies.map(item => (
        <tr>
          <td>{item.Exchange}</td>	
          <td>{item.Symbol}</td>	
          <td>{item.Shortname}</td>	
          <td>{item.Longname}</td>	
          <td>{item.Sector}</td>	
          <td>{item.Industry}</td>	
          <td>{item.Currentprice}</td>	
          <td>{item.Marketcap}</td>	
          <td>{item.Ebitda}</td>	
          <td>{item.Revenuegrowth}</td>	
          <td>{item.City}</td>	
          <td>{item.State}</td>	
          <td>{item.Country}</td>	
          <td>{item.Fulltimeemployees}</td>	
          <td className="bigtext">{item.Longbusinesssummary}</td>	
          <td>{item.Weight}</td>
        </tr>
      ));
    }

    // renderKeys = () => {
    //   var dict = this.state.companies;
    //   console.log(this.state.companies[0]);
    //   return Object.keys(dict).map((key) => (
    //       <th>{key}</th>
    //   )
    //   )
    // }

    render() {
      return (
        <main className="content">
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <table>
                <thead>
                  <tr>
                    {/* {this.renderKeys()} */}
                    <th>Exchange</th>	
                    <th>Symbol</th>	
                    <th>Shortname</th>	
                    <th>Longname</th>	
                    <th>Sector</th>	
                    <th>Industry</th>	
                    <th>Currentprice</th>	
                    <th>Marketcap</th>	
                    <th>Ebitda</th>	
                    <th>Revenuegrowth</th>	
                    <th>City</th>	
                    <th>State</th>	
                    <th>Country</th>	
                    <th>Fulltimeemployees</th>	
                    <th>Longbusinesssummary</th>	
                    <th>Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderItems()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      )
    }
  }
  
export default App;
