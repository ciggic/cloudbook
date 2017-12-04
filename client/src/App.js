import React from 'react';
import PropTypes from 'prop-types'; // ES6



class App extends React.Component {
      constructor (props) {
          super(props)
          this.state = {
            items:['milk','bread','wire','mouse','chicken']
          }
      }

      addItem (e) {
        e.preventDefault();
        const {items} = this.state;
        const newItem = this.newItem.value;
        const message = '';

        const isOnTheList = items.includes(newItem);
        if (isOnTheList) {
            this.setState({
                message : "This item is already on the list."
            });
        } else {
            newItem !== '' && this.setState({
                items : [...this.state.items, newItem],
                message : ''
            });            
        }
        this.formObj.reset();        
      }

      removeItem(delItem) {
          const newItems = this.state.items.filter(item => {
              return item !== delItem;
          });
          this.setState({
            items : [...newItems]
          });
      } 

      render () {
        const {items, message} = this.state
        return(
            <div className="container">
                <br/>
                <br/>
                <div className="row justify-content-center">
                    <br/>
                    <form className="form-inline" onSubmit={(e) => {this.addItem(e)}} ref={(form => this.formObj = form)}>
                        <div className="form-group">
                            <label className = "sr-only" htmlFor="newItem">Enter New Item</label>
                            <input type="text" placeholder="Bread" className="form-control" id="newItem" ref={(input => this.newItem = input)}/>
                        </div>    
                        <button type="submit" className="btn btn-primary"> ADD </button>
                    </form>
                </div>
                <div className="content">
                    {
                        message !== '' && <p className = "message text-danger"> {message} </p>
                    }
                </div>

                <h1>List of Values </h1>
                <div className="row justify-content-center">              
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            items.map(item => {
                                return (
                                    <tr key={item}>
                                        <th scope="row">1</th>
                                        <td>{item}</td>
                                        <td>
                                            <button type="button" className="btn btn-default btn-sm" onClick={(e) => this.removeItem(item)}>
                                                Remove
                                            </button>
                                        </td>                                                
                                    </tr>                                           
                                )
                            })
                        }                            
                        </tbody>
                    </table>
                </div>    
            </div>
        )
    }
}

export default App;