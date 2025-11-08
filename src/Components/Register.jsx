import React, { useContext } from "react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { creatUser, signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(name, photoURL, email, password);
    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Register SuccessFully!",
          icon: "success",
          draggable: true,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
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
      .catch((error) => console.log(error));
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto my-7 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center mb-4">Register now!</h1>

        <form onSubmit={handleRegister} className="flex flex-col gap-3">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered"
            required
          />

          <label className="label">Photo URL</label>
          <input
            type="url"
            name="photoURL"
            placeholder="Photo URL"
            className="input input-bordered"
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered"
            required
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered"
            required
          />

          <button type="submit" className="btn btn-neutral mt-4">
            Register
          </button>

          <button onClick={handelSignInWithGoogle} className="btn btn-outline">
            <FcGoogle size={24} /> Sign In With Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
