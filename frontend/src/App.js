import React, { Component } from "react"
import Modal from "./components/Modal";
import axios from "axios";
import {Table} from 'reactstrap';
class App extends Component {
    state = {
      activeItem: {
        Exchange: "",
        Symbol: "",
        Shortname: "",
        Longname: "",	
        Sector: "",	
        Industry: "",	
        Currentprice: 0.0,	
        Marketcap: 0.0,	
        Ebitda: 0.0,	
        Revenuegrowth: 0.0,	
        City: "",	
        State: "",	
        Country: "",	
        Fulltimeemployees: 0,
        Longbusinesssummary: "",	
        Weight: 0.0
      },
      companies: []
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

    toggle = () => {
      this.setState({ modal: !this.state.modal });
    };

    handleSubmit = item => {
      this.toggle();
      if (this.state.companies.some(e => e.Symbol === item.Symbol)) {
        console.log("Item already exists in the database")
        return;
      }
      axios.post('http://localhost:8000/', item)
    };

    createItem = () => {
      const item = {
            Exchange: "", 
            Symbol: "",
            Shortname: "",
            Longname: "",	
            Sector: "",	
            Industry: "",	
            Currentprice: 0.0,	
            Marketcap: 0.0,	
            Ebitda: 0.0,	
            Revenuegrowth: 0.0,	
            City: "",	
            State: "",	
            Country: "",	
            Fulltimeemployees: 0,
            Longbusinesssummary: "",	
            Weight: 0.0
          };
      this.setState({ activeItem: item, modal: !this.state.modal });
    };

    renderItems = () => {
      return this.state.companies.map(item => (
        <tr key={item.Symbol}>
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
        <main>
        <div class="container-fluid">
          <h3 className="text-black text-uppercase text-center my-4">List of all Companies</h3>
          <hr/>
          <div className="row">
              <div className="col-12">
                <button onClick={this.createItem} className="btn btn-success btn-md mb-4 w-20">Add Company</button>
              </div>
          </div>
          <div className="row">
          <Table striped bordered hover className="companyTable">
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
          </Table>
          </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ): null}
        </div>
      </main>
      )
    }
  }
  
export default App;
