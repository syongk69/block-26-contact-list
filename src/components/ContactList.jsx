import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

const ContactList = ({ setSelectedContactId }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "http://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.log("Failed to fetch contacts");
      }
    }
    fetchContacts();
  }, []);

  const handleContactClick = (contactId) => {
    setSelectedContactId(contactId);
  };

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => {
          return (
            <ContactRow
              key={contact.id}
              contact={contact}
              setSelectedContactId={setSelectedContactId}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ContactList;
