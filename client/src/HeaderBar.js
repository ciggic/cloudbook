import React,{Component} from 'react';
import AppBar from 'material-ui/AppBar';

class HeaderBar extends React.Component {
  render() {
    return (
        <div className = "App">
          <AppBar title="Welcome" className="muidocs-icon-navigation-expand-more" />
        </div>
    )
  }
}

export default HeaderBar;
