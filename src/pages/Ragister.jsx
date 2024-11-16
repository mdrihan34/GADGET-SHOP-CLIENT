import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useForm } from "react-hook-form";
import SocicalLogin from "../Compontes/login-registration/SocicalLogin";
import axios from "axios";
import Swal from "sweetalert2";

const Ragister = () => {
  const {createUser} = useAuth();
  const {user} = useAuth()
  const navigate = useNavigate()
  console.log(user)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // console.log(auth)
  const onSubmit = (data) => {
    const email = data.email
    const role = data.role
    const status = role === 'buyer' ? 'approved' : 'pending';
    const wishlist = []
    const userData = {email,role,status,wishlist}
    
    createUser(data.email, data.password)
    .then(()=>{
      axios.post('http://localhost:5000/users', userData).then(res=>{
       
       if(res.data.insertedId
       ){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registration successful!",
          showConfirmButton: false,
          timer: 1500
        });
         navigate('/')
       }
      })
    })
    
 
console.log(userData)
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm font-light">
                    Email is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500 text-sm font-light">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500 text-sm font-light">
                    Password must have at least 6 characters
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confam Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confam password"
                  className="input input-bordered"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => {
                      if (watch("password") != value) {
                        return "Your passwords do not match";
                      }
                    },
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm font-light">
                    Both password must match
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Role</span>
                </label>
                <select className="select select-bordered w-full max-w-xs"
                {...register('role', {required:true})}
                >
 
  <option value={'buyer'}>Buyer</option>
  <option value={'seller'}>Seller</option>
</select>
{errors.role && (
                  <p className="text-red-500 text-sm font-light">
                    You must selet a role
                  </p>
                )}
             
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Register</button>
              </div>
              <div>
                   <SocicalLogin></SocicalLogin>
              </div>
              <p className="my-4 text-black text-sm">
                Already have an account{" "}
                <Link className="text-blue-500 " to="/login">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ragister;
