import NavbarEN from '../components/EN/navbar-en'
import HeroSectionEN from '../components/EN/heroSection-en'
import { ArticlesEN } from '../components/EN/articles-en'
import { AboutEN } from '../components/EN/about-en'
import { ResearchEN } from '../components/EN/research-en'
import { TestimonialsEN } from '../components/EN/testimonials-en'
import { ContactEN } from '../components/EN/contact-en'

export function LandingPageEN() {
    return (
      <>
      <div className="">
      <NavbarEN />
        <HeroSectionEN />
        <AboutEN />
        <ArticlesEN />
        <ResearchEN />
        <p>podcasts</p>
        <TestimonialsEN />
        <ContactEN />
      </div>
      </>
    )
  }
  