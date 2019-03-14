import React from 'react';

class ContactTile extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name : props.name,
			number : props.number,
			mail : props.mail
		}
	}

	render(){
		return (
			<div className="ContactCard"></div>
		);
	};
};

export default ContactTile;