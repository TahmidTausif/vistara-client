import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const CountryDetails = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    const detail = useLoaderData()
    const { name } = useParams()
    console.log(name)
    const details = detail.filter(details => details.country_Name === name)
    return (
        <div className="w-3/4 mx-auto my-20">
            <Helmet>
                <title>Tourist List</title>
            </Helmet>
            <h2 className="text-5xl font-extrabold text-center">Tourist Spots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mx-auto my-12">
                {
                    details.map(detail => <div key={detail._id} data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" data-aos-offset="300" className="container mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        <div className="card bg-base-100 shadow-xl p-8">
                            <figure className=" rounded-2xl"><img className="w-auto h-80" src={detail.image} alt={detail.tourists_spot_name} /></figure>
                            <div className="flex justify-between">
                                <div className="pt-8 pb-4">
                                    <h2 className="card-title text-3xl font-extrabold">
                                        {detail.tourists_spot_name}
                                    </h2>
                                    <p className="text-lg font-bold">{detail.country_Name}</p>

                                </div>
                                <div className="pt-10 pb-4 ">
                                    <h2 className="card-title text-lg font-extrabold">{detail.seasonality}
                                    </h2>
                                    <p className="text-lg font-bold"> {detail.location} </p>

                                </div>
                            </div>
                            <div className="py-4 text-left">
                                <p className="card-title text-lg font-semibold">{detail.short_description}
                                </p>
                            </div>
                            <div className="pt-4 pb-10 text-right">
                                <h2 className="card-title text-xl font-extrabold">Cost :  ${detail.average_cost}
                                </h2>
                            </div>
                            <div className="flex justify-left">
                                <Link to={`/home/${detail._id}`} className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CountryDetails;