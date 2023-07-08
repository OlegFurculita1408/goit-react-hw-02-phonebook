import PropTypes from "prop-types";
import { Component } from "react";
import css from './ContactList.module.css';
import { nanoid } from "nanoid";


class ContactList extends Component {
    state = {};
        render() {
        const { contacts, handlerDelete } = this.props;
        return (
            <>
            <ul className={css.contactList}>
                {contacts.map(({ id, name, number }) => {
                    return (
                        <li key={nanoid()} className={css.contactsItem}>
                        <p>
                            {name}: <span>{number}</span>
                        </p>
                        <button className={css.itemBtn}
                                 onClick={() => handlerDelete(id)}>Delete</button>
                        </li>
                    );
                })}
            </ul>
            </>
        );
        }
    }
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        })
    ).isRequired,
    handlerDelete: PropTypes.func.isRequired,
};
export default ContactList