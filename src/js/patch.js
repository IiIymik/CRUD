import { BASE_URL } from './constants';

function updatePersonById(update, personId) {
  const optins = {
    method: 'PATCH',
    headers: {
      'Content_Type': "application/json",
    },
    body: JSON.stringify(update),
  };

  return fetch(`${BASE_URL}/person/${personId}`, optins)
    .then(res => res.json);
};

updatePersonById({ "eyeColor": "brown" }, 5);