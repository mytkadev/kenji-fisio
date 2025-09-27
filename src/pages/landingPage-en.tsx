import NavbarEN from '../components/EN/navbar-en'
import HeroSectionEN from '../components/EN/heroSection-en'
import { ArticlesEN } from '../components/EN/articles-en'
import { AboutEN } from '../components/EN/about-en'
import { ResearchEN } from '../components/EN/research-en'
import { TestimonialsEN } from '../components/EN/testimonials-en'
import { ContactEN } from '../components/EN/contact-en'
import { PodcastsEN } from '../components/EN/podcasts-en'

export function LandingPageEN() {
    return (
      <>
      <div className="">
      <NavbarEN />
        <section id="home">
        <HeroSectionEN />
        </section>
        <section id="about">
        <AboutEN />
        </section>
        <section id="articles">
        <ArticlesEN />
        </section>
        <section id="research">
        <ResearchEN />
        </section>
        <section id="podcasts">
        <PodcastsEN />
        </section>
        <section id="testimonials">
        <TestimonialsEN />
        </section>
        <section id="contact">
        <ContactEN />
        </section>
      </div>
      </>
    )
  }
  