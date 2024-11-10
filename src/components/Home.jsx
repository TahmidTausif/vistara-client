import { Link, useLoaderData } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Tooltip } from 'react-tooltip'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import { Helmet } from "react-helmet-async";
import Spot from "./Spot";
import Country from "./Country";
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
    const handleType = (count) => {
        // access word count number
        console.log(count)
    }

    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

    const details = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Vistara | Home</title>
            </Helmet>
            <div className="w-3/4 mx-auto h-96 mt-10
            ">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper rounded-xl shadow-xl"
                >
                    {
                        details.map(detail =>
                            <SwiperSlide key={detail._id} className="relative">
                                <img className="w-full h-96 md:h-96 lg:h-96 " src={detail.image}>

                                </img>
                                <div className="absolute top-2/3 left-10">
                                    <h1 className="text-5xl font-medium text-white">{detail.tourists_spot_name}</h1>
                                    <h3 className="text-3xl font-normal text-white">{detail.country_Name}</h3>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>

            <div className="card my-20 lg:card-side rounded-none  bg-base-100  mx-auto">
                <figure ><img className="mx-auto" src="https://i.ibb.co/tzs8cp6/langkawi.jpg" alt="Movie" /></figure>
                <div className="card-body w-[600px] text-center">
                    <h2 style={{ paddingTop: '5rem', fontWeight: 'normal' }} className="card-title mx-auto text-xl md:text-3xl lg:text-5xl text-center font-extrabold py-8">Life is simple{' '}
                        <span style={{ fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Eat', 'Sleep', 'Travel', 'Repeat!']}
                                loop={0 | false}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                onLoopDone={handleDone}
                                onType={handleType}
                            />
                        </span>
                    </h2>
                    <p className="text-center text-lg font-medium pb-8">Travel the world and explore new destinations.<br /> Join Us!</p>
                    <div className="card-actions justify-center">
                        <Tooltip anchorSelect=".my-anchor-element" place="top">
                            Explore new destinations
                        </Tooltip>
                        <Link
                            to='/all' className="my-anchor-element btn border-2 border-black text-black text-lg font-bold bg-transparent">Explore</Link>
                    </div>
                </div>
            </div>

            <div className="w-3/4 mx-auto my-20">
                <h2 className="text-5xl font-extrabold text-center"> Tourist Spots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mx-auto my-12">
                    {
                        details.map(detail => <Spot key={detail._id} detail={detail}></Spot>)
                    }
                </div>
            </div>

            <Country></Country>

            <div className="card py-8 my-20 w-[600px] bg-base-100  mx-auto">
                <div className="card-body text-center">
                    <h2 className="card-title mx-auto text-5xl text-center font-extrabold py-8">Join our Newsletter</h2>
                    <div className="join mx-auto">
                        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                        <button className="btn btn-primary join-item">Subscribe</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;