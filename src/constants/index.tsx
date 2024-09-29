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

import draft5 from '../assets/images/authors/draft5.png'
import valorantZone from '../assets/images/authors/valorantZone.png'
import theEnemy from '../assets/images/authors/theEnemy.png'
import espn from '../assets/images/authors/espn.png'
import maiseSports from '../assets/images/authors/maisEsports.png'
import multiversoMais from '../assets/images/authors/multiverso.png'
import millenium from '../assets/images/authors/millenium.png'
import uol from '../assets/images/authors/uol.png'
import sbt from '../assets/images/authors/sbt.png'
import canaltech from '../assets/images/authors/canaltech.png'
import loleSports from '../assets/images/authors/lolesports.png'
import geGlobo from '../assets/images/authors/geglobo.png'
import baseRush from '../assets/images/authors/baserush.png'
import theClutch from '../assets/images/authors/theclutch.png'
import bts from '../assets/images/authors/bts.png'
import esportsNet from '../assets/images/authors/esportsNet.png'
import pichau from '../assets/images/authors/pichau.png'
import gameArena from '../assets/images/authors/gameArena.png'

import theEnemyArticleImg from '../assets/images/articles/theenemyArticle.jpg'
import uolArticleImg from '../assets/images/articles/uolArticle.jpg'
import espnArticleImg from '../assets/images/articles/espnArticle.jpeg'
import maiseSportsSacyArticleImg from '../assets/images/articles/maiseSportsSacyArticle.jpg'
import vzSacyArticleImg from '../assets/images/articles/vzSacyArticle.jpg'
import canalTechArticleImg from '../assets/images/articles/canaltechArticle.webp'
import espnCNBArticleImg from '../assets/images/articles/espnCnbArticle.jpeg'
import geArticleImg from '../assets/images/articles/geArticle.webp'
import uolObsArticleImg from '../assets/images/articles/uolObsArticle.jpg'
import baseRushArticleImg from '../assets/images/articles/baserushArticle.png'
import theClutchArticleImg from '../assets/images/articles/thecluthArticle.webp'
import milleniumArticleImg from '../assets/images/articles/milleniumArticle.png'
import lolArticleImg from '../assets/images/articles/lolEsportsArticle.webp'
import vzSpaccaArticleImg from '../assets/images/articles/vzSpaccaArticle.png'
import eSportsNetArticleImg from '../assets/images/articles/esportsNetArticle.jpg'
import pichauArticleImg from '../assets/images/articles/pichauArticle.png'
import gameArenaArticleImg from '../assets/images/articles/gameArenaArticle.jpg'
import draft5ArticleImg from '../assets/images/articles/draft5Article.jpg'
import vzArticleImg from '../assets/images/articles/vzArticle.jpg'
import maiseSportsMobileArticleImg from '../assets/images/articles/maiseSportsMobileArticle.jpg'
import multiModalidadesArticleImg from '../assets/images/articles/multiModalidadesArticle.avif'
import milleniumLoudArticle from '../assets/images/articles/milleniumLoudArticle.webp'
import sbtArticleImg from '../assets/images/articles/sbtArticle.webp'
import multiversoTendiniteArticleImg from '../assets/images/articles/mulltiversoTendiniteArticle.jpeg'
import multiversoPreparacaoArticleImg from '../assets/images/articles/multiversoPreparacaoArticle.jpg'
import multiversoPandemiaArticleImg from '../assets/images/articles/multiversoPandemiaArticle.jpg'
import espnKeniaArticleImg from '../assets/images/articles/espnKeniaArticle.webp'
import baseRushLesoesArticleImg from '../assets/images/articles/baseRushLesoesArticle.png'

import thumbpodcastCNB from '../assets/images/podcasts/cnbPodcastImg.jpg'
import thumbpodcastDecretoTV1 from '../assets/images/podcasts/decretoPodcastImg1.jpg'
import thumbpodcastDecretoTV2 from '../assets/images/podcasts/decretoPodcastImg2.jpg'
import thumbpodcastFlowGames from '../assets/images/podcasts/flowgamesPodcastImg.jpg'
import thumbpodcastGameArena from '../assets/images/podcasts/gamearenaPodcastImg.jpg'
import thumbpodcastGalera from '../assets/images/podcasts/glresportclubPodcastImg.jpg'
import thumbpodcastKhaos from '../assets/images/podcasts/khaosPodcastImg.jpg'
import thumbpodcastMackPlay from '../assets/images/podcasts/mackplayPodcastImage.jpg'
import thumbpodcastOPlano from '../assets/images/podcasts/oplanocastPodcastImg.jpg'
import thumbpodcastX from '../assets/images/podcasts/podcastxPodcastImg.jpg'

interface NavItemPTBR {
  label: string;
  href: string;
}

interface NavItemEN {
  label: string;
  href: string;
}

interface Teams {
  logo: string;
  name: string;
  start: number;
  end:number;
}

interface ArticlesPT {
  href: string;
  img: string;
  title: string;
  authorLogo: string;
  authorName: string;
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

export const articlespt: ArticlesPT[] = [
    {
      href: "https://draft5.gg/noticia/fisioterapeuta-compartilha-rotina-utilizada-por-fallen-para-se-preparar-para-campeonatos",
      img: draft5ArticleImg,
      title: "Fisioterapeuta compartilha rotina utilizada por FalleN para se preparar para campeonatos",
      authorLogo: draft5,
      authorName: "Draft5"
    },
    {
      href: "https://valorantzone.gg/noticia/fisioterapeuta-da-liberty-explica-quais-lesoes-mais-comuns-em-jogadores/",
      img: vzArticleImg,
      title: "Fisioterapeuta da Liberty explica quais lesões mais comuns em jogadores",
      authorLogo: valorantZone,
      authorName: "ValorantZone"
    },
    {
      href: "https://www.theenemy.com.br/esports/csgo-fisioterapeuta-trata-fallen-e-garante-pronto-para-o-major",
      img: theEnemyArticleImg,
      title: 'CS:GO: Fisioterapeuta trata FalleN e garante: "Pronto para o Major"',
      authorLogo: theEnemy,
      authorName: "The Enemy"
    },
    {
      href: "https://www.espn.com.br/esports/artigo/_/id/6870786/fisioterapia-nos-esports-como-o-cenario-esta-cuidando-da-prevencao-a-lesoes-dos-jogadores",
      img: espnArticleImg,
      title: "Fisioterapia nos esports: como o cenário está cuidando da prevenção a lesões dos jogadores",
      authorLogo: espn,
      authorName: "ESPN"
    },
    {
      href: "https://maisesports.com.br/fisioterapeutas-dicas-postura-jogadores-mobile/",
      img: maiseSportsMobileArticleImg,
      title: "Fisioterapeutas dão dicas de postura para jogadores mobile",
      authorLogo: maiseSports,
      authorName: "Mais Esports"
    },
    {
      href: "https://multiversomais.com/artigos/fisioterapia-nos-esports-diferenca-de-lesoes-de-cada-modalidade",
      img: multiModalidadesArticleImg,
      title: "Fisioterapia nos esports: Diferença de lesões de cada modalidade",
      authorLogo: multiversoMais,
      authorName: "Multiverso Mais"
    },
    {
      href: "https://br.millenium.gg/noticias/8414.html",
      img: milleniumLoudArticle,
      title: "Por dentro da LOUD: como é e como funciona a estrutura para os atletas da organização",
      authorLogo: millenium,
      authorName: "Millenium"
    },
    {
      href: "https://www.uol.com.br/start/ultimas-noticias/2020/08/27/como-proteger-as-maos-para-jogar-melhor-no-frio-especialista-da-dicas.htm",
      img: uolArticleImg,
      title: "Como esquentar as mãos para jogar melhor no frio? Especialista dá dicas",
      authorLogo: uol,
      authorName: "UOL"
    },
    {
      href: "https://maisesports.com.br/valorant-champions-2022-sacy-revela-que-lesionou-pulso-em-madrid/",
      img: maiseSportsSacyArticleImg,
      title: "Valorant Champions 2022: Sacy revela que lesionou pulso em Madrid",
      authorLogo: maiseSports,
      authorName: "Mais Esports"
    },
    {
      href: "https://valorantzone.gg/noticia/sacy-revela-que-jogou-o-champions-com-o-pulso-lesionado/",
      img: vzSacyArticleImg,
      title: "Sacy revela que jogou o Champions com o pulso lesionado",
      authorLogo: valorantZone,
      authorName: "Valorant Zone"
    },
    {
      href: "https://www.sbt.com.br/variedades/sbt-games/fiquepordentro/141559-fisioterapeutas-e-psicologos-do-esports-se-enfrentam-em-amistoso-de-lol",
      img: sbtArticleImg,
      title: "Fisioterapeutas e Psicólogos do esports se enfrentam em amistoso de LoL",
      authorLogo: sbt,
      authorName: "SBT"
    },
    {
      href: "https://canaltech.com.br/esports/masters-berlin-havan-liberty-investe-em-treinamento-fisico-para-pro-players-195615/",
      img: canalTechArticleImg,
      title: "Masters Berlin: Havan Liberty investe em treinamento físico para pro players",
      authorLogo: canaltech,
      authorName: "Canaltech"
    },
    {
      href: "https://ge.globo.com/esports/valorant/noticia/valorant-masters-berlin-conheca-medicos-e-rotina-havan-liberty.ghtml",
      img: geArticleImg,
      title: "Valorant Masters Berlin: Conheça médicos e rotina Havan Liberty",
      authorLogo: geGlobo,
      authorName: "Globo"
    },
    {
      href: "https://multiversomais.com/artigos/tudo-que-voce-precisa-saber-sobre-tendinite-nos-esports",
      img:multiversoTendiniteArticleImg,
      title: "Tudo que você precisa saber sobre Tendinite nos eSports",
      authorLogo: multiversoMais,
      authorName: "Multiverso Mais"
    },
    {
      href: "https://www.espn.com.br/esports/artigo/_/id/3986970/com-tecnico-estrangeiro-cnb-apresenta-nova-comissao-tecnica-da-equipe-de-league-of-legends",
      img: espnCNBArticleImg,
      title: "Com técnico estrangeiro, CNB apresenta nova comissão técnica da equipe de League of Legends",
      authorLogo: espn,
      authorName: "ESPN"
    },
    {
      href: "https://multiversomais.com/artigos/importancia-do-treino-fisico-e-mental-para-conquistar-um-bom-resultado",
      img: multiversoPreparacaoArticleImg,
      title: "Importância do treino físico e mental para conquistar um bom resultado",
      authorLogo: multiversoMais,
      authorName: "Multiverso Mais"
    },
    {
      href: "https://multiversomais.com/artigos/pratica-de-exercicio-fisico-em-meio-a-pandemia",
      img: multiversoPandemiaArticleImg,
      title: "Prática de exercício físico em meio a pandemia",
      authorLogo: multiversoMais,
      authorName: "Multiverso Mais"
    },
    {
      href: "https://observatoriodegames.uol.com.br/noticias/comissao-tecnica-da-loud-garante-preparacao-para-finais-da-lbff",
      img: uolObsArticleImg,
      title: "Comissão técnica da LOUD garante preparação para finais da LBFF",
      authorLogo: uol,
      authorName: "UOL | Observatório de Games"
    },
    {
      href: "https://baserush.com.br/entrevista-vitor-kenji-2021-fisioterapia-esports/",
      img: baseRushArticleImg,
      title: "Fisioterapeuta Vitor Kenji sobre lesões: “a dor faz parte da rotina deles”",
      authorLogo: baseRush,
      authorName: "Base Rush"
    },
    {
      href: "https://theclutch.com.br/rainbowsix/vitor-kenji-fisioterapeuta/",
      img: theClutchArticleImg,
      title: "Bate-papo com Vitor Kenji, fisioterapeuta de esports de Team Liquid e Prodigy",
      authorLogo: theClutch,
      authorName: "The Clutch"
    },
    {
      href: "https://br.millenium.gg/noticias/3741.html",
      img: milleniumArticleImg,
      title: "Fisioterapeuta da Liquid e PRG revela as lesões mais comuns em jogadores",
      authorLogo: millenium,
      authorName: "Millenium"
    },
    {
      href: "https://lolesports.com/article/diabetes-e-tendinite-fisioterapeuta-explica-o-caso-uzi/bltc6ce8cf5935ea3dd",
      img: lolArticleImg,
      title: "Diabetes e tendinite: fisioterapeuta explica o caso Uzi",
      authorLogo: loleSports,
      authorName: "LoL Esports"
    },
    {
      href: "https://www.espn.com.br/esports/artigo/_/id/7968493/kenia-toledo-conta-mentalidade-por-tras-do-grupo-fallen-todos-sao-jogadores-de-alto-nivel",
      img: espnKeniaArticleImg,
      title: "Kenia Toledo conta mentalidade por trás do grupo Fallen: Todos são jogadores de alto nível",
      authorLogo: espn,
      authorName: "ESPN"
    },
    {
      href: "https://btsbrasil.tv/esports/fisioterapia-quais-sao-as-lesoes-mais-comuns-nos-esports-e-como-evita-las/",
      img: espnArticleImg,
      title: "Fisioterapia: Quais são as lesões mais comuns nos eSports e como evitá-las?",
      authorLogo: bts,
      authorName: "BTS Brasil"
    },
    {
      href: "https://baserush.com.br/protecao-contra-lesoes-esports/",
      img: baseRushLesoesArticleImg,
      title: "Como se proteger contra lesões comuns nos Esports",
      authorLogo: baseRush,
      authorName: "Base Rush"
    },
    {
      href: "https://valorantzone.gg/noticia/valorant-trouxe-uma-valorizacao-para-profissionais-de-outras-areas-comenta-spacca/",
      img: vzSpaccaArticleImg,
      title: '"Valorant trouxe uma valorização para profissionais de outras áreas", comenta Spacca',
      authorLogo: valorantZone,
      authorName: "Valorant Zone"
    },
    {
      href: "https://www.esports.net/br/noticias/saude-nos-esports-especialistas-dao-dicas/",
      img: eSportsNetArticleImg,
      title: "Saúde nos esports: especialistas da LOUD, MiBR, Vivo Keyd e outros times dão dicas de como ter mais performance",
      authorLogo: esportsNet,
      authorName: "Esports.net"
    },
    {
      href: "https://www.pichauarena.com.br/esports/vitor-kenji-esports-fisio/",
      img: pichauArticleImg,
      title: "Fisioterapia e eSports com Vitor Kenji: O cuidado essencial para os gamers",
      authorLogo: pichau,
      authorName: "Pichau Arena"
    },
    {
      href: "https://gamearena.gg/esports/valorant/recompensar-coach-team-leveling-kenji",
      img: gameArenaArticleImg,
      title: 'VALORANT: "recompensar ele", diz coach da Team Leveling sobre homenagem à Kenji',
      authorLogo: gameArena,
      authorName: "Game Arena"
    }
  ];
  
  export const articlesen: ArticlesPT[] = [
    {
      href: "https://draft5.gg/noticia/fisioterapeuta-compartilha-rotina-utilizada-por-fallen-para-se-preparar-para-campeonatos",
      img: draft5ArticleImg,
      title: "Physiotherapist shares routine used by FalleN to prepare for tournaments",
      authorLogo: draft5,
      authorName: "Draft5",
    },
    {
      href: "https://valorantzone.gg/noticia/fisioterapeuta-da-liberty-explica-quais-lesoes-mais-comuns-em-jogadores/",
      img: vzArticleImg,
      title: "Liberty's physiotherapist explains the most common injuries in players",
      authorLogo: valorantZone,
      authorName: "ValorantZone",
    },
    {
      href: "https://www.theenemy.com.br/esports/csgo-fisioterapeuta-trata-fallen-e-garante-pronto-para-o-major",
      img: theEnemyArticleImg,
      title: 'CS:GO: Physiotherapist treats FalleN and ensures: "Ready for the Major"',
      authorLogo: theEnemy,
      authorName: "The Enemy",
    },
    {
      href: "https://www.espn.com.br/esports/artigo/_/id/6870786/fisioterapia-nos-esports-como-o-cenario-esta-cuidando-da-prevencao-a-lesoes-dos-jogadores",
      img: espnArticleImg,
      title: "Physiotherapy in esports: how the scene is taking care of players' injury prevention",
      authorLogo: espn,
      authorName: "ESPN",
    },
    {
      href: "https://maisesports.com.br/fisioterapeutas-dicas-postura-jogadores-mobile/",
      img: maiseSportsMobileArticleImg,
      title: "Physiotherapists give posture tips for mobile players",
      authorLogo: maiseSports,
      authorName: "Mais Esports",
    },
    {
      href: "https://multiversomais.com/artigos/fisioterapia-nos-esports-diferenca-de-lesoes-de-cada-modalidade",
      img: multiModalidadesArticleImg,
      title: "Physiotherapy in esports: Injury differences in each modality",
      authorLogo: multiversoMais,
      authorName: "Multiverso Mais",
    },
    {
      href: "https://br.millenium.gg/noticias/8414.html",
      img: milleniumLoudArticle,
      title: "Inside LOUD: how the structure for the organization's athletes works",
      authorLogo: millenium,
      authorName: "Millenium",
    },
    {
      href: "https://www.uol.com.br/start/ultimas-noticias/2020/08/27/como-proteger-as-maos-para-jogar-melhor-no-frio-especialista-da-dicas.htm",
      img: uolArticleImg,
      title: "How to warm up your hands to play better in the cold? Specialist gives tips",
      authorLogo: uol,
      authorName: "UOL",
    },
    {
      href: "https://maisesports.com.br/valorant-champions-2022-sacy-revela-que-lesionou-pulso-em-madrid/",
      img: maiseSportsSacyArticleImg,
      title: "Valorant Champions 2022: Sacy reveals he injured his wrist in Madrid",
      authorLogo: maiseSports,
      authorName: "Mais Esports",
    },
    {
      href: "https://valorantzone.gg/noticia/sacy-revela-que-jogou-o-champions-com-o-pulso-lesionado/",
      img: vzSacyArticleImg,
      title: "Sacy reveals he played Champions with an injured wrist",
      authorLogo: valorantZone,
      authorName: "Valorant Zone",
    },
    {
      href: "https://www.sbt.com.br/variedades/sbt-games/fiquepordentro/141559-fisioterapeutas-e-psicologos-do-esports-se-enfrentam-em-amistoso-de-lol",
      img: sbtArticleImg,
      title: "Physiotherapists and Psychologists from esports face off in a friendly LoL match",
      authorLogo: sbt,
      authorName: "SBT",
    },
    {
      href: "https://canaltech.com.br/esports/masters-berlin-havan-liberty-investe-em-treinamento-fisico-para-pro-players-195615/",
      img: canalTechArticleImg,
      title: "Masters Berlin: Havan Liberty invests in physical training for pro players",
      authorLogo: canaltech,
      authorName: "Canaltech",
    },
    {
      href: "https://ge.globo.com/esports/valorant/noticia/valorant-masters-berlin-conheca-medicos-e-rotina-havan-liberty.ghtml",
      img: geArticleImg,
      title: "Valorant Masters Berlin: Meet the doctors and Havan Liberty's routine",
      authorLogo: geGlobo,
      authorName: "Globo",
    },
    {
      href: "https://multiversomais.com/artigos/tudo-que-voce-precisa-saber-sobre-tendinite-nos-esports",
      img: multiversoTendiniteArticleImg,
      title: "Everything you need to know about Tendinitis in eSports",
      authorLogo: multiversoMais,
      authorName: "Multiverso Mais",
    },
    {
      href: "https://www.espn.com.br/esports/artigo/_/id/3986970/com-tecnico-estrangeiro-cnb-apresenta-nova-comissao-tecnica-da-equipe-de-league-of-legends",
      img: espnCNBArticleImg,
      title: "With a foreign coach, CNB presents the new technical staff of the League of Legends team",
      authorLogo: espn,
      authorName: "ESPN",
    },
    {
      href: "https://multiversomais.com/artigos/importancia-do-treino-fisico-e-mental-para-conquistar-um-bom-resultado",
      img: multiversoPreparacaoArticleImg,
      title: "The importance of physical and mental training to achieve good results",
      authorLogo: multiversoMais,
      authorName: "Multiverso Mais",
    },
    {
      href: "https://multiversomais.com/artigos/pratica-de-exercicio-fisico-em-meio-a-pandemia",
      img: multiversoPandemiaArticleImg,
      title: "Physical exercise practice during the pandemic",
      authorLogo: multiversoMais,
      authorName: "Multiverso Mais",
    },
    {
      href: "https://observatoriodegames.uol.com.br/noticias/comissao-tecnica-da-loud-garante-preparacao-para-finais-da-lbff",
      img: uolObsArticleImg,
      title: "LOUD technical staff ensures preparation for LBFF finals",
      authorLogo: uol,
      authorName: "UOL | Observatório de Games",
    },
    {
      href: "https://baserush.com.br/entrevista-vitor-kenji-2021-fisioterapia-esports/",
      img: baseRushArticleImg,
      title: 'Physiotherapist Vitor Kenji on injuries: “pain is part of their routine”',
      authorLogo: baseRush,
      authorName: "Base Rush",
    },
    {
      href: "https://theclutch.com.br/rainbowsix/vitor-kenji-fisioterapeuta/",
      img: theClutchArticleImg,
      title: "Interview with Vitor Kenji, esports physiotherapist for Team Liquid and Prodigy",
      authorLogo: theClutch,
      authorName: "The Clutch",
    },
    {
      href: "https://br.millenium.gg/noticias/3741.html",
      img: milleniumArticleImg,
      title: "Liquid and PRG's physiotherapist reveals the most common injuries in players",
      authorLogo: millenium,
      authorName: "Millenium",
    },
    {
      href: "https://lolesports.com/article/diabetes-e-tendinite-fisioterapeuta-explica-o-caso-uzi/bltc6ce8cf5935ea3dd",
      img: lolArticleImg,
      title: "Diabetes and tendinitis: physiotherapist explains Uzi's case",
      authorLogo: loleSports,
      authorName: "LoL Esports",
    },
    {
      href: "https://www.espn.com.br/esports/artigo/_/id/7968493/kenia-toledo-conta-mentalidade-por-tras-do-grupo-fallen-todos-sao-jogadores-de-alto-nivel",
      img: espnKeniaArticleImg,
      title: "Kenia Toledo shares the mindset behind the Fallen group: They are all high-level players",
      authorLogo: espn,
      authorName: "ESPN",
    },
    {
      href: "https://btsbrasil.tv/esports/fisioterapia-quais-sao-as-lesoes-mais-comuns-nos-esports-e-como-evita-las/",
      img: espnArticleImg,
      title: "Physiotherapy: What are the most common injuries in eSports and how to avoid them?",
      authorLogo: bts,
      authorName: "BTS Brasil",
    },
    {
      href: "https://baserush.com.br/protecao-contra-lesoes-esports/",
      img: baseRushLesoesArticleImg,
      title: "How to protect yourself against common injuries in eSports",
      authorLogo: baseRush,
      authorName: "Base Rush",
    },
    {
      href: "https://valorantzone.gg/noticia/valorant-trouxe-uma-valorizacao-para-profissionais-de-outras-areas-comenta-spacca/",
      img: vzSpaccaArticleImg,
      title: '"Valorant brought appreciation for professionals in other areas", says Spacca',
      authorLogo: valorantZone,
      authorName: "Valorant Zone",
    },
    {
      href: "https://www.esports.net/br/noticias/saude-nos-esports-especialistas-dao-dicas/",
      img: eSportsNetArticleImg,
      title: "Health in esports: LOUD, MiBR, Vivo Keyd, and other teams' specialists give tips on improving performance",
      authorLogo: esportsNet,
      authorName: "Esports.net",
    },
    {
      href: "https://www.pichauarena.com.br/esports/vitor-kenji-esports-fisio/",
      img: pichauArticleImg,
      title: "Physiotherapy and eSports with Vitor Kenji: Essential care for gamers",
      authorLogo: pichau,
      authorName: "Pichau Arena",
    },
    {
      href: "https://gamearena.gg/esports/valorant/recompensar-coach-team-leveling-kenji",
      img: gameArenaArticleImg,
      title: 'VALORANT: "Reward him", says Team Leveling coach about the tribute to Kenji',
      authorLogo: gameArena,
      authorName: "Game Arena",
    },
  ];
  

export const podcastPT: ArticlesPT[] = [
    {
      href: "https://www.youtube.com/watch?v=60DzQlANrRM",
      img: thumbpodcastFlowGames,
      title: "KENJI, o FISIOTERAPEUTA dos PRO-PLAYERS! - MD3 #64",
      authorLogo: "",
      authorName: "Flow Games",
    },
    {
      href: "https://www.youtube.com/watch?v=nmi2yYbgKQw",
      img: thumbpodcastDecretoTV1,
      title: "Vitor Kenji no DecretoCast #27",
      authorLogo: "",
      authorName: "DecretoTV",
    },
    {
      href: "https://www.youtube.com/watch?v=wVthj6oZbnQ",
      img: thumbpodcastGalera,
      title: "YAN PETERMANN E VITOR KENJI - Galera Cast",
      authorLogo: "",
      authorName: "GaleraEsporteClube",
    },
    {
      href: "https://www.youtube.com/watch?v=IXUbc2DPtK8",
      img: thumbpodcastOPlano,
      title: "VITOR KENJI - O PLANOCAST #029",
      authorLogo: "",
      authorName: "OPLANOCAST",
    },
    {
      href: "https://www.youtube.com/watch?v=RbFpr4K7TRE",
      img: thumbpodcastKhaos,
      title: "KHÀOS NO E-SPORTS (feat. Vitor Kenji)",
      authorLogo: "",
      authorName: "KHÀOS",
    },
    {
      href: "https://www.youtube.com/watch?v=3jJCMwsTD8Q",
      img: thumbpodcastGameArena,
      title: "Vitor Kenji fala da Fisioterapia nos Esports e cita caso Fallen",
      authorLogo: "",
      authorName: "GameArena",
    },
    {
      href: "https://www.youtube.com/watch?v=FGgXV2iMbDc",
      img: thumbpodcastMackPlay,
      title: "VITOR KENJI JOGANDO RAYMAN LEGENDS E CONVERSANDO SOBRE FISIOTERAPIA E E-SPORTS - MULTIPLAYER | EP 10",
      authorLogo: "",
      authorName: "MackPlay",
    },
    {
      href: "https://www.youtube.com/watch?v=Gp7HM4N8t6Q",
      img: thumbpodcastX,
      title: "Vitor Kenji - PodCastX #15",
      authorLogo: "",
      authorName: "PodcastX - Oficial",
    },
    {
      href: "https://www.youtube.com/watch?v=dE7MH34pV00",
      img: thumbpodcastCNB,
      title: "Bate-papo com Vitor Kenji // Fisioterapia, postura, aquecimento e alongamento para eSports",
      authorLogo: "",
      authorName: "CNB eSports Club",
    },
    {
      href: "https://www.youtube.com/watch?v=YZCDbwciKic",
      img: thumbpodcastDecretoTV2,
      title: "Yuri Motoyama, Vitor Kenji, Lethicia Thiemy - DecretoCast Live - EP 112",
      authorLogo: "",
      authorName: "DecretoTV",
    }
  ];

export const podcastEN: ArticlesPT[] = [
    {
      href: "https://www.youtube.com/watch?v=60DzQlANrRM",
      img: "",
      title: "KENJI, the PHYSIOTHERAPIST of PRO-PLAYERS! - MD3 #64",
      authorLogo: "",
      authorName: "Flow Games",
    },
    {
      href: "https://www.youtube.com/watch?v=nmi2yYbgKQw",
      img: "",
      title: "Vitor Kenji on DecretoCast #27",
      authorLogo: "",
      authorName: "DecretoTV",
    },
    {
      href: "https://www.youtube.com/watch?v=wVthj6oZbnQ",
      img: "",
      title: "YAN PETERMANN AND VITOR KENJI - Galera Cast",
      authorLogo: "",
      authorName: "GaleraEsporteClube",
    },
    {
      href: "https://www.youtube.com/watch?v=IXUbc2DPtK8",
      img: "",
      title: "VITOR KENJI - O PLANOCAST #029",
      authorLogo: "",
      authorName: "OPLANOCAST",
    },
    {
      href: "https://www.youtube.com/watch?v=RbFpr4K7TRE",
      img: "",
      title: "KHÀOS IN E-SPORTS (feat. Vitor Kenji)",
      authorLogo: "",
      authorName: "KHÀOS",
    },
    {
      href: "https://www.youtube.com/watch?v=3jJCMwsTD8Q",
      img: "",
      title: "Vitor Kenji talks about Physiotherapy in Esports and mentions the Fallen case",
      authorLogo: "",
      authorName: "GameArena",
    },
    {
      href: "https://www.youtube.com/watch?v=FGgXV2iMbDc",
      img: "",
      title: "VITOR KENJI PLAYING RAYMAN LEGENDS AND TALKING ABOUT PHYSIOTHERAPY AND E-SPORTS - MULTIPLAYER | EP 10",
      authorLogo: "",
      authorName: "MackPlay",
    },
    {
      href: "https://www.youtube.com/watch?v=Gp7HM4N8t6Q",
      img: "",
      title: "Vitor Kenji - PodCastX #15",
      authorLogo: "",
      authorName: "PoscastX - Oficial",
    },
    {
      href: "https://www.youtube.com/watch?v=dE7MH34pV00",
      img: "",
      title: "Chat with Vitor Kenji // Physiotherapy, posture, warm-up, and stretching for eSports",
      authorLogo: "",
      authorName: "CNB eSports Club",
    },
    {
      href: "https://www.youtube.com/watch?v=YZCDbwciKic",
      img: "",
      title: "Yuri Motoyama, Vitor Kenji, Lethicia Thiemy - DecretoCast Live - EP 112",
      authorLogo: "",
      authorName: "DecretoTV",
    }
  ];
  