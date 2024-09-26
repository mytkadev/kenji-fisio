import Navbar from '../components/PT/navbar-pt'
import HeroSection from '../components/PT/heroSection-pt'
import { AboutPT } from '../components/PT/about-pt'
import { ArticlesPT  } from '../components/PT/articles-pt'
import { ResearchPT } from '../components/PT/research-pt'
import { PodcastsPT } from '../components/PT/podcasts-pt'
import { TestimonialsPT } from '../components/PT/testimonials-pt'
import { ContactPT } from '../components/PT/contact-pt'


export function LandingPagePTBR() {
    return (
      <>
      <div className="">
        <Navbar />
        <HeroSection />
        <AboutPT />
        <ArticlesPT />
        <ResearchPT />
        <PodcastsPT />
        <TestimonialsPT />
        <ContactPT />
      </div>
      </>
    )
  }
  