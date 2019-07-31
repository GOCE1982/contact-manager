import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TiArrowUnsorted as SortDown } from 'react-icons/ti';
import { MdClear as Delete } from 'react-icons/md';
import { TiPencil as Edit } from 'react-icons/ti';
import { Consumer } from '../../context';
import axios from 'axios';

class Contact extends Component {
  state = {
	  showContactInfo: false
  };

  onDeleteClick = async (id, dispatch) => {
	try {
		await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
		dispatch({type: 'DELETE_CONTACT', payload: id});
	} catch (e) {
		dispatch({type: 'DELETE_CONTACT', payload: id});	
	}

  };
	  
  render() {
	const { id, name, email, phone } = this.props.contact;
	const { street, suite, city, zipcode } = this.props.contact.address;
	const { showContactInfo }  = this.state;
		
    return (
		<Consumer>
			{value => {
				const { dispatch } = value;
				return (
					<div className="card mb-3">
						<div className="card-body mb-3">
							<h4>{name} <span></span> 
							<SortDown onClick={() => 
							this.setState({ showContactInfo:
							!this.state.showContactInfo })
							} 
							style={{cursor: 'pointer'}}
							/>
							<Delete style={{cursor: 'pointer', float: 'right', color: 'red'}}
							onClick={this.onDeleteClick.bind(this, id, dispatch)}
							/>
							<Link to={`contact/edit/${id}`}>
								<Edit style={{
										pointer: 'cursor',
										float: 'right',
										color: 'black',
										marginRight: '1rem'
									}} />	
							</Link>
							</h4>
							{showContactInfo ? (
							<ul className="list-group">
								<li className="list-group-item">Email: {email}</li>
								<li className="list-group-item">Phone: {phone}</li>
								<li className="list-group-item">Street: {street}</li>
								<li className="list-group-item">Suite: {suite}</li>
								<li className="list-group-item">City: {city}</li>
								<li className="list-group-item">Zip Code: {zipcode}</li>
							</ul>
							) : null}
						</div>
      				</div>
				)
			}}
		</Consumer>
    );
  }
}

Contact.propTypes = {
	contact: PropTypes.object.isRequired
}

export default Contact;
