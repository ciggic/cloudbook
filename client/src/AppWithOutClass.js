import React from 'react';
import PropTypes from 'prop-types'; // ES6

const Headline = () => {
  return <h1 className="title"> Hello Darling Welcome my world!!</h1>
}
/*
const Greeting = (props) => {
  return <p style={{backgroud:"red"}}> Love you {props.name} </p>
}
*/

const Greeting = (props) => {
  const {name, age} = props
  return <p> Love you {name} ({age})</p>
}

export class App extends React.Component {
      render () {
        return(
          <div>
              <Headline />
              <Greeting name = "Nare Nareeee" age={28} />
          </div>
        )
      }
}



// Define Properties

Greeting.propTypes =  {
  name : PropTypes.string,
  age : PropTypes.number,

}
//
