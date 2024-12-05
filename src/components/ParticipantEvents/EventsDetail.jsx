// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import CopyButton from "../EventOnboarding/utils/CopyButton";
// import FormattedDate from "../EventOnboarding/utils/FormattedDate";
// import axios from "axios";
// import cryptoRandom from "crypto-random-string";

// const EventsDetail = () => {
//   const { id } = useParams();
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const p = cryptoRandom({ length: 10, type: "alphanumeric" });
//   const secureId = cryptoRandom({ length: 10, type: "alphanumeric" });
//   const pId = cryptoRandom({ length: 10, type: "url-safe" });
//   const postSecureId = cryptoRandom({ length: 10, type: "numeric" });

//   useEffect(() => {
//     const fetchApi = async () => {
//       try {
//         const response = await axios.get(
//           `https://tesract-server.onrender.com/event/${id}`
//         );
//         setData(response.data.data);
//         console.log(response.data.data);

//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchApi();
//   }, []);
//   if (loading) {
//     return (
//       <>
//         <div
//           role="status"
//           className="max-w md:m-10 m-5 p-4 space-y-4 border  divide-y  rounded shadow animate-pulse divide-gray-700 md:p-6 border-gray-700"
//         >
//           <div className="flex items-center justify-between">
//             <div>
//               <div className="h-2.5  rounded-full bg-gray-600 w-24 mb-2.5"></div>
//               <div className="w-32 h-2  rounded-full bg-gray-700"></div>
//             </div>
//             <div className="h-2.5  rounded-full bg-gray-700 w-12"></div>
//           </div>
//           <div className="flex items-center justify-between pt-4">
//             <div>
//               <div className="h-2.5  rounded-full bg-gray-600 w-24 mb-2.5"></div>
//               <div className="w-32 h-2  rounded-full bg-gray-700"></div>
//             </div>
//             <div className="h-2.5  rounded-full bg-gray-700 w-12"></div>
//           </div>
//           <div className="flex items-center justify-between pt-4">
//             <div>
//               <div className="h-2.5  rounded-full bg-gray-600 w-24 mb-2.5"></div>
//               <div className="w-32 h-2  rounded-full bg-gray-700"></div>
//             </div>
//             <div className="h-2.5  rounded-full bg-gray-700 w-12"></div>
//           </div>
//           <div className="flex items-center justify-between pt-4">
//             <div>
//               <div className="h-2.5  rounded-full bg-gray-600 w-24 mb-2.5"></div>
//               <div className="w-32 h-2  rounded-full bg-gray-700"></div>
//             </div>
//             <div className="h-2.5  rounded-full bg-gray-700 w-12"></div>
//           </div>
//           <div className="flex items-center justify-between pt-4">
//             <div>
//               <div className="h-2.5  rounded-full bg-gray-600 w-24 mb-2.5"></div>
//               <div className="w-32 h-2  rounded-full bg-gray-700"></div>
//             </div>
//             <div className="h-2.5  rounded-full bg-gray-700 w-12"></div>
//           </div>
//           <span className="sr-only">Loading...</span>
//         </div>
//       </>
//     );
//   }
//   return (
//     <>
//       {data && (
//         <>
//           <header>
//             <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
//               <div className="sm:flex sm:items-center sm:justify-center">
//                 <div className="text-center">
//                   <h1 className="mt-1.5 text-4xl sm:text-4xl font-semibold tracking-tight leading-tight  text-indigo-600">
//                     {data.eventName}
//                   </h1>
//                   <p className="mt-1.5 text-xs text-gray-200">
//                     ✨Amazing isn't it✨
//                   </p>
//                   <p className="mt-1.5 text-xs text-gray-200">
//                     Want to know more about the event? 🤔
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </header>
//           <div className="flow-root rounded-lg border  py-3 shadow-sm border-gray-700 mx-7 sm:mx-28">
//             <dl className="-my-3 divide-y  text-sm divide-gray-700">
//               <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
//                 <dt className="font-medium  text-white">What event ? 🤔</dt>
//                 <dd className=" sm:col-span-2 text-gray-200">
//                   {data.eventName}
//                 </dd>
//               </div>

//               <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
//                 <dt className="font-medium  text-white">
//                   Who is Conducting ❓❓
//                 </dt>
//                 <dd className=" sm:col-span-2 text-gray-200">
//                   {data.eventHostedBy}
//                 </dd>
//               </div>

//               <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
//                 <dt className="font-medium  text-white">Where 📍</dt>
//                 <dd className=" sm:col-span-2 text-gray-200">
//                   {data.eventVenue}
//                 </dd>
//               </div>
//               <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
//                 <dt className="font-semibold  text-white">
//                   Location 📌 (Google Maps Link)
//                 </dt>
//                 <dd className=" sm:col-span-2 text-gray-100">
//                   <>{<CopyButton text={data.eventVenueUrl} />}</>
//                 </dd>
//               </div>
//               <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
//                 <dt className="font-medium  text-white">When ? 🕓</dt>
//                 <dd className=" sm:col-span-2 text-gray-200">
//                   <FormattedDate dateString={data.eventDate} />
//                 </dd>
//               </div>

//               <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
//                 <dt className="font-medium  text-white">How much? 💸</dt>
//                 <dd className=" sm:col-span-2 text-gray-200">
//                   {data.eventPrice == 0 ? "FREE" : <>₹{data.eventPrice}</>}
//                 </dd>
//               </div>
//               <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
//                 <dt className="font-medium  text-white">
//                   Last Date to apply ? 🎇
//                 </dt>
//                 <dd className=" sm:col-span-2 text-gray-200">
//                   <FormattedDate dateString={data.eventLastDate} />
//                 </dd>
//               </div>

//               <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
//                 <dt className="font-medium  text-white">Why this event ?</dt>
//                 <dd className=" sm:col-span-2 text-gray-200">
//                   {data.eventDescription}
//                 </dd>
//               </div>
//             </dl>
//           </div>
//           <div className="flex justify-center">
//             {data.eventStaus === true ? (
//               <>
//                 <Link
//                   to={`/event/secure/v3/${p}/${secureId}/${pId}/${id}/${postSecureId}`}
//                   className="flex bg-indigo-600 px-5 py-3 text-center text-sm font-semibold text-gray-100 transition-transform transform hover:bg-indigo-700 hover:scale-105 hover:shadow-lg hover:text-white rounded-3xl my-10 items-center justify-center"
//                 >
//                   Reserve your seat Now!!
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <span className="flex bg-indigo-600 px-5 py-3 text-center text-sm font-semibold text-gray-100 transition-transform transform hover:bg-indigo-700 hover:scale-105 hover:shadow-lg hover:text-white rounded-3xl my-10 items-center justify-center opacity-50 cursor-not-allowed">
//                   Oops the registrations are closed 😔
//                 </span>
//               </>
//             )}
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default EventsDetail;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CopyButton from "../EventOnboarding/utils/CopyButton";
import FormattedDate from "../EventOnboarding/utils/FormattedDate";
import axios from "axios";
import cryptoRandom from "crypto-random-string";

const EventsDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const p = cryptoRandom({ length: 10, type: "alphanumeric" });
  const secureId = cryptoRandom({ length: 10, type: "alphanumeric" });
  const pId = cryptoRandom({ length: 10, type: "url-safe" });
  const postSecureId = cryptoRandom({ length: 10, type: "numeric" });

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(
          `https://tesract-server.onrender.com/event/${id}`
        );
        setData(response.data.data);
        console.log(response.data.data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, [id]);

  if (loading) {
    return (
      <div
        role="status"
        className="max-w md:m-10 m-5 p-4 space-y-4 border  divide-y  rounded shadow animate-pulse divide-gray-700 md:p-6 border-gray-700"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="h-2.5  rounded-full bg-gray-600 w-24 mb-2.5"></div>
            <div className="w-32 h-2  rounded-full bg-gray-700"></div>
          </div>
          <div className="h-2.5  rounded-full bg-gray-700 w-12"></div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="h-2.5  rounded-full bg-gray-600 w-24 mb-2.5"></div>
            <div className="w-32 h-2  rounded-full bg-gray-700"></div>
          </div>
          <div className="h-2.5  rounded-full bg-gray-700 w-12"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  const isEventClosed = new Date(data.eventLastDate) < new Date();

  return (
    <>
      {data && (
        <>
          <header>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
              <div className="sm:flex sm:items-center sm:justify-center">
                <div className="text-center">
                  <h1 className="mt-1.5 text-4xl sm:text-4xl font-semibold tracking-tight leading-tight text-indigo-600">
                    {data.eventName}
                  </h1>
                  <p className="mt-1.5 text-xs text-gray-200">
                    ✨Amazing isn't it✨
                  </p>
                  <p className="mt-1.5 text-xs text-gray-200">
                    Want to know more about the event? 🤔
                  </p>
                </div>
              </div>
            </div>
          </header>
          <div className="flow-root rounded-lg border py-3 shadow-sm border-gray-700 mx-7 sm:mx-28">
            <dl className="-my-3 divide-y text-sm divide-gray-700">
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-white">What event ? 🤔</dt>
                <dd className="sm:col-span-2 text-gray-200">
                  {data.eventName}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-white">
                  Who is Conducting ❓❓
                </dt>
                <dd className="sm:col-span-2 text-gray-200">
                  {data.eventHostedBy}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-white">Where 📍</dt>
                <dd className="sm:col-span-2 text-gray-200">
                  {data.eventVenue}
                </dd>
              </div>
              <div
                className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4 cursor-pointer"
                onClick={() => window.open(data.eventVenueUrl, "_blank")}
              >
                <dt className="font-semibold text-white">
                  Location 📌 (Google Maps Link)
                </dt>
                <dd className="sm:col-span-2 text-gray-100 flex items-center">
                  {/* Button with a link icon */}
                  <button className="flex items-center px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M10 9l5-5 5 5M15 4h4a2 2 0 0 1 2 2v4m-3 3h3a2 2 0 0 1 2 2v4m-3-3l-5 5-5-5M9 20H5a2 2 0 0 1-2-2v-4m3-3H3a2 2 0 0 1-2-2v-4" />
                    </svg>
                    Open in Google Maps
                  </button>
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-white">When ? 🕓</dt>
                <dd className="sm:col-span-2 text-gray-200">
                  <FormattedDate dateString={data.eventDate} />
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-white">How much? 💸</dt>
                <dd className="sm:col-span-2 text-gray-200">
                  {data.eventPrice === 0 ? "FREE" : `₹${data.eventPrice}`}
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-white">
                  Last Date to apply ? 🎇
                </dt>
                <dd className="sm:col-span-2 text-gray-200">
                  <FormattedDate dateString={data.eventLastDate} />
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-white">Why this event ?</dt>
                <dd className="sm:col-span-2 text-gray-200">
                  {data.eventDescription}
                </dd>
              </div>
            </dl>
          </div>
          <div className="flex justify-center">
            {data.eventStaus === true && !isEventClosed ? (
              <Link
                to={`/event/secure/v3/${p}/${secureId}/${pId}/${id}/${postSecureId}`}
                className="flex bg-indigo-600 px-5 py-3 text-center text-sm font-semibold text-gray-100 transition-transform transform hover:bg-indigo-700 hover:scale-105 hover:shadow-lg hover:text-white rounded-3xl my-10 items-center justify-center"
              >
                Reserve your seat Now!!
              </Link>
            ) : (
              <span className="flex bg-indigo-600 px-5 py-3 text-center text-sm font-semibold text-gray-100 transition-transform transform hover:bg-indigo-700 hover:scale-105 hover:shadow-lg hover:text-white rounded-3xl my-10 items-center justify-center opacity-50 cursor-not-allowed">
                Oops the registrations are closed 😔
              </span>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default EventsDetail;
