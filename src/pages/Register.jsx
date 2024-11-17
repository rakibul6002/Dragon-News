import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

export default function Register() {

const {creaateNewUser,setUser} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        console.log({name,photo,email,password});

        creaateNewUser(email,password)
        .then(result=>{
            const user= result.user;
            setUser(user);
            // console.log(user);
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
            
          });
        
    }
  return (
    <div className=" min-h-screen flex items-center justify-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">Register your account</h2>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input 
                        name="name"
                        type="text" 
                        placeholder="name" 
                        className="input input-bordered" 
                        required 
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input 
                        name="photo"
                        type="text" 
                        placeholder="name" 
                        className="input input-bordered" 
                        required 
                    />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input 
                    name="email"
                    type="email" 
                    placeholder="email" 
                    className="input input-bordered" 
                    required 
                />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input 
                    name="password"
                    type="password" 
                    placeholder="password" 
                    className="input input-bordered" 
                    required 
                />
                <div className="form-control">
                    <label className="label cursor-pointer ">
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <span className="label-text">Accept Term & Conditions</span>
                    </label>
                </div>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-neutral rounded-none">Login</button>
                </div>
            </form>
            <p className="text-center font-semibold"> Already Have An Account ? <Link className="text-red-500" to={"/auth/login"}>Log In</Link></p>
        </div>
    </div>
  )
}
