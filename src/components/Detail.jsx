import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const Detail = () => {

    const detail = useLoaderData()
    const { id } = useParams()
    console.log(id)
    const details = detail.find(details => details._id === id)
    const { image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear} = details


    return (
        <div className="w-3/4 mx-auto">
            <Helmet>
                <title>Estate Details</title>
            </Helmet>
            <div className="card shadow-xl lg:card-side grid grid-cols-1 md:grid-cols-2 bg-base-100 my-20">
                <div className="col-span-1 ml-10 rounded-xl">
                    <figure className="mt-10"><img className="w-auto h-96" src={image} alt="Album" /></figure>
                </div>
                <div className="col-span-1 card-body">
                    <h2 className="card-title text-5xl pb-5">{tourists_spot_name}</h2>
                    <h3 className="font-semibold text-xl"> {country_Name}</h3>
                    <div className="border-t-2 border-b-2 border-gray-400 my-4 py-4 flex">
                        <p className="w-20 text-gray-400 font-bold">Best time to visit: </p>
                        <p className="font-bold text-xl">{seasonality}</p>
                    </div>
                    <div>
                        <p><span className="font-bold">Description:</span> {short_description}</p>
                    </div>

                    <div className="my-4">
                        <div className="flex py-2 gap-10">
                            <p className="w-20 text-gray-400 font-bold">Travel time:</p>
                            <p className="font-bold">{travel_time}</p>
                        </div>
                        <div className="flex py-2 gap-10">
                            <p className="w-20 text-gray-400 font-bold">Total visitors per year:</p>
                            <p className="font-bold">{totalVisitorsPerYear}</p>
                        </div>
                        <div className="flex py-2 gap-10">
                            <p className="w-44 text-gray-400 font-bold">Location:</p>
                            <p className="font-bold">{location}</p>
                        </div>
                        <div className="flex py-2 gap-10">
                            <p className="w-20 text-gray-400 font-bold">Average Cost: </p>
                            <p className="font-bold">{average_cost}</p>
                        </div>

                    </div>
                    <div className="card-actions justify-start">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;