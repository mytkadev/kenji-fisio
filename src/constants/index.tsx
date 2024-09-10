import logo9z from '../assets/images/logos/logo-9z.svg';
import logoCase from '../assets/images/logos/logo-case.svg';
import logoCleiteam from '../assets/images/logos/logo-cleiteam.svg';
import logoCnb from '../assets/images/logos/logo-cnb.svg';
import logoCorinthians from '../assets/images/logos/logo-corinthians.svg';
import logoFalkol from '../assets/images/logos/logo-falkol.svg';
import logoFla from '../assets/images/logos/logo-fla.svg';
import logoFx from '../assets/images/logos/logo-fx.svg';
import logoImperial from '../assets/images/logos/logo-imperial.svg';
import logoIntz from '../assets/images/logos/logo-intz.svg';
import logoLevelling from '../assets/images/logos/logo-levelling.svg';
import logoLiberty from '../assets/images/logos/logo-liberty.svg';
import logoLoops from '../assets/images/logos/logo-loops.svg';
import logoOpk from '../assets/images/logos/logo-opk.svg';
import logoPrg from '../assets/images/logos/logo-prg.svg';
import logoRed from '../assets/images/logos/logo-red.svg';
import logoTl from '../assets/images/logos/logo-tl.svg';
import logoTropikaos from '../assets/images/logos/logo-tropikaos.svg';

interface NavItemPTBR {
  label: string;
  href: string;
}
interface NavItemEN {
  label: string;
  href: string;
}

interface Testimonial {
  user: string;   team: string;
  image: string;
  text: string;
}

interface Teams {
  logo: string;
  name: string;
  start: number;
  end:number;
}

export const navItemsPTBR: NavItemPTBR[] = [
  { label: "Sobre", href: "#" },
  { label: "Matérias", href: "#" },
  { label: "Artigos", href: "#" },
  { label: "Podcasts", href: "#" },
  { label: "Depoimentos", href: "#" },
];
export const navItemsEN: NavItemEN [] = [
  { label: "About", href: "#" },
  { label: "Articles", href: "#" },
  { label: "Science", href: "#" },
  { label: "Podcasts", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials: Testimonial[] = [
  {
    user: "Fallen",
    team: "Stellar Solutions",
    image: "user1",
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Robô",
    team: "Blue Horizon Technologies",
    image: 'user2',
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life.",
  },
  {
    user: "Sacy",
    team: "Quantum Innovations",
    image: 'user3',
    text: "Working with thi   team was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
];

export const teams: Teams[] = [
  { logo: logo9z, 
    name: "9z Team",
    start: 2020,
    end: 2022,
  },
  { logo: logoCase, 
    name: "Case Esports",
    start: 2019,
    end: 2021,
  },
  { logo: logoCleiteam, 
    name: "Cleiteam",
    start: 2018,
    end: 2020,
  },
  { logo: logoCnb, 
    name: "CNB Esports",
    start: 2017,
    end: 2019,
  },
  { logo: logoCorinthians, 
    name: "Corinthians Esports",
    start: 2016,
    end: 2018,
  },
  { logo: logoFalkol, 
    name: "Falkol Esports",
    start: 2015,
    end: 2017,
  },
  { logo: logoFla, 
    name: "Flamengo Esports",
    start: 2014,
    end: 2016,
  },
  { logo: logoFx, 
    name: "Team FX",
    start: 2013,
    end: 2015,
  },
  { logo: logoImperial, 
    name: "Imperial Esports",
    start: 2012,
    end: 2014,
  },
  { logo: logoIntz, 
    name: "INTZ Esports",
    start: 2011,
    end: 2013,
  },
  { logo: logoLevelling, 
    name: "Levelling Esports",
    start: 2010,
    end: 2012,
  },
  { logo: logoLiberty, 
    name: "Liberty Esports",
    start: 2009,
    end: 2011,
  },
  { logo: logoLoops, 
    name: "Loops Esports",
    start: 2008,
    end: 2010,
  },
  { logo: logoOpk, 
    name: "OPK Esports",
    start: 2007,
    end: 2009,
  },
  { logo: logoPrg, 
    name: "PRG Esports",
    start: 2006,
    end: 2008,
  },
  { logo: logoRed, 
    name: "Red Canids",
    start: 2005,
    end: 2007,
  },
  { logo: logoTl, 
    name: "Team Liquid",
    start: 2004,
    end: 2006,
  },
  { logo: logoTropikaos, 
    name: "TropiKaos Esports",
    start: 2003,
    end: 2005,
  },
];