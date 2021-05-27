import { BASE_URL } from './constants';

function removePerson(personId) {
  const url = `${BASE_URL}/person/${personId}`;
  const options = {
    method: 'DELETE',
  };
  return fetch(url, options).then(res => res.json());
}

// removePerson(9);
// removePerson(11);