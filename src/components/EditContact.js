import axios from 'axios';
import React, { Component } from 'react'
import { Consumer } from '../context';
import AddContactInput from './AddContactInput';


export default class EditContact extends Component {
    state = {
        email: '',
        name: '',
        phone: '',
        id: '',
        errors: {}
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const res = await axios.get("https://jsonplaceholder.typicode.com/users/" + id);
        console.log(res);
        const contact = res.data;
        this.setState({
            email: contact.email,
            phone: contact.phone,
            name: contact.name,
            id: contact.id
        })
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const { email, phone, name, id } = this.state;

        if (name === '') {
            this.setState({ errors: { name: 'Name is required' } })
            return;
        }
        if (phone === '') {
            this.setState({ errors: { phone: 'Phone is required' } })
            return;
        }

        if (email === '') {
            this.setState({ errors: { email: 'Email is required' } })
            return;
        }

        const newContact = {
            name,
            email,
            phone
        }

        axios.put('https://jsonplaceholder.typicode.com/users/' + id, newContact)
            .then(res => dispatch({ type: "EDIT_CONTACT", payload: res.data }))

        this.setState({
            name: '', phone: '', email: '', errors: {}
        });
        this.props.history.push('/');
    }
    render() {
        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>{
                value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header"> Edit Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)} >
                                    <AddContactInput label="Name" name="name" placeholder="Enter Name" onChange={this.onChange} value={name} error={errors.name} />
                                    <AddContactInput label="Phone" name="phone" placeholder="Enter Phone" onChange={this.onChange} value={phone} error={errors.phone} />
                                    <AddContactInput label="Email" type="email" name="email" placeholder="Enter Email" onChange={this.onChange} value={email} error={errors.email} />
                                    <input type="submit" value="Update Contact" className="btn btn-light btn-block" />
                                </form>
                            </div>

                        </div>
                    )
                }
            }
            </Consumer>
        )
    }
}
