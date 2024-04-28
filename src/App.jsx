import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './config/firebase';
import ContactCard from './components/ContactCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [value, setValue] = useState('');

  const handleFilter = (inputValue) => {
    setValue(inputValue);
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef,(snapshot)=>{
          const contactsList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          setContacts(contactsList);
          setFilteredContacts(contactsList); // Initialize filtered contacts with all contacts
        })
        
      } catch (error) {
        console.error("Error fetching contacts: ", error);
      }
    };
    getContacts();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Search onChange={handleFilter}/>
        <div className='bg-white m-4 rounded-md '>
          {filteredContacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact}/>
          ))}
        </div>
        <ToastContainer/>
      </div>
    </>
  );
};

export default App;
