import React, { Component } from 'react';
import AppBar from './components/AppBar';
import { createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

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

class App extends Component {
	render() {
		return (
			<div>
				<header>
					<MuiThemeProvider theme={AppBartheme}>
						<AppBar />
					</MuiThemeProvider>
				</header>
				<Button >ADD</Button>
			</div>
		);
	}
}

export default App;


// https://medium.freecodecamp.org/meet-your-material-ui-your-new-favorite-user-interface-library-6349a1c88a8c		