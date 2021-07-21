// import { getOffers } from '../services/apiClient/offers';

// const Test = (allIds) => {
//   console.log('allids', allIds);

//   return (
//     <div>
//       <div className="bg-gray-100 text-center rounded-b text-teal-darkest px-2 py-3 shadow-md h-screen">
//         <div className="w-5/6 lg:w-4/6 xl:w-3/6 mx-auto mt-4">
//           <p className="text-xl font-bold md:px-20 lg:px-32 xl:px-44">
//             TEST
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export async function getStaticProps() {
//   const allIds = getOffers()
//     .then((res) => {
//       setOffers(res.data);
//     })
//     .catch((error) => {
//       setErrors(error.name);
//     });

//   console.log('fuckallids', allIds);

//   return {
//     props: {
//       allIds,
//     },
//   };
// }

// export default Test;
