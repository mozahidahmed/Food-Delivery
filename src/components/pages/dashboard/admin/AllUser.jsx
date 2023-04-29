import React, { useEffect } from 'react';
import { useGetAllUserQuery } from "../../../../features/api/apiSlice";

const AllUser = () => {
    const { data, isLoading, isSuccess, isError } = useGetAllUserQuery();
    console.log(data)
   
    
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
            {data?.map((user, index) => (
              <>
                <tr>
                  <th className="border px-4 py-2">{index + 1}</th>
                  
                  
                  <td className="border px-4 py-2">{user?.email} </td>
                  
                  <td className="border px-4 py-2">
                    <button
                      
                      className="bg-red-500 px-2 rounded text-white"
                    >
                      MakeAdmin
                    </button>
                  </td>
                </tr>
              </>
            ))}
            ;
          </tbody>
        </table>
      </div>
    );
};

export default AllUser;