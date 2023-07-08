import React, { Component } from "react";
import PropTypes from "react";
import css from './Form.module.css';
import { nanoid } from "nanoid";

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
        this.props.addContact(this.state);
        this.reset();
        };
        reset = () => {
            this.setState({ name: '', number: '' });
        };
      

    render() {
        const { name, number } = this.state;
            return (
            <form className={css.container} onSubmit={this.handlerSubmit}>
                <label htmlFor={nanoid()}>Name</label>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handlerChenge}
                        value={name}
                    />
                <label htmlFor={nanoid()}>Number</label>
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
//     addContact: PropTypes.func.isRequired,
//   };
export default Form