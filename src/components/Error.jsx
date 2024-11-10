import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="mx-auto mt-20">
                <Helmet>
                    <title>My List</title>
                </Helmet>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <div className="card-body text-center">
                        <h2 className="card-title mx-auto text-5xl text-center font-extrabold py-8">Oops!!!</h2>
                        <p className="text-center text-lg font-medium pb-8">Nothings Here To Show</p>
                        <div className="card-actions justify-center">
                            <Link to='/' className="btn btn-primary">Go Back Home</Link>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Error;