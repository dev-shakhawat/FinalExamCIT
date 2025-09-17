import React from 'react'
import Banner from '../components/common/Banner'
import Hero from '../components/customs/Hero'
import AllCategories from '../components/common/AllCategories'
import OurCourses from '../components/customs/OurCourses'
import PopularCourse from '../components/customs/PopularCourse'
import Static from '../components/customs/Static'
import Success from '../components/customs/Success'

export default function Home() {
  return (
    <div>
        
        {/* hero */}
        <Hero/>

        {/* banner ad */}
        <Banner/>

        {/* categories */}
        <AllCategories/>


        {/* our courses */}
        <OurCourses/>


        {/* static */}
        <Static/>


        {/* popular course */}
        <PopularCourse/>


        {/* success story */}
        <Success/>


    </div>
  )
}
