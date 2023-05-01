
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../shared/Loading";
import useToken from "../../../hooks/useToken";


const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
   const [token] = useToken(user);
  const navigate = useNavigate();

   if (token) {
     navigate("/home");
   }
  let signInError;

  if (loading || updating) {
    return <Loading />;
  }

  if (error || updateError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || updateError?.message}</small>
      </p>
    );
  }

  const onSubmit = async (data) => {
   
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
   
   
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="lg:w-6/12 shadow-xl p-6">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="">
            <img
              className=""
              src="https://duruthemes.com/demo/html/florya/img/services/3.jpg"
              alt="alt"
            />
          </div>
          <div className="px-5">
            <h1 className="font-bold text-2xl">Signup</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-5">
                <div>
                  <label htmlFor="email">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border-2 border-gray-700 w-full rounded-sm p-2 mb-2"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is Required",
                      },
                    })}
                  />
                  <p>
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </p>
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="border-2 border-gray-700 w-full rounded-sm p-2 mb-2"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid Email",
                      },
                    })}
                  />
                  <p>
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </p>
                </div>

                <div>
                  <label className="mt-5" htmlFor="email">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Your Password"
                    className=" border-2 border-gray-700 w-full rounded-sm p-2 "
                    {...register("password", {
                      required: {
                        value: true,
                        message: "password is Required",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 characters or longer",
                      },
                    })}
                  />
                  <p>
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </p>
                </div>

                {signInError}

                <input
                  className="border-2 border-gray-700 w-full rounded-sm p-2 mt-4"
                  type="submit"
                  value="Signup"
                />
              </div>
            </form>
            <p className="mt-4">
              Already have an account?{" "}
              <Link className="text-red-500" to="/login">
                Please login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
