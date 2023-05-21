import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useGetRestaurantsQuery } from "../../../../features/api/apiSlice";
import Loading from "../../../shared/Loading";

const Restaurants = () => {
  const navigate = useNavigate();

  const { data, isLoading } = useGetRestaurantsQuery();

  if (isLoading) {
    // console.log("loading--");
    return <Loading/>
    
  }
  // if (isSuccess) {
  //   console.log(data);
  // }

  return (
    <div>
      <h1 className="text-center text-3xl py-2 font-bold text-[#333333]">
        CHOOSE FROM MOST POPULAR RESTAURANTS
      </h1>
      <div className="grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2  px-16 py-6 gap-10 mt-5">
        {data?.map((data) => (
          <>
            <div
              className="card shadow-xl"
              onClick={() => navigate(`/restaurantfood/${data._id}`)}
            >
              <img src={data.resimg} alt="" />
              <div className="mt-2 p-2">
                <div className="flex justify-between items-center">
                  <h1 className="font-bold">{data.resname}</h1>
                  <div className="flex gap-2 items-center">
                    <AiFillStar className="text-yellow-500"></AiFillStar>
                    <p>{data.rank}</p>
                  </div>
                </div>
                <h1>{data.location}</h1>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
