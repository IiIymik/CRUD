import { BASE_URL } from './constants';

async function fetchPersons() {
  try {
    const res = await fetch(`${BASE_URL}/person`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
}
};

async function fetchPersonById(personId) {
  try {
    const res = await fetch(`${BASE_URL}/person/${personId}`);
    const data = await res.json();
    return data;
  } catch {
    console.log(Error);
  }
};

fetchPersons();
fetchPersonById(2);
fetchPersonById(4);
