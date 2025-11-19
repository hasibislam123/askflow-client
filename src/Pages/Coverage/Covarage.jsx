import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';
import { useRef } from 'react';

const Covarage = () => {
   const position = [23.6850, 90.3563];
   const serviceCenters = useLoaderData();
   const MapRef = useRef(null);

   const SearchHandler = e => {
      e.preventDefault();
      const location = e.target.location.value;
      const district = serviceCenters.find(c => c.district.toLowerCase().includes(location.toLowerCase()));
      if (district) {
         const coord = [district.latitude, district.longitude];
         MapRef.current.flyTo(coord, 15);
      }
   };

   return (
      <div>
         <h2 className="text-4xl text-secondary font-extrabold">We are available in 64 districts</h2>

         <form className="max-w-xl p-4 md:p-8" onSubmit={SearchHandler}>
            <div className="flex items-stretch rounded-full overflow-hidden border-2 border-gray-100 shadow-md">
               <div className="flex items-center px-4 text-gray-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
               </div>

               <input
                  name="location"
                  type="text"
                  placeholder="Search here"
                  className="flex-grow py-3 px-4 text-base text-gray-700 focus:outline-none placeholder-gray-400"
               />

               <button
                  type="submit"
                  className="flex items-center justify-center px-6 md:px-8 py-3 bg-[#CAEB66] text-[#1F1F1F] font-bold text-base transition duration-200 hover:bg-[#99db5a] focus:outline-none"
               >
                  Search
               </button>
            </div>
         </form>

         <div className="border w-full h-[700px]">
            <MapContainer
               center={position}
               zoom={7}
               scrollWheelZoom={false}
               className="h-[700px]"
               ref={MapRef}
            >
               <TileLayer
                  attribution="&copy; OpenStreetMap contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />

               {serviceCenters.map((center, index) => (
                  <Marker key={index} position={[center.latitude, center.longitude]}>
                     <Popup>
                        <strong>{center.district}</strong><br />
                        Service Area: {center.covered_area.join(', ')}
                     </Popup>
                  </Marker>
               ))}
            </MapContainer>
         </div>
      </div>
   );
};

export default Covarage;
