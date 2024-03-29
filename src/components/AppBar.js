import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
	root: {
		flexGrow: 1,
		fontSize: 'calc(10px + 2vmin)',
		textAlign : 'center',
		marginBottom : '25px'
	},
	appbar : {
		alignItems : 'center',
		justifyContent : 'space-between',
	}
};

function SimpleAppBar(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<AppBar position="static" color='primary' className={classes.appbar}>
				<Toolbar>
					<Typography variant="h6" color='secondary'>
						Directory
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}

SimpleAppBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);