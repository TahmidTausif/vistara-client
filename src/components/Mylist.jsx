import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Mylist = () => {

    const loadedDetail = useLoaderData();
    const [detail, setDetail] = useState(loadedDetail)

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              

              fetch(`https://b9a10-server-side-tahmid-tausif.vercel.app/touristSpot/${_id}`, {
                method: 'DELETE',
              })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
              })
              const remain = detail.filter(details => details._id !== _id);
              setDetail(remain)
            }
          });
          
    }
   

    const { user } = useContext(AuthContext);
    
    console.log(user)
    const userEmail = user.email;
    const details = detail.filter(details => details.email === userEmail)
    console.log(details)
    if (details.length > 0) {

        console.log(details)
        return (
            <div className="w-3/4 mx-auto mt-10 min-h-screen">
                <Helmet>
                    <title>My List</title>
                </Helmet>
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Country</th>
                                <th>Location</th>
                                <th>Cost</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                details.map(detail => <tr key={detail._id}>

                                    <td>{detail.tourists_spot_name}</td>
                                    <td>{detail.country_Name}</td>
                                    <td>{detail.location}</td>
                                    <td>{detail.average_cost}</td>
                                    <td className="flex gap-2">
                                        <Link to={`/update/${detail._id}`} className="btn hover:bg-blue-500 hover:text-white">Edit</Link>
                                        <button onClick={() => handleDelete(detail._id)} className="btn hover:bg-red-500 hover:text-white"><RiDeleteBinLine /></button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Country</th>
                                <th>Location</th>
                                <th>Cost</th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="mx-auto mt-20">
                <Helmet>
                    <title>My List</title>
                </Helmet>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-center font-extrabold">You Have No Tourist Spots to Show</h2>
                        <p className="text-center">Please add a Tourist Spot. Make sure to give the email you logged in with in the form.</p>
                        <div className="card-actions justify-center">
                            <Link to='/add' className="btn btn-primary">Add Tourist Spot</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


};

export default Mylist;