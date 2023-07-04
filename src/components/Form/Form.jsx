import React, { Component } from "react";
import PropTypes from "react";
import css from './Form.module.css';

class Form extends Component {
    state = {
        name: '',
        number: '',
      }

      handlerChenge = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
      }

      handlerSubmit = (e) => {
        e.preventDefault()
        const { name, number } = this.state;
        const { contacts } = this.props;
        const isContactExists = contacts.find(
        (contact) => contact.name === e.target.name.value
    );
        if (isContactExists) {
        alert(`${isContactExists.name} is already in contacts`);
        return;
    }
        this.props.createUser(name, number);
        this.setState({
        name: '',
        number: '',
    });
      }

    render() {
        const { name, number } = this.state;
            return (
            <form className={css.container} onSubmit={this.handlerSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handlerChenge}
                    value={name}
                />
                <label htmlFor="number">Number</label>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handlerChenge}
                    value={number}
                />
                <button className={css.formBtn} type="submit">Add contact</button>
            </form>
        )
    }
}
// Form.propTypes = {
//     createUser: PropTypes.func.isRequired,
//     contacts: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//   };
export default Form