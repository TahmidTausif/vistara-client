import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const Add = () => {

    // tourists_spot_name
    // c. country_Name
    // d. location
    // e. short description
    // f. average_cost
    // g. seasonality - like summer, winter
    // h. travel_time => like- 7 days
    // i. totaVisitorsPerYear => like- 10000
    // j. User Email
    // k. User Name

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const image = form.image.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.country_Name.value
        const location = form.location.value
        const short_description = form.short_description.value
        const average_cost = form.average_cost.value
        const seasonality = form.seasonality.value
        const travel_time = form.travel_time.value
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value
        const email = form.email.value
        const name = form.names.value

        const newAdd = { image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, email, name }
        console.log(newAdd)

        fetch('https://b9a10-server-side-tahmid-tausif.vercel.app/touristSpot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAdd)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                toast('Tourists spot Added Successfully')
            }
        })

    }

    return (
        <div>
            <Helmet>
                <title>Add Tourist spot</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card mt-20 py-10 shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="text-center py-4">
                            <h1 className="text-5xl font-bold">Add a Tourists Spot!</h1>
                        </div>
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="text" placeholder="Image URL" className="input input-bordered" name="image" required />
                                </div>

                            </div>
                            <div className="flex gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Tourists Spot Name</span>
                                    </label>
                                    <input type="text" placeholder="Tourists Spot Name" className="input input-bordered" name="tourists_spot_name" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Country Name</span>
                                    </label>
                                    <input type="text" placeholder="Country Name" name="country_Name" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Location</span>
                                    </label>
                                    <input type="text" placeholder="location" className="input input-bordered" name="location" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">short description</span>
                                    </label>
                                    <input type="text" placeholder="short description" className="input input-bordered" name="short_description" required />
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Average Cost</span>
                                    </label>
                                    <input type="text" placeholder="Average Cost" className="input input-bordered" name="average_cost" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">seasonality</span>
                                    </label>
                                    <input type="text" placeholder="seasonality" className="input input-bordered" name="seasonality" required />
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Travel Time</span>
                                    </label>
                                    <input type="text" placeholder="Travel Time" className="input input-bordered" name="travel_time" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Total Visitors Per Year</span>
                                    </label>
                                    <input type="text" placeholder="Total Visitors Per Year" className="input input-bordered" name="totalVisitorsPerYear" required />
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Email</span>
                                    </label>
                                    <input type="email" placeholder="User Email" className="input input-bordered" name="email" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Name</span>
                                    </label>
                                    <input type="text" placeholder="User Name" className="input input-bordered" name="names" required />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Add Tourists Spot</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;