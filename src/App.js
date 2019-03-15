import React, { Component } from 'react';
import AppBar from './components/AppBar';
import { createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { List, ListItem,Typography,IconButton,ListItemSecondaryAction } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

const AppBartheme = createMuiTheme({
	palette : {
		primary : {
			light : '#555555',
			dark : '#111111',
			main : '#333333',
			contrastText : '#ffffff'
		},
		secondary : {
			light : '#ffffff',
			dark : '#dddddd',
			main : '#eeeeee',
			contrastText : '#111111'
		},
		error : {
			light : '#cc0000',
			dark : '#550000',
			main : '#aa0000',
			contrastText : '#00ffff'
		}
	},
	typography: {
		useNextVariants: true,
	},
});

var typography = {
	width : '33%',
	margin : '0',
	float : 'left',
	opacity : '0.8',
	textAlign : 'center',
	letterSpacing : '1px'
},
iconButton = {
	color : 'crimson',
	opacity : '0.8'
},header = {
	width : '33%',
	margin : '0',
	float : 'left',
	textAlign : 'center',
	letterSpacing : '1px'
}

const mainTheme = createMuiTheme({
	palette : {
		primary : {
			light : '#555555',
			dark : '#111111',
			main : '#333333',
			contrastText : '#ffffff'
		},
		secondary : {
			light : '#ffffff',
			dark : '#dddddd',
			main : '#eeeeee',
			contrastText : '#111111'
		},
		error : {
			light : '#c00000',
			dark : '#500000',
			main : '#0a0000',
			contrastText : '#00ffff'
		}
	},
	typography: {
		useNextVariants: true,
		width : '33%',
		margin : '0',
		float : 'left',
		opacity : '0.8'
	},
	iconButton : {
		color : 'crimson',
		opacity : '0.8'
	}
});

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			contacts : [{
				name : 'Dhruvil',
				number : '8850392965'
			},{
				name : 'Rahil',
				number : '9869225071'
			},{
				name : 'Khushali',
				number : '9699580280'
			}],
		}
	}

	handleDelete = (number) => {
		console.log(number.number,this.state);
		this.setState(({ contacts }) => ({
			contacts: contacts.filter(ex => ex.number !== number.number)
		}))
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
					<MuiThemeProvider theme={mainTheme}>
							<Button >ADD</Button><br/>
							<Typography variant = 'h6' style={header}>NAME</Typography>
							<Typography variant = 'h6' style={header}>NUMBER</Typography>
							<List>
								{ this.state.contacts.map( ({name,number}) => 
									<ListItem key={number}>
										<Typography variant = 'h6' style={typography}>{name}</Typography>
										<Typography variant = 'h6'style={typography}>{number}</Typography>
										<ListItemSecondaryAction>
											<IconButton style={iconButton} onClick={()=>this.handleDelete({number})} >
												<Delete />
											</IconButton>	
										</ListItemSecondaryAction>	
									</ListItem>
								)}
							</List>
					</MuiThemeProvider>
				</main>
			</div>
		);
	}

}

export default App;


// https://medium.freecodecamp.org/meet-your-material-ui-your-new-favorite-user-interface-library-6349a1c88a8c		