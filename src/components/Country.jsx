import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Country = () => {
    const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch('https://b9a10-server-side-tahmid-tausif.vercel.app/country')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDetails(data);
      });
  }, []);
    console.log(details)
    return (
        <div className="w-3/4 mx-auto my-20">
            <h2 className="text-5xl font-extrabold text-center"> Countries</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mx-auto my-12">
                {
                    details.map(detail => <Link to={`/country/${detail.name}`}  key={detail._id} className="card w-[450px] md:w-[400px]  mx-auto bg-base-100 shadow-xl image-full">
                    <figure><img src={detail.image} alt="Shoes" /></figure>
                    <div className="card-body ">
                      <h2 className="card-title pt-10 font-extrabold text-4xl">{detail.name}</h2>
                      <p>{detail.description}</p>
                    </div>
                  </Link>)
                }
            </div>
        </div>
    );
};

export default Country;