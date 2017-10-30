import React from 'react';
import PropTypes from 'prop-types'; // ES6



export class App extends React.Component {
      constructor (props) {
          super(props)
          this.state = {
            items:['milk','bread','wire','mouse']
          }
      }

      render () {
        const {items} = this.state
        return(
          <div>
              <h1> Shopping List </h1>
              {
                  items.map(item => {
                    return <p key={item}>{item}</p>
                  })
              }
          </div>
        )
    }
}
