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

function addPerson(person) {
    const options = {
        "method": 'POST',
        "headers": {
            "Content-Type": 'application/json'
        },
        "body": JSON.stringify(person),
    };
    return fetch(`${BASE_URL}/person`, options).then(res=>res.json());
};

addPerson(newPerson);