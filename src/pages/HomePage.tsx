import Colaboration from '../components/home/Colaboration'
import { Hero } from '../components/home/Hero'
import Layout from '../layout/Layout'
import LastPosts from '../components/home/LastPost'
import { FirstExperience } from '../components/home/FirstExperience'
import Newsletter from '../components/home/NewLetter'
import { Organization } from '../components/home/Organization'

export const HomePage = () => {
  return (
    <Layout>
      <div className='p-4 md:p-10'>
        <Hero />
        <Colaboration />
      </div>
      <LastPosts />
      <FirstExperience />
      <Newsletter/>
      <Organization/>
    </Layout>
  )
}
