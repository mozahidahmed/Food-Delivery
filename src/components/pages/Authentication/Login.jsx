
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../shared/Loading";

const LogIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

  if (user) {
    console.log(user);
  }

  let signInError;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message}</small>
      </p>
    );
  }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
    navigate("/home");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-6/12 shadow-xl p-6">
        <div className="grid grid-cols-2">
          <div className="bg-red-500">
            <img
              className=""
              src=""
              alt="fgd"
            />
          </div>
          <div className="px-5 mt-5">
            <h1 className="font-bold text-2xl">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-5">
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className=" border-2 border-gray-700 w-full rounded-sm p-2 mb-2"
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
                  value="Login"
                />
              </div>
            </form>
            <p className="text-bold mt-5 text-center">
              New to Quick Bites?{" "}
              <Link className="text-red-500" to="/register">
                Create New Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
