import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {

    switch (action.type) {

        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };

        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        default:
            return state;
    }
};
export class Provider extends Component {

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
        ],
        dispatch: action =>
            this.setState(state => reducer(state, action))
    };


    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;