import React, { useContext } from "react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Login Successful!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate("/"); // Redirect to home or desired route
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
        console.log(error);
      });
  };

  const handelSignInWithGoogle = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          title: "Signed in with Google!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate("/");
      })
      .catch((error) =>
        Swal.fire({
          title: "Google Sign-in Failed!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Ok",
        })
      );
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto my-7 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center mb-4">Login now!</h1>
        <form onSubmit={handelLogin} className="flex flex-col gap-3">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered"
            placeholder="Email"
            required
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input input-bordered"
            placeholder="Password"
            required
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
          <button
            type="button"
            onClick={handelSignInWithGoogle}
            className="btn btn-outline flex items-center justify-center gap-2"
          >
            <FcGoogle size={24} /> Sign In With Google
          </button>
        </form>

        <p className="text-center py-3">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
