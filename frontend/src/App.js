// This code implements a React component that fetches data from an API and displays it in a table
// Button functions are handled using Modal library
// POST requests are being handles using axios

// Import necessary libraries
import React, { Component } from "react"
import Modal from "./components/Modal";
import axios from "axios";
import { Table } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
    // Initialize the state object with an activeItem object and an array of companies objects. 
    // The activeItem object is used to keep track of the current item being manipulated, 
    // and the companies array holds the data fetched from the API
    state = {
      activeItem: {
        Exchange: "",
        Symbol: "",
        Shortname: "",
        Longname: "",	
        Sector: "",	
        Industry: "",	
        Currentprice: 0.0,	
        Marketcap: 0,	
        Ebitda: 0,	
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

    // Fetch data from the API using fetch and store in the companies array
    async componentDidMount() {
      try {
        const res = await fetch('http://localhost:8000/');
        const companies = await res.json();
        this.setState({
          companies
        });
        // toast.success('Data fetched successfully');
        console.log(this.state.companies);
      } catch(error) {
        console.log(error);
        // if (Object.keys(error).length === 0) {toast.error('Error receiving content from API').then(() => {return (<ToastContainer limit={1}/>)})};
      }
    }

    // User function to turn modal on and off
    toggle = () => {
      this.setState({ modal: !this.state.modal });
    };

    // Function for adding a new item to the companies array. This function is called when the user submits the modal form. 
    // If a company with the same symbol already exists, the user is notified. 
    // If not, the new company is added to the database using a POST request to the API. 
    // If there is an error, the user is notified and error details are logged to the console.
    handleSubmit = item => {
      this.toggle();  

      // Following if command checks if the user entered Symbol exists already in the database. Since symbol is a primary key of the table,
      // its duplication is not allowed
      if (this.state.companies.some(e => e.Symbol === item.Symbol)) {
        toast.error("Company with this Symbol already exists in the database");
        console.log(("Company with this Symbol already exists in the database"));
        return;
      }

      try {
        axios.post('http://localhost:8000/', item).then((response) => { 
          this.setState(prevState => ({
            companies: [item, ...prevState.companies]
          }))
          toast.success("Company successfully added in the database");
          console.log(("Company successfully added in the database"));
        }
        ).catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log('Response status ' + error.response.status);
            console.log(error.response.headers);
            toast.error("Oops! There was an error. Check console for more details");
          }
        }
        )
      } catch(e) {
        console.log(e.response.data);
        toast.error("Oops! Check console for error details")
      }
    };

    // createItem function is triggered when user clicks on 'Add Company' button
    createItem = () => {
      const item = {
            Exchange: "", 
            Symbol: "",
            Shortname: "",
            Longname: "",	
            Sector: "",	
            Industry: "",	
            Currentprice: 0.0,	
            Marketcap: 0,	
            Ebitda: 0,	
            Revenuegrowth: 0.0,	
            City: "",	
            State: "",	
            Country: "",	
            Fulltimeemployees: 0,
            Longbusinesssummary: "",	
            Weight: 0.0
          };
      this.setState({ activeItem: item, modal: !this.state.modal });  // set activeItem to an empty item and open modal
    };

    // render table headers
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

    //// Attempted to automate the above written piece of code
    // renderKeys = () => {
    //   var dict = this.state.companies;
    //   console.log(this.state.companies[0]);
    //   return Object.keys(dict).map((key) => (
    //       <th>{key}</th>
    //   )
    //   )
    // }

    // render the output html
    render() {
      return (
        <main>
        <div className="container-fluid">
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
        <ToastContainer 
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
          theme="dark"
          />
        </div>
      </main>
      )
    }
  }
  
export default App;
