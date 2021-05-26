import { BASE_URL } from './constants';

function fetchPersons() {
    return fetch(`${BASE_URL}/person`).then(res => res.json());
};

function fetchPersonById(personId) {
return fetch(`${BASE_URL}/person/${personId}`).then(res => res.json())
};

fetchPersons();
fetchPersonById(2);
fetchPersonById(4);
