import apiClient from './client';

// Save email, name and hash to Database for DOI
export const emailToDoubleOptIn = (body) => apiClient.post('/', body);

// Get Secret from backend DOI
export const getSecretFromDb = (secret) =>
  apiClient.get(`/thankyou`, { params: { secret } });

// Finally subscribe user to Mailjet Marketing List
export const subscribeEmail = (body) => apiClient.post('/thankyou', body);
