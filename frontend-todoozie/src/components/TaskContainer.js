import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import OpenTask from './OpenTask'

class TaskContainer extends Component {
    
    constructor() {
        super()
    }

    componentDidMount(){

    }

    render() {
        return (
            <Card.Group>
                <Card fluid color='red' header='Option 1'/>
            </Card.Group>
            // <div>
            // <h1>Group Title</h1>
            // <OpenTask />
            // <OpenTask />
            // </div>
        )
    }
}

export default TaskContainer 