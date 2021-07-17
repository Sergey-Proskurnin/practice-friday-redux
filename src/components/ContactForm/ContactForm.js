import React from 'react'; //при закоментированом варианте нужно сюда дописать { Component }
import style from '../ContactForm/contactForm.module.css';
import { connect } from 'react-redux';
import { addContact } from '../../redux/phoneBook/phonebook-operations';

const ContactForm = ({
  onSetName,
  onAddContact,
  name,
  number,
  addContact,
  reset,
}) => {
  const handleAddContact = e => {
    e.preventDefault();
    const contact = {
      name,
      number,
    };
    addContact(contact);
    reset();
  };

  return (
    <form className={style.form} onSubmit={handleAddContact}>
      <label style={{ marginBottom: '10px' }}>
        Name
        <input
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          placeholder="Enter contact name"
          required
          onInput={onSetName}
          // onChange={options.handleChange}
        />
      </label>
      <label className={style.labelPhone}>
        Phone
        <input
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          placeholder="Enter contact phone"
          required
          onInput={onSetName}
          // onChange={options.handleChange}
        />
      </label>
      <button type="submit" className={style.button}>
        Отправить
      </button>
    </form>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    addContact: contact => dispatch(addContact(contact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

// import shortid from 'shortid';

// class ContactForm extends Component {
//   state = {
//     name: '',
//     tel: '',
//   };
//   nameInputId = shortid.generate();
//   telInputId = shortid.generate();

//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   // formSubmitHandler = data => {
//   //   console.log(data);
//   // };

//   reset = () => {
//     this.setState({ name: '', tel: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} style={{ display: 'grid' }}>
//         <label htmlFor={this.nameInputId} style={{ marginBottom: '10px' }}>
//           Name
//           <input
//             value={this.state.name}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             placeholder="Enter contact name"
//             required
//             onChange={this.handleChange}
//             id={this.nameInputId}
//           />
//         </label>
//         <label htmlFor={this.telInputId}>
//           Phone
//           <input
//             value={this.state.tel}
//             type="tel"
//             name="tel"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             placeholder="Enter contact phone"
//             required
//             onChange={this.handleChange}
//             id={this.telInputId}
//           />
//         </label>
//         <button type="submit" style={{ width: '300px' }}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
