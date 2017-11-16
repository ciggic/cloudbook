import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Menu, { MenuItem } from 'material-ui/Menu';
import { red, purple, grey } from 'material-ui/colors';


const styles = theme => ({
	root: {
		marginTop: 0,
		width: '100%'
	},
	header: {
		background: '#4285f4'
	},
	flex: {
		flex: 1,
	},
	menuButton: {
		marginLeft: 0,
		marginRight: 0,
	},
});

class HeaderBar extends React.Component {
	state = {
			auth: true,
			anchorEl: null,
	};

	handleChange = (event, checked) => {
		this.setState({ auth: checked });
	};

	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleRequestClose = () => {
		this.setState({ anchorEl: null });
	};

	render() {
		const { classes } = this.props;
		const { auth, anchorEl } = this.state;
		const open = Boolean(anchorEl);
		return (
				<div className = {classes.root}>
				<AppBar className = {classes.header}>
				<Toolbar disableGutters={true}>
				<IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
				<MenuIcon />
				</IconButton>
				<Typography type="title" color="inherit" className={classes.flex}>
				Cloudbook
				</Typography>
				{auth && (
						<div>
						<IconButton
						aria-owns={open ? 'menu-appbar' : null}
						aria-haspopup="true"
							onClick={this.handleMenu}
						color="contrast"
							>
						<AccountCircle />
						</IconButton>
						<Menu
						id="menu-appbar"
							anchorEl={anchorEl}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={open}
						onRequestClose={this.handleRequestClose}
						>
						<MenuItem onClick={this.handleRequestClose}>Profile</MenuItem>
						<MenuItem onClick={this.handleRequestClose}>My account</MenuItem>
						</Menu>
						</div>
				)}
				</Toolbar>
				</AppBar>
				</div>
		);
	}
}

HeaderBar.propTypes = {
		classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderBar);
