import React, {useContext} from 'react'
import Hero from "../components/Hero.jsx";
import LatestCollection from "../components/LatestCollection.jsx";
import BestSeller from "../components/BestSeller.jsx";
import Policy from "../components/Policy.jsx";
import Newsletter from "../components/Newsletter.jsx";


const Home = () => {
    return (
        <div>
            <Hero />
            <LatestCollection />
            <BestSeller />
            <Policy />
            <Newsletter />
        </div>
    )
}
export default Home
