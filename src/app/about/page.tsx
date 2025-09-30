import CompanyFeedBack from '@/components/CompanyFeedBack'
import StatsCard from '@/components/StatsCard'
import TeamCard from '@/components/TeamCard'
import AboutPage from '@/pages/AboutPage'
import React from 'react'

function page() {
  return (
    <div>

    <AboutPage/>
    <StatsCard/>
    <TeamCard/>
    <CompanyFeedBack/>
    </div>
  )
}

export default page