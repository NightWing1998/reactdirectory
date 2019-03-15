import React, { Component } from 'react';
import AppBar from './components/AppBar';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { List, ListItem, Typography, IconButton, ListItemSecondaryAction,TextField} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import {HashRouter as Router,Link,Switch,Route} from 'react-router-dom';

const AppBartheme = createMuiTheme({
	palette: {
		primary: {
			light: '#555555',
			dark: '#111111',
			main: '#333333',
			contrastText: '#ffffff'
		},
		secondary: {
			light: '#ffffff',
			dark: '#dddddd',
			main: '#eeeeee',
			contrastText: '#111111'
		},
		error: {
			light: '#cc0000',
			dark: '#550000',
			main: '#aa0000',
			contrastText: '#00ffff'
		}
	},
	typography: {
		useNextVariants: true,
	},
});

var typography = {
	width: '33%',
	margin: '0',
	float: 'left',
	opacity: '0.8',
	textAlign: 'center',
	letterSpacing: '1px'
},
	iconButton = {
		color: 'crimson',
		opacity: '0.8'
	}, header = {
		width: '33%',
		margin: '0',
		float: 'left',
		textAlign: 'center',
		letterSpacing: '1px'
	},
	button = {
		backgroundColor : 'green',
		letterSpacing : '1px',
		color : 'white'
	}

const inpProps = {
	type : 'tel'
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: [{
				name: 'Dhruvil',
				number: '8850392965'
			}, {
				name: 'Rahil',
				number: '9869225071'
			}, {
				name: 'Khushali',
				number: '9699580280'
			}],
			tempContact : {
				name : '',
				number : ''
			}
		}
	}

	handleDelete = (number) => {
		console.log(number.number, this.state);
		this.setState(({ contacts }) => ({
			contacts: contacts.filter(ex => ex.number !== number.number)
		}))
	}

	handleName = (event) => {
		this.setState({
			...this.state.contacts,
			tempContact : {
				...this.state.tempContact,
				name : event.target.value
			}
		})
	}

	handleNumber = (event) => {
		this.setState({
			...this.state.contacts,
			tempContact : {
				...this.state.tempContact,
				number : event.target.value
			}
		})
	}

	add(){
		return(
			<center>
				<TextField name='Name' label="Name" onChange = { (event)=>this.handleName(event) } /><br/>
				<TextField inputProps={inpProps} name='PhoneNo' label="PhoneNo" onChange = { (event)=>this.handleNumber(event) }/><br/><br/>
				<Typography variant='h6' >Name: {this.state.tempContact.name}</Typography>		
				<Typography variant='h6' >Phone No: {this.state.tempContact.number}</Typography>
				<Link to="/">
					<Button variant="raised" style={button}>
						ADD
					</Button>
				</Link>
			</center>
		);
	}

	render() {
		return (
			<div>
				<header>
					<MuiThemeProvider theme={AppBartheme}>
						<AppBar />
					</MuiThemeProvider>
				</header>
				<main>
					<Router>
						<Switch>
							<Route exact path = "/">{this.home()}</Route>
							<Route path="/add">{this.add()}</Route>
						</Switch>
					</Router>
				</main>
			</div>
		);
	}

	home(){
		return (
			<div>
				<Link to="/add">
					<Button variant="contained" style={button}>
						ADD
					</Button>
				</Link><br /><br />
						<Typography variant='h6' style={header}>NAME</Typography>
						<Typography variant='h6' style={header}>NUMBER</Typography>
						<List>
							{this.state.contacts.map(({ name, number }) =>
								<ListItem key={number}>
									<Typography variant='h6' style={typography}>{name}</Typography>
									<Typography variant='h6' style={typography}>{number}</Typography>
									<ListItemSecondaryAction>
										<IconButton style={iconButton} onClick={() => this.handleDelete({ number })} >
											<Delete />
										</IconButton>
									</ListItemSecondaryAction>
								</ListItem>
							)}
						</List>
			</div>
		);
	}

}

export default App;


// https://medium.freecodecamp.org/meet-your-material-ui-your-new-favorite-user-interface-library-6349a1c88a8c		