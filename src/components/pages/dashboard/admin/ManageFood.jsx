
import { useEffect, useState } from "react";
import { useDeleteFoodMutation} from "../../../../features/api/ApiSlice";
import Swal from "sweetalert2";

const ManageFood = () => {
  const [pageCount, setPageCount] = useState(0);
  const [product, setProduct] = useState([]);
  const [deleteFood] = useDeleteFoodMutation();
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
 
 


  

  const handleDeletefood = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Delete This Food",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
      deleteFood(id);
        Swal.fire("Deleted!", "Food has been deleted.", "success");
      }
    });
  };


// pagination

useEffect(()=>{
    fetch("http://localhost:5000/allfoodCount")
    .then((res) => res.json())
    .then((data) => {
      const count = data.count;
      const pages = Math.ceil(count / 10);
      setPageCount(pages);
    });
},[])

useEffect(()=>{
    fetch(`http://localhost:5000/allfood?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
       setProduct(data)
      });
},[page,size])




  return (
    <div className="overflow-x-auto h-screen pt-8">
      <div className="">
        <table className="table-auto w-full">
          <thead className="bg-red-500">
            <tr>
              <th className="px-4 py-2">Index</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Food-Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Food-Type</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {product?.map((food, index) => (
              <>
                <tr>
                  <th className="border px-4 py-2">{index + 1}</th>
                  <td className="border px-4 py-2">
                    <img className="h-12" src={food.fimg} alt="" />
                  </td>
                  <td className="border px-4 py-2">{food.fname}</td>
                  <td className="border px-4 py-2">{food.price} TK.</td>
                  <td className="border px-4 py-2">{food.ftype}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleDeletefood(food?._id)}
                      className="bg-red-500 px-2 rounded text-white"
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              </>
            ))}
            ;
          </tbody>
        </table>
      </div>

      <div className="    flex py-2 justify-center">
       
        {[...Array(pageCount).keys()].map((number) => (
          <div className={page === number ? "selected" : ""}>
            <button
              className="px-6 p-2 font-bold border-[1px]  mx-1 border-black "
              onClick={() => setPage(number)}
            >
              {number+1}
            </button>
          </div>
        ))}
     

      </div>
    </div>
  );
};

export default ManageFood;
