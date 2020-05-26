import SplashHero from '../components/splash/splash_hero'
import SplashWhyFlossbank from '../components/splash/splash_why_flossbank'
import SplashForBussinesses from '../components/splash/splash_for_businesses'
import Footer from '../components/common/footer'
import SplashHeader from '../components/splash/splash_header'
import SplashForDevelopers from '../components/splash/splash_for_developers'

function Splash () {
  const scrollWindow = (offset) => {
    window.scroll({
      top: offset,
      behavior: 'smooth'
    })
  }

  const scrollToId = (id) => {
    const $anchor = document.getElementById(id)
    console.log('here', $anchor, id)
    if (!$anchor) return
    const offset = $anchor.getBoundingClientRect().top + window.pageYOffset
    scrollWindow(offset)
  }

  const scrollToDeveloperSection = () => {
    scrollToId('forDevelopers')
  }

  const scrollToBusinessSection = () => {
    scrollToId('forBusinesses')
  }

  return (
    <>
      <SplashHeader />
      <SplashHero scrollToDeveloperSection={scrollToDeveloperSection}
                  scrollToBusinessSection={scrollToBusinessSection} />
      <SplashWhyFlossbank />
      <SplashForDevelopers id='forDevelopers' />
      <SplashForBussinesses id='forBusinesses' />
      <Footer />
    </>
  )
}

export default Splash
