import { useLoaderData } from "react-router-dom";
import Spots from "./Spots";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";



const AllList = () => {

    const primaryDetails = useLoaderData();
    const [detailsLists, setdetailsLists] = useState([]);
    const [details, setdetails] = useState([]);

    const handleDisplay = wishlist => {
        let sortedWishLists = [];

        if (wishlist === 'average cost') {
            sortedWishLists = detailsLists.slice().sort((a, b) => a.average_cost - b.average_cost);
        }

        setdetails(sortedWishLists);
    }
    useEffect(() => {
        
        
        setdetailsLists(primaryDetails);
        setdetails(primaryDetails);
    }, []);

    useEffect(() => {
        console.log(details);
    }, [details]);

    return (
        <div className="w-3/4 mx-auto my-20">
            <Helmet>
                <title>All Tourist List</title>
            </Helmet>
            <h2 className="text-5xl font-extrabold text-center">All Tourist Spots</h2>
            <div className="flex justify-center my-10">
                <details className="dropdown">
                    <summary className="m-1 bg-green-500 hover:bg-green-500 btn w-52 text-white text-lg font-semibold">Sort
                        <i className="fa-solid fa-chevron-down"></i>
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleDisplay('average cost')}><a>Rating</a></li>
                        
                    </ul>
                </details>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mx-auto my-12">
                {
                    details.map(detail => <Spots key={detail._id} detail={detail}></Spots>)
                }
            </div>
        </div>
    );
};

export default AllList;