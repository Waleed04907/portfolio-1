import React from 'react'
import HeroSection from "./components/HeroSection";
import FeaturedCourses from './components/FeaturedCourses';
import FeaturedWebinars from './components/ui/FeaturedWebinars';
import Whychooseus from './components/whychooseus';
const page = () => {
  return (
    <div>
    <HeroSection/>
    <FeaturedCourses/>
  <Whychooseus/>
  <FeaturedWebinars/>
    </div>
  )
}

export default page
