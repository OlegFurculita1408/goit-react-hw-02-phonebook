import { Component } from "react";
import { nanoid } from "nanoid";
import Form from "./Form/Form";
import Filter from "./Filters/FilterForm";
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: "",
  };

  createUser = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  handlerDelete = (id) => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
      this.setState({
        contacts: updatedContacts,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filtere = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div className="container"
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101'
        }}
      ><h1>Phonebook</h1>
        <Form 
          onsubmit ={this.createUser}
          />
          <h2>Contacts</h2>
        <Filter filter={filter}
          handleFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={filtere}
          handlerDelete={this.handlerDelete}
        />
      </div>
    );
  }
  
};
export default App
