import apiClient from './client';

export const getOffers = () => apiClient.get('/');

export const getOffer = (id) => apiClient.get(`/esports-offer/${id}`);

export const createCheckoutSession = ({ teamLogo, ...body }) => {
  const config = { headers: { 'Content-Type': 'multipart/form-data' } };
  const formData = new FormData();
  // append the whole body to formData (note that you can't console log it!)
  Object.keys(body).forEach((fieldName) => {
    formData.append(fieldName, body[fieldName]);
  });
  // then append the image
  formData.append('teamLogo', teamLogo);
  return apiClient.post('/esports-offer/create-checkout-session', formData, config);
};

export const editOffer = (id, body) => {
  const config = { headers: { 'Content-Type': 'multipart/form-data' } };
  const formData = new FormData();
  Object.keys(body).forEach((fieldName) => {
    formData.append(fieldName, body[fieldName]);
  });
  return apiClient.put(`/esports-offer/${id}`, formData, config);
};

export const deleteOffer = (id) => apiClient.delete(`/esports-offer/${id}`, { params: { id } });

// export const offerFilterByGame = (game, id) => apiClient.get(`/esports-offer/${game}`, id);

// export const offerFilterByLocation = (location, id) => apiClient.get(`/esports-offer/${location}`, id);

// export const offerFilterByTeam = (team, id) => apiClient.get(`/esports-offer/${team}`, id);
