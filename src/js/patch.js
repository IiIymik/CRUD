import { BASE_URL } from './constants';

async function updatePersonById(update, personId) {
  const optins = {
    method: 'PATCH',
    headers: {
      'Content_Type': "application/json",
    },
    body: JSON.stringify(update),
  };
  try {
    const res = await fetch(`${BASE_URL}/person/${personId}`, optins);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// updatePersonById({ "eyeColor": "yelow" }, 5);