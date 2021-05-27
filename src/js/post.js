import { BASE_URL } from './constants';

const newPerson = {
    "name": "'Vlad Shumkov'",
    "email": "'shereeanthony@kog.com'",
    "eyeColor": "'brown'",
    "friends": [
        "'Goldie Gentry'",
        " 'Briana Decker'"
    ],
    "isActive": true,
    "balance": 2764,
    "gender": "'female'",
};

async function addPerson(person) {
    const options = {
        "method": 'POST',
        "headers": {
            "Content-Type": 'application/json'
        },
        "body": JSON.stringify(person),
  };
  try {
  const res = await fetch(`${BASE_URL}/person`, options);
  const data = await res.json();
  return data;
  } catch (e) {
    console.log(e);
  }
};

addPerson(newPerson);