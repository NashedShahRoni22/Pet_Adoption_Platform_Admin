import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../components/Loader';
import { toast } from 'react-hot-toast';

const AllReviews = () => {
    const bookingsUrl = `https://pet-adoption-platform-server.vercel.app/myreviews`;
  const {
    isLoading,
    error,
    data: bookings,
    refetch
  } = useQuery({
    queryKey: ["mybookings"],
    queryFn: () => fetch(bookingsUrl).then((res) => res.json()),
  });

  if (isLoading) return <Loader/>

  if (error) return "An error has occurred: " + error.message;

  const handleDelete = (pr) => {
    const agree = window.confirm(`Are you sure to delete ${pr.petName}`);
    if (agree) {
      fetch(`https://pet-adoption-platform-server.vercel.app/reviews/${pr._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.error(`${pr.petName} deleted successfully!`);
            refetch();
          }
        });
    }
  };
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-pink-500  text-2xl md:text-4xl font-extrabold">
        All Reviews
      </h2>
      <div className="overflow-x-auto w-full mt-5">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Pet</th>
              <th>User Information</th>
              <th>Review</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((pet) => (
              <tr key={pet._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={pet.petImg}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{pet.petName}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {pet.userName}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {pet.userEmail}
                  </span>
                </td>
                <td>
                  {pet.reviewMsg}
                </td>
                <th>
                  <button className="btn btn-error btn-xs" onClick={()=> handleDelete(pet)}>
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllReviews;