import { useState, useEffect } from "react";

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchSelectedContact() {
      try {
        const response = await fetch(
          `http://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.log("Failed to fetch the selected contact");
      }
    }
    fetchSelectedContact();
  }, [selectedContactId]);

  console.log("Selected Contact: ", contact);

  return (
    <div>
      {contact ? (
        <>
          <h2>{contact.name}</h2>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
        </>
      ) : (
        <p>Loading selected contact...</p>
      )}
      <button onClick={() => setSelectedContactId(null)}>Back to List</button>
    </div>
  );
};

export default SelectedContact;
