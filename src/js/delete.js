import { BASE_URL } from './constants';

async function removePerson(personId) {
  const url = `${BASE_URL}/person/${personId}`;
  const options = {
    method: 'DELETE',
  };
  try {
    const res = await fetch(url, options);
  const data = await res.json();
  return data;
  } catch (e) {
    console.log(e);
  }
}

removePerson(10);
// removePerson(11);