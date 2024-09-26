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

// import Sacy from '../assets/images/loud-sacy-valorant-masters-copenhagen 1.jpg'
// import Fallen from '../assets/images/foto3 1.jpg'

interface NavItemPTBR {
  label: string;
  href: string;
}
interface NavItemEN {
  label: string;
  href: string;
}

interface TestimonialPT {
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

export const testimonials: TestimonialPT[] = [
  {
    user: "Fallen",
    team: "Time1, Time2, Time3, Time4, Time5",
    image: "",
    text: "“É Kenjão, a coisa tá séria hoje em dia hein, pessoal tá se preparando, quem me dera a 18 anos atrás quando comecei, já tivesse profissionais como o Kenji de olho no esporte eletrônico. Valeu Kenji, obrigado pela força“",
  },
  {
    user: "Sacy",
    team: "Time1, Time2, Time3, Time4, Time5",
    image: "",
    text: "“Quando estava na Turquia, o Kenji me ajudou, fez uma videocall comigo e depois fiquei colocando gelo três vezes por dia no pulso para aliviar a dor e jogar de boa [...] Pela upper final e final, a dor tava mais tranquila. Fui tratando, o Kenji foi me ajudando. Fiz alongamentos e exercícios e fui fortalecendo. Cheguei ontem a noite no Brasil e hoje de manhã já fui pro CT da LOUD, e o Kenji estava lá e fez um bagulho no meu braço que sumiu minha dor.”",
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