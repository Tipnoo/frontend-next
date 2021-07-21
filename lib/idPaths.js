import { getOfferIds } from '../services/apiClient/offers';

export default async function getAllOfferIds() {
  const allOffers = await getOfferIds();
  console.log('all OFFERS ID', allOffers);

  return allOffers.map((offerId) => ({
    params: {
      id: offerId,
    },
  }));
}
