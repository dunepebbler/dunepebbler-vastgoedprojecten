<template lang="pug">
  div
    header
      .logo
        img(src="logo-dune-pebbler.svg")
    .header-image
      img(src="header.jpg")
      .overlay
        h1 Vastgoedprojecten
    .seperator
    .intro
      .container
        .col
          h2 Vastgoed marketing
          p Vastgoed marketing; Dune Pebbler heeft er al sinds 1987 ervaring mee. Zeker als het gaat om de marketing en communicatie van nieuwbouwprojecten voelt Dune Pebbler zich als een vis in het water. Van brochures tot logo en huisstijlontwikkeling, van advies tot website, van persbericht tot landingspagina, van social media campagnes tot aan virtual reality, van advertentiecampagne tot teksten schrijven, van contentcreatie tot online en offline nieuwsbrieven, van vastgoedfotografie tot video, van artist impressions tot start verkoop manifestatie. Dune Pebbler heeft alles in huis om tot het optimale resultaat te komen bij de verkoop van de woningen.
          .readmore-text(:class="{ active: showMoreText }")
            h2 Online advertising
            p De strategie van Dune Pebbler is helder. Campagnes worden in eerste instantie zo breed mogelijk ingezet. Bij appartementen aan zee hoef je niet uit de regio te komen om het unieke van deze locatie te herkennen en te beseffen dat je hier graag wilt wonen. Vaak bevindt dit type woningen zich in een hoger segment, waardoor de lokale doelgroep niet toereikend is om tot een volledige verkoop te komen. Via Search Engine Advertising halen we potentiële kopers naar de landingspagina van het nieuwbouwproject waar zij zich in kunnen schrijven voor meer informatie. Zo’n Google Adwords campagne is effectief omdat leads al in zekere zin een koopintentie vertonen. Via met name Facebook advertising trekken we proactieve en latente zoekers op de woningmarkt naar ons toe. En ook al is de berichtgeving over Facebook de ene keer positiever dan de andere, het social media platform is nog zeer effectief voor wat betreft het interesseren en converteren van leads.
            p Met de ontwikkeling van een projectstijl, landingspagina, online marketingcampagne, advertentiecampagne en artist impressies kan al snel aan de gang worden gegaan met een rijk gevulde database van potentiële kopers. Wanneer de Start Verkoop en de verkooptekeningen nog niet definitief zijn, is het wel verstandig belangstellenden te blijven informeren, interesseren en enthousiasmeren. Dat kan door het periodiek versturen van een mailing, digitale nieuwsbrief en/of eMagazine. Middels het versturen van een enquête kan de database nog verder worden verrijkt, zodat de makelaar in een vroeg stadium inzichtelijk heeft wie de kopers zijn en in welke fase van het aankoopproces zij staan. 

            h2 Online en offline
            p Naarmate de datum Start Verkoop van een nieuwbouwproject is bepaald en de verkooptekeningen definitief zijn, kunnen we concreet de belangstellenden informeren. De aankleding van de Start Verkoop wordt door Dune Pebbler ontwikkeld, wij kopen de advertentieruimtes in, de door ons geschreven persberichten gaan de deur uit, de rijk gevulde brochure gaat richting drukker met ingemeubelde plattegronden, de landingspagina wordt in gereedheid gebracht met verkoopdocumentatie en aansprekende visuals worden toegevoegd. De toevoeging van een Virtual Reality-tour maakt het geheel af en de Facebookcampagne wordt nu ingestoken als aankondiging van de Start Verkoop. 

            h2 Referenties
            p Dune Pebbler werkt als marketingbureau met vastgoedspecialisatie onder andere voor bouwgerelateerde bedrijven als Van Rhijn Bouw, Noorlander Bouw, KBM Groep, Van der Meer Makelaars & Taxateurs, RENWARD, HOMEWARD, Ouwehand Bouw, BPD, Timpaan, Zegers Bouw, Bouhuisen Groep, ZÜBLIN Nederland, M2 Ontwikkeling, G & S Bouw, De Raad Vastgoed, De Raad Makelaars, GJ van der Hulst, Barten Groep, IBB Kondor en Geurts Makelaars.
          a.read-more(href="#!" @click="showMoreText = !showMoreText")
            span(v-if="showMoreText") Lees minder
            span(v-else) Lees meer
    .projecten
      .project(v-for="project in getProjects" :key="project.node.id" :href="project.node.link")
        a.project-item(:href="project.node.link")
          img(:src="project.node.featuredImage.sourceUrl.substr(0, project.node.featuredImage.sourceUrl.lastIndexOf('/')) + '/' + project.node.featuredImage.mediaDetails.sizes[3].sourceUrl" alt="")
          .overlay
            .overlay-content
              h1 {{project.node.title}}
              p {{project.node.subtitel}}
    <ContactBar/>
</template>

<script>
import projects from "~/apollo/queries/projects"
import ContactBar from "~/components/ContactBar"

export default {
  apollo: {
    projects: {
      prefetch: true,
      query: projects
    }
  },
  components: {
    ContactBar
  },
  data: function() {
    return {
      showMoreText: false
    }
  },
  computed: {
    getProjects: function() {
      return this.projects.edges.filter(
        project => project.node.vastgoedproject === true
      )
    }
  }
}
</script>

<style lang="stylus">
primary-color = #26cad3;

body {
  font-family: 'akhand_soft';
}

header {
  height: 140px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;

  .logo {
    img {
      width: 169px;
      height: auto;
    }
  }
}

.header-image {
  position: relative;
  max-height: 305px;
  height: 70vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      color: #fff;
      font-weight: 300;
      font-size: 60px;
      text-shadow: 0 0 15px rgba(0, 0, 0, 0.3);

      @media (max-width: 600px) {
        font-size: 10vw;
      }
    }
  }
}

.seperator {
  background: primary-color;
  width: 100%;
  height: 60px;
}

.intro
  padding-top 60px
  padding-bottom 60px

.readmore-text
  display none 

  &.active
    display block

.projecten {
  display: flex;
  flex-wrap: wrap;

  .project {
    display: block;
    flex: 0 0 33.333%;
    position: relative;

    @media (max-width: 991px) {
      flex: 0 0 50%;
    }

    @media (max-width: 720px) {
      flex: 0 0 100%;
    }

    &:before {
      content: '';
      display: block;
      padding-top: 80%;
    }

    .project-item {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .overlay {
      padding: 50px;
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height 140px
      pointer-events: none;
      background: rgba(0,0,0,0.2);
      transition: all 0.4s;
      display: flex;
      align-items: flex-end;
      overflow: hidden;

      .overlay-content {
        transition: all 0.8s ease-out;
        transform: translateY(50px);

        h1 {
          font-size: 3.23vw;
          text-transform: lowercase;
          font-weight: 300;
          line-height: 1.1;
          color: primary-color;
        }

        p {
          font-size: 18px;
          color: #fff;
          line-height: 1.8;
        }
      }
    }

    &:hover, &:focus, &:active {
      .overlay {
        background: rgba(0,0,0,0.5);
        height 240px

        .overlay-content {
          transform: translateY(0);
        }
      }
    }
  }
}
</style>
