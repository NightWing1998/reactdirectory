import React from 'react';
import {Typography,IconButton} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Delete } from '@material-ui/icons';

const style = ({
	root: {
		width : '100%',
		height : 'auto',
		alignItems : 'center',
		justifyContent : 'space-between',
	},
	typography : {
		width : '33%',
		margin : '0',
		float : 'left',
		opacity : '0.8',
		textAlign : 'center'
	},
	iconButton : {
		color : 'crimson',
		opacity : '0.8'
	}
});

class ContactTile extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name : props.name,
			number : props.number,
			delete : props.buttonClick
		};
		this.classes = props.classes;
	}

	render(){
		const {classes} = this.props;
		return (
			<div className={classes.root}>
				<Typography variant = 'h6' className={classes.typography}>{this.state.name}</Typography>
				<Typography variant = 'h6' className={classes.typography}>{this.state.number}</Typography>
				<IconButton className={classes.iconButton} onClick={()=>this.state.delete(this.state.number)} >
					<Delete />
				</IconButton>	
			</div>
		);
	};
};

ContactTile.propTypes = {
	classes : PropTypes.object.isRequired
}

export default withStyles(style)(ContactTile);