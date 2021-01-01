import React, { Component } from 'react';
import Contact from './Contact'



export default class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "Sachin",
                email: "sachin@gmail.com",
                phone: 9638527410
            },
            {
                id: 2,
                name: "Ankush",
                email: "ankush@gmail.com",
                phone: 9876543210
            },
            {
                id: 3,
                name: "Nanda",
                email: "nanda@gmail.com",
                phone: 9638520741
            }
        ]
    }

    deleteContact = (id) => {
        const deletedContactState = this.state.contacts.filter((contact) => contact.id !== id);
        this.setState({ contacts: deletedContactState });
    }

    render() {
        const { contacts } = this.state;
        return (
            <div>
                {contacts.map((contact) => {
                    return <Contact key={contact.id} contact={contact} DeleteClickHandler={this.deleteContact.bind(this, contact.id)} />
                })}
            </div>
        )
    }
}
