import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleToggle = e => {
        if(e.target.checked){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    }

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.error(error)
            })
    }
    const navlink = <>
        <li className="pr-4"><NavLink to="/">Home</NavLink></li>
        <li className="pr-4"><NavLink to="/all">All Tourists Spot</NavLink></li>
        {
            user && <>
                <li className="pr-4"><NavLink to="/add">Add Tourists Spot</NavLink></li>
                <li className="pr-4"><NavLink to="/mylist">My List</NavLink></li>
            </>
        }

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlink}
                    </ul>
                </div>
                <a className="btn btn-ghost font-extrabold text-2xl">Vistara</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlink}
                </ul>
            </div>

            <div className="navbar-end gap-4">
                {
                    user && <div className="tooltip tooltip-bottom" data-tip={user?.displayName || "user"}>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full tooltip" >

                                <img alt="Tailwind CSS Navbar component" src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />


                            </div>
                        </div>
                    </div>
                }
                {
                    user ? <a className="btn" onClick={handleLogOut}>Log Out</a> : <>
                        <Link to="/login" className="btn">Log In</Link>
                        <Link to="/register" className="btn">Sign In</Link>
                    </>
                }
                <div>
                    <label className="cursor-pointer grid place-items-center">
                        <input type="checkbox" onChange={handleToggle} className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;