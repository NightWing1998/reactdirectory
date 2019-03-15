import React from 'react';
import { Button } from '@material-ui/core';
import { List, ListItem,Typography,IconButton,Divider } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import {Link} from 'react-router-dom';

var typography1 = {
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
},button = {
	backgroundColor : 'green',
	letterSpacing : '1px',
	color : 'white'
}


class Home extends React.Component {

	handleDelete = (number) => {
		console.log(number.number);
		this.setState(({contacts}) => ({
			contacts: contacts.filter(ex => ex.number !== number.number)
		}))
	}

	render() {
		return (
		<div>
		<Link to="/add">
			<Button variant="contained" style={button}>
				ADD
		</Button><br />
		</Link>

			<Typography variant='h6' style={header}>NAME</Typography>
			<Typography variant='h6' style={header}>NUMBER</Typography>
			<List>
				{this.props.contacts.map(({ name, number }) =>
					<ListItem key={number}>
						<Divider />
						<Typography variant='h6' style={typography1}>{name}</Typography>
						<Typography variant='h6' style={typography1}>{number}</Typography>
						{/* <ListItemSecondaryAction> */}
						<IconButton style={iconButton} onClick={() => this.handleDelete({ number })} >
							<Delete />
						</IconButton>
						{/* </ListItemSecondaryAction> */}
					</ListItem>
				)}
			</List>
		</div>
	)}
}

export default Home;