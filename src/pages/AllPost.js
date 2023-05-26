import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader";

const AllPost = () => {
  const petsUrl = `https://pet-adoption-platform-server.vercel.app/pets`;
  const {
    isLoading,
    error,
    data: pets,
    refetch
  } = useQuery({
    queryKey: ["pets"],
    queryFn: () => fetch(petsUrl).then((res) => res.json()),
  });

  if (isLoading) return <Loader/>

  if (error) return "An error has occurred: " + error.message;

  const handleDelete = (pr) => {
    const agree = window.confirm(`Are you sure to delete ${pr.name}`);
    if (agree) {
      fetch(`https://pet-adoption-platform-server.vercel.app/myposts/${pr._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.error(`${pr.name} deleted successfully!`);
            refetch();
          }
        });
    }
  };
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-pink-500  text-2xl md:text-4xl font-extrabold">
        All Pets
      </h2>
      <div className="overflow-x-auto w-full mt-5">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Pet</th>
              <th>Owner Information</th>
              <th>Contact</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet) => (
              <tr key={pet._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={pet.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{pet.name}</div>
                      <div className="text-sm opacity-50">{pet.genre}</div>
                      <div className="text-sm opacity-50">{pet.price}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {pet.ownerEmail}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {pet.ownerNumber}
                  </span>
                </td>
                <td>
                  {pet.postTime}{" "}
                  <br/>
                  <span className="badge badge-ghost badge-sm">
                    {pet.location}
                  </span>
                </td>
                <td>
                  {pet.isPaid ? <p className="btn btn-success btn-xs">Paid</p> : <p className="btn btn-error btn-xs">Un Paid</p>}
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

export default AllPost;
