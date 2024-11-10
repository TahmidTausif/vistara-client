import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Spots = ({ detail }) => {

    useEffect(() => {
        AOS.init();
    }, [])

    const { _id, image, tourists_spot_name, average_cost, seasonality, travel_time, totalVisitorsPerYear} = detail
    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aos-offset="300" className="container mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="card bg-base-100 shadow-xl p-8">
                <figure className=" rounded-2xl"><img className="w-auto h-80" src={image} alt={tourists_spot_name} /></figure>
                <div className="flex justify-between">
                    <div className="pt-8 pb-4">
                        <h2 className="card-title text-3xl font-extrabold">
                            {tourists_spot_name}
                        </h2>
                        <p className="text-lg font-bold">{travel_time}</p>

                    </div>
                    <div className="pt-10 pb-4 ">
                        <h2 className="card-title text-lg font-extrabold">{seasonality}
                        </h2>
                        <p className="text-lg font-bold">Visitor/year: {totalVisitorsPerYear} </p>

                    </div>
                </div>
                <div className="pt-4 pb-10 text-right">
                    <h2 className="card-title text-xl font-extrabold">Cost :  ${average_cost}
                    </h2>
                    

                </div>
                <div className="flex justify-left">
                    <Link to={`/home/${_id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

Spots.propTypes = {
    detail: PropTypes.node
}

export default Spots;