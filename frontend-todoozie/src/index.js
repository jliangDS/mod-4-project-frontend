import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Header, List } from "semantic-ui-react";

import Example from "./example";

class AccountContainer extends Component {

    constructor() {
        super()

        this.state = {
            transactions: [],
            results: '',
            value: '',
            person: '',
            status: '',
            date: ''
        }
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        })
    }

    handlePerson = (value) => {
        this.setState({
            person: value,
        })
    }

    handleStatus = (value) => {
        this.setState({
            status: value
        })
    }

    handleCalendar = (event) => {
        let date = JSON.stringify(event).split('T')[0].substring(1)
        this.setState({
            date: date
        })
    }

    render() {
        return(
            <Container style={{ margin: 20 }}>
                <Header as="h3">Group Title</Header>
                <Example value={this.state.value} handleChange={this.handleChange} handlePerson={this.handlePerson} handleStatus={this.handleStatus} handleCalendar={this.handleCalendar} person={this.state.person} status={this.state.status} date={this.state.date} />
            </Container>
        )
    }
    

}

const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
    <Header as="h3">Group Title</Header>
    {children}
    {children}
    {children}
  </Container>
);

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
    <AccountContainer />,
//   <App>
//     <Example />
//   </App>,
  document.getElementById("root")
);
