import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";

import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

const Login = () => {
    const [showpassword, setShowpassword] = useState(false)

    useEffect(() => {
        AOS.init();
    }, [])


    const { loginUser, signInWithGit, signInWithGoogle } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(signInWithGoogle)
    const handleLogIn = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        if (password.length < 6) {
            toast('Password must be atleast 6 characters');
            return
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
            toast('password must have uppercase and lowercase letters');
            return
        }

        loginUser(email, password)
            .then(result => {
                console.log(result)
                toast('Sign in successful')
                e.target.reset()
                navigate(location?.state || '/')
            })
            .catch(error => {
                console.error(error)
            })
    }
    const HandleGitHub = () => {
        signInWithGit()
            .then(result => {
                console.log(result)
                toast('Sign in successful')
                navigate(location?.state || '/')
            })
            .catch(error => {
                console.error(error)
            })
    }
    const HandleGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result)
                toast('Sign in successful')
                navigate(location?.state || '/')
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" data-aos-offset="500" className="hero-content flex-col">
                    <div className="text-center py-4">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card-body shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-2xl">
                        <form onSubmit={handleLogIn}>
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
                                    <p >New Here? <Link to="/register" className="label-text-alt link link-hover text-primary font-semibold text-lg">Register</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="text-center">
                            <p className="font-semibold text-lg"> or </p>
                        </div>
                        <div className="flex justify-around gap-4 items-center">
                            <button onClick={HandleGoogle} className="btn text-lg font-bold text-primary bg-slate-300"> Google </button>
                            <button onClick={HandleGitHub} className="btn text-lg font-bold text-primary bg-slate-300"> GitHub </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;