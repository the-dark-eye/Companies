// This code defines a custom modal component in React using the "reactstrap" library. 
// The modal is used for adding a company to a list and is defined using the "Modal" component from the "reactstrap" library.

// Import required libraries
import React, {Component} from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";

// Create a custom modal component called "CustomModal" which inherits props from Component class
// and sets the initial state of the form input using props
export default class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem
        };
    }

    // update the activeItem (props) state as the fields in the form change
    handleChange = e => {
        let {name, value} = e.target;
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({activeItem});
    };

    // render the button form using Modal
    // The modal has a header, body, and footer, defined using the "ModalHeader", "ModalBody", and "ModalFooter" components from "reactstrap" 
    // The header displays the text "Add Company". The body contains the form inputs, and the footer contains the save button
    render() {
        const {toggle, onSave} = this.props;    // toggle is a function for closing the modal and onSave is a function for saving input values
        return (
            <Modal isOpen={true} toggle={toggle}>   
                <ModalHeader toggle={toggle}>Add Company</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="Exchange">Exchange</Label>
                            <Input
                                type="text"
                                name="Exchange"
                                value={this.state.activeItem.Exchange}
                                onChange={this.handleChange}
                                placeholder="maximum length 3"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Symbol">Symbol</Label>
                            <Input
                                type="text"
                                name="Symbol"
                                value={this.state.activeItem.Symbol}
                                onChange={this.handleChange}
                                placeholder="maximum length 5"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Shortname">Shortname</Label>
                            <Input
                                type="text"
                                name="Shortname"
                                value={this.state.activeItem.Shortname}
                                onChange={this.handleChange}
                                placeholder="maximum length 50"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Longname">Longname</Label>
                            <Input
                                type="text"
                                name="Longname"
                                value={this.state.activeItem.Longname}
                                onChange={this.handleChange}
                                placeholder="maximum length 100"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Sector">Sector</Label>
                            <Input
                                type="text"
                                name="Sector"
                                value={this.state.activeItem.Sector}
                                onChange={this.handleChange}
                                placeholder="maximum length 50"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Industry">Industry</Label>
                            <Input
                                type="text"
                                name="Industry"
                                value={this.state.activeItem.Industry}
                                onChange={this.handleChange}
                                placeholder="maximum length 100"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Currentprice">Currentprice</Label>
                            <Input
                                type="number"
                                name="Currentprice"
                                value={this.state.activeItem.Currentprice}
                                onChange={this.handleChange}
                                placeholder="0"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Marketcap">Marketcap</Label>
                            <Input
                                type="number"
                                name="Marketcap"
                                value={this.state.activeItem.Marketcap}
                                onChange={this.handleChange}
                                placeholder="0"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Ebitda">Ebitda</Label>
                            <Input
                                type="number"
                                name="Ebitda"
                                value={this.state.activeItem.Ebitda}
                                onChange={this.handleChange}
                                placeholder="maximum length 100"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Revenuegrowth">Revenuegrowth</Label>
                            <Input
                                type="number"
                                name="Revenuegrowth"
                                value={this.state.activeItem.Revenuegrowth}
                                onChange={this.handleChange}
                                placeholder="maximum length 100"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="City">City</Label>
                            <Input
                                type="text"
                                name="City"
                                value={this.state.activeItem.City}
                                onChange={this.handleChange}
                                placeholder="maximum length 50"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="State">State</Label>
                            <Input
                                type="text"
                                name="State"
                                value={this.state.activeItem.State}
                                onChange={this.handleChange}
                                placeholder="maximum length 2"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Country">Country</Label>
                            <Input
                                type="text"
                                name="Country"
                                value={this.state.activeItem.Country}
                                onChange={this.handleChange}
                                placeholder="maximum length 50"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Fulltimeemployees">Fulltimeemployees</Label>
                            <Input
                                type="number"
                                name="Fulltimeemployees"
                                value={this.state.activeItem.Fulltimeemployees}
                                onChange={this.handleChange}
                                placeholder="0"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Longbusinesssummary">Longbusinesssummary</Label>
                            <Input
                                type="text"
                                name="Longbusinesssummary"
                                value={this.state.activeItem.Longbusinesssummary}
                                onChange={this.handleChange}
                                placeholder="maximum length 5000"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Weight">Weight</Label>
                            <Input
                                type="number"
                                name="Weight"
                                value={this.state.activeItem.Weight}
                                onChange={this.handleChange}
                                placeholder="0.0"
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}
