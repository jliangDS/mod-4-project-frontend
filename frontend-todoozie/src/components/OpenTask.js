import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import PersonTask from './PersonTask'
import StatusTask from './StatusTask'


class OpenTask extends Component {
    render() {
        return (
            <Card.Group>
                <Card fluid color='red'/>
            {/* <div>
            <h1>Item</h1>
            <PersonTask />
            <StatusTask />
            </div> */}
            </Card.Group>
        )
    }
}

export default OpenTask 