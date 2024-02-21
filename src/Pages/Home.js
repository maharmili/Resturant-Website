import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Link } from 'react-router-dom'
import Banner from '../Images/banner.jpeg'
import "../Styles/HomeStyle.css"

const Home = () => {
  return (
    <Layout>
        <div className='home' style={{backgroundImage:`url(${Banner})`}}>
          <div className='headerContainer'>
            <h1>Welcome to our Food Hub</h1>
            {/* <p>Best Food In India</p> */}
            {/* <p>Experience the Finest Flavors from Across India</p> */}
            <p>Discover the Best Flavors of India</p>
            <Link to="/menu">
            <button>
              ORDER NOW
            </button>
            </Link>
           </div>
 </div>
</Layout>
  )
}

export default Home