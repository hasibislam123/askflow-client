import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';

const warehouseOptions = ['Warehouse A', 'Warehouse B', 'Warehouse C'];

const SendParcel = () => {
   const {
      register,
      handleSubmit,
      control } = useForm({
         defaultValues: { type: "Document" }
      });
   const { user } = useAuth();

   const axiosSecure = useAxiosSecure()
   const navigate = useNavigate();

   const serviceCenter = useLoaderData();

   const regionsDuplicate = serviceCenter.map(c => c.region);
   const regions = [...new Set(regionsDuplicate)];

   const senderRegion = useWatch({ control, name: "senderRegion" });
   const receiverRegion = useWatch({ control, name: "receiverRegion" });

   const districtsByRegion = region => {
      const regionDistricts = serviceCenter.filter(item => item.region === region);
      return regionDistricts.map(d => d.district);
   };

   const handelSendParcel = data => {
      console.log(data);

      const isDocument = data.pacelType === 'Document'
      const isSameDistrict = data.senderDistrict === data.receiverDistrict;
      const parcelWeight = parseFloat(data.parcelWeight)

      let cost = 0;
      if (isDocument) {
         cost = isSameDistrict ? 60 : 80;

      }
      else {
         if (parcelWeight <= 3) {
            cost = isSameDistrict ? 110 : 150;
         }
         else {
            const minCharge = isSameDistrict ? 110 : 150;
            const extraWeight = parcelWeight - 3;
            const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;
            cost = minCharge + extraCharge;
         }
      }
      console.log("cost", cost)
      data.cost = cost;

      Swal.fire({
         title: "Agree With the Cost ",
         text: `You Will be charged  ${cost}`,
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "I agree!"
      }).then((result) => {
         if (result.isConfirmed) {
            axiosSecure.post('/parcels', data)
               .then(res => {
                  console.log('after saveing parcel', res.data)
                  if (res.data.insertedId) {
                     navigate('/dashboard/my-parcels');
                     Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Parcel has been created. Please proceed to payment.',
                        showConfirmButton: false,
                        timer: 2500
                     });
                  }
               })
         }
      });
   };

   return (
      <div className='p-10 bg-white rounded-xl shadow-sm space-y-8 mt-5'>
         <h1 className='text-5xl font-extrabold'>Add Parcel</h1>
         <p className='text-xl font-bold text-gray-800'>Enter your parcel details</p>

         <form onSubmit={handleSubmit(handelSendParcel)} className="max-w-7xl mx-auto space-y-6">

            {/* Radio */}
            <div className="flex items-center gap-10">
               <label className="flex items-center gap-2 text-lg font-medium text-gray-700">
                  <input
                     type="radio"
                     value="Document"
                     {...register("pacelType")}
                     className="radio"
                     style={{ width: "20px", height: "20px", accentColor: "#00B140" }}
                  />
                  <span>Document</span>
               </label>

               <label className="flex items-center gap-2 text-lg font-medium text-gray-700">
                  <input
                     type="radio"
                     value="Not-Document"
                     {...register("pacelType")}
                     className="radio"
                     style={{ width: "20px", height: "20px", accentColor: "#D3D3D3" }}
                  />
                  <span>Not-Document</span>
               </label>
            </div>

            {/* Parcel Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                  <label className="font-semibold">Parcel Name</label>
                  <input {...register("parcelName")} className="input input-bordered w-full" placeholder="Parcel Name" />
               </div>

               <div>
                  <label className="font-semibold">Parcel Weight (KG)</label>
                  <input {...register("parcelWeight")} type="number" step="0.01" className="input input-bordered w-full" placeholder="Parcel Weight" />
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">

               {/* SENDER */}
               <div className="space-y-6">
                  <h2 className='text-xl font-bold text-gray-800 pt-2'>Sender Details</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div>
                        <label className="font-semibold">Sender Name</label>
                        <input {...register("senderName")} defaultValue={user?.displayName} className="input input-bordered w-full" />
                     </div>

                     <div>
                        <label className="font-semibold">Sender Pickup Warehouse</label>
                        <select {...register("senderWarehouse")} className="select select-bordered w-full">
                           <option value="">Select Wire house</option>
                           {warehouseOptions.map(w => <option key={w} value={w}>{w}</option>)}
                        </select>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div>
                        <label className="font-semibold">Address</label>
                        <input {...register("senderAddress")} className="input input-bordered w-full" />
                     </div>

                     <div>
                        <label className="font-semibold">Sender Contact No</label>
                        <input {...register("senderContact")} className="input input-bordered w-full" />
                     </div>
                  </div>

                  <div>
                     <label className="font-semibold">Sender Email</label>
                     <input {...register("senderEmail")} type="email" defaultValue={user?.email} className="input input-bordered w-full" placeholder="Sender Email" />
                  </div>

                  <div>
                     <label className="font-semibold">Sender Region</label>
                     <select {...register("senderRegion")} className="select select-bordered w-full">
                        <option value="">Select region</option>
                        {regions.map((r, i) => <option key={i} value={r}>{r}</option>)}
                     </select>
                  </div>

                  <div>
                     <label className="font-semibold">Sender District</label>
                     <select {...register("senderDistrict")} className="select select-bordered w-full">
                        <option value="">Select district</option>
                        {districtsByRegion(senderRegion)?.map((d, i) => <option key={i} value={d}>{d}</option>)}
                     </select>
                  </div>

                  <div>
                     <label className="font-semibold">Pickup Instruction</label>
                     <textarea {...register("pickupInstruction")} className="textarea textarea-bordered w-full h-24"></textarea>
                  </div>
               </div>

               {/* RECEIVER */}
               <div className="space-y-6">
                  <h2 className='text-xl font-bold text-gray-800 pt-2'>Receiver Details</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div>
                        <label className="font-semibold">Receiver Name</label>
                        <input {...register("receiverName")} className="input input-bordered w-full" />
                     </div>

                     <div>
                        <label className="font-semibold">Receiver Delivery Warehouse</label>
                        <select {...register("receiverWarehouse")} className="select select-bordered w-full">
                           <option value="">Select Wire house</option>
                           {warehouseOptions.map(w => <option key={w} value={w}>{w}</option>)}
                        </select>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div>
                        <label className="font-semibold">Receiver Address</label>
                        <input {...register("receiverAddress")} className="input input-bordered w-full" />
                     </div>

                     <div>
                        <label className="font-semibold">Receiver Contact No</label>
                        <input {...register("receiverContact")} className="input input-bordered w-full" />
                     </div>
                  </div>

                  <div>
                     <label className="font-semibold">Receiver Email</label>
                     <input {...register("receiverEmail")} type="email" className="input input-bordered w-full" placeholder="Receiver Email" />
                  </div>

                  <div>
                     <label className="font-semibold">Receiver Region</label>
                     <select {...register("receiverRegion")} className="select select-bordered w-full">
                        <option value="">Select region</option>
                        {regions.map((r, i) => <option key={i} value={r}>{r}</option>)}
                     </select>
                  </div>

                  <div>
                     <label className="font-semibold">Receiver District</label>
                     <select {...register("receiverDistrict")} className="select select-bordered w-full">
                        <option value="">Select district</option>
                        {districtsByRegion(receiverRegion)?.map((d, i) => <option key={i} value={d}>{d}</option>)}
                     </select>
                  </div>

                  <div>
                     <label className="font-semibold">Delivery Instruction</label>
                     <textarea {...register("deliveryInstruction")} className="textarea textarea-bordered w-full h-24"></textarea>
                  </div>
               </div>

            </div>

            <button className='btn bg-[#CAEB66] border-none px-10 text-lg'>
               Proceed to Confirm Booking
            </button>
         </form>
      </div>
   );
};

export default SendParcel;
