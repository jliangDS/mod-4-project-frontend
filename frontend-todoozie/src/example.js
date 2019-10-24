import React, { Component } from 'react'
import { Card, Dropdown, Icon, Image } from 'semantic-ui-react'
import Calendar from 'react-calendar'

const personOptions = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg' },
  },
  {
    key: 'Stevie Feliciano',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
    image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/stevie.jpg' },
  }
]

const statusOptions = [
  { key: 1, text: "Working on it", value: 1},
  { key: 2, text: "Stuck", value: 2},
  { key: 3, text: "Done", value: 3},
  { key: 4, text: "", value: 4}
]

const CardExampleFluid = (props) => (


  <Card.Group itemsPerRow={4}>
    <Card fluid color='green' onClick={() => null}>
    <input onKeyDown={(event) => {
      if(event.keyCode === 13)
      props.handleChange(event.target.value)
    }}></input>
    <h3>{props.value}</h3>
    </Card>
    <Card fluid color='orange' header='Person' onClick={() => null}>
      <Dropdown placeholder='Select Person' options={personOptions} value={personOptions.value} onChange={(event) => props.handlePerson(event.target.innerText)}/>
    <h3>{props.person}</h3>
    </Card>

    <Card fluid color='yellow' header='Status' onClick={() => null} style={{backgrouncolor: 'yellow'}}>
      <Dropdown placeholder='Select Status' options={statusOptions} onChange={(event) => props.handleStatus(event.target.innerText)}></Dropdown>
    <h3>{props.status}</h3>
    </Card>

    <Card fluid color='purple' onClick={() => null}>
      <Calendar onChange={(event) => props.handleCalendar(event)}/>
    <h3>{props.date}</h3>
    </Card>

  </Card.Group>
)

export default CardExampleFluid
