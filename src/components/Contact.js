import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../context';
import axios from 'axios';
import { Link } from "react-router-dom";


export default class Contact extends Component {
    state = {
        showContactInfo: false
    };

    onShowClick = () => {
        this.setState({ showContactInfo: !this.state.showContactInfo });
    };

    onDeleteClick = (id, dispatch) => {

        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => dispatch({ payload: id, type: 'DELETE_CONTACT' }))
    }
    onEditClick = (id) => {
        console.log(id);
    }
    render() {
        const { name, email, phone, id } = this.props.contact;
        const { showContactInfo } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>{name}{' '} <i onClick={this.onShowClick} className="fas fa-sort-down" style={{ cursor: 'pointer' }}></i>
                                <i onClick={this.onDeleteClick.bind(this, id, dispatch)} className="fas fa-times" style={{ cursor: 'pointer', color: 'red', float: 'right' }}></i>
                                <Link to={'/EditContact/' + id} style={{ cursor: 'pointer', float: 'right', marginRight: '1rem' }}><i className="fas fa-pen"></i></Link>
                            </h4>
                            {showContactInfo ?
                                (<ul className="list-group">
                                    <li className="list-group-item">Phone Number:{phone}</li>
                                    <li className="list-group-item">Email: {email}</li>
                                </ul>) : null}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}
