import React, { useEffect } from 'react';
import Loading from '../../../shared/Loading';
import MakeAdmin from './MakeAdmin';
import { useQuery } from "react-query";


const AllUser = () => {
    
    
       const {
         data: users,
         isLoading,
         refetch,
       } = useQuery("users", () =>
         fetch("https://pandami.onrender.com/user", {
           method: "GET",
           headers: {
             authorization: `Bearer ${localStorage.getItem("accessToken")}`,
           },
         }).then((res) => res.json())
       );
       if (isLoading) {
      <Loading/>;
       }
 
   
     
   
    
    return (
      <div className="overflow-x-auto h-screen pt-8">
        <table className="table-auto w-full">
          <thead className="bg-red-500">
            <tr>
              <th className="px-4 py-2">Index</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>

            {users?.map((user,index) => (
              <MakeAdmin user={user} index={index} refetch={refetch}></MakeAdmin>
            ))
          }

          </tbody>
        </table>
      </div>
    );
};

export default AllUser;