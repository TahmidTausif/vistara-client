import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Register = () => {

    const [showpassword, setShowpassword] = useState(false)
    useEffect(() => {
        AOS.init();
      }, [])

    const { createUser, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()

    console.log(createUser)
    const handleRegister = e => {
        e.preventDefault()
        const displayName = e.target.name.value;
        const photoURL = e.target.photo.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password, displayName, photoURL)

        if(password.length < 6){
            toast('Password must be atleast 6 characters');
            return
        }
        else if(!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)){
            toast('password must have uppercase and lowercase letters');
            return
        }

        createUser(email, password, displayName, photoURL)
            .then(() => {
                updateUser(displayName, photoURL)
                    .then(() => {
                        e.target.reset()
                        toast("Registration Successful")
                        navigate('/')
                    })
                    .catch(error => {
                        console.error(error)
                    })
            })
            .catch(error => {
                console.error(error)
            })



    }

    return (
        <div>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div  data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-offset="600" className="hero-content flex-col">
                    <div className="text-center py-4">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card-body shrink-0 w-full max-w-md shadow-2xl bg-base-100 rounded-2xl">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"
                                    name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text"
                                    name="photo" placeholder="Your Image URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    name="email" placeholder="Your Email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={showpassword ? "text" : "password"}
                                        name="password" placeholder="Your Password" className="input input-bordered" required />
                                    <span className="absolute top-1/3 right-2" onClick={() => setShowpassword(!showpassword)}>
                                        {
                                            showpassword ? <FaEyeSlash /> : <FaEye />
                                        }
                                    </span>
                                </div>
                                <label className="label">
                                    <p >Already have an account? <Link to="/login" className="label-text-alt link link-hover text-primary font-semibold text-lg">Login</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Register;