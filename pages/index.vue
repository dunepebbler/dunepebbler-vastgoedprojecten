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
    .projecten
      .project(v-for="project in getProjects" :key="project.node.id" :href="project.node.link")
        a.project-item(:href="project.node.link")
          img(:src="project.node.featuredImage.sourceUrl.substr(0, project.node.featuredImage.sourceUrl.lastIndexOf('/')) + '/' + project.node.featuredImage.mediaDetails.sizes[3].sourceUrl" alt="")
          .overlay
            .overlay-content
              h1 {{project.node.title}}
              p {{project.node.subtitel}}
</template>

<script>
import projects from '~/apollo/queries/projects'

export default {
  apollo: {
    projects: {
      prefetch: true,
      query: projects
    }
  },
  computed: {
    getProjects: function () {
      return this.projects.edges.filter(project => project.node.vastgoedproject === true)
    }
  }
}
</script>

<style lang="stylus">
  primary-color = #26cad3

  body
    font-family 'akhand_soft'

  header
    height 140px
    padding-top 10px
    padding-bottom 10px
    text-align center
    .logo
      img
        width 169px
        height auto

  .header-image
    position relative
    max-height 305px
    height 70vh

    img
      width 100%
      height 100%
      object-fit cover
      object-position center

    .overlay
      position absolute
      top 0
      right 0
      bottom 0
      left 0
      display flex
      justify-content center
      align-items center

      h1
        color #fff
        font-weight 300
        font-size 60px
        text-shadow 0 0 15px rgba(0,0,0,0.3)

  .seperator
    background primary-color
    width 100%
    height 60px

  .projecten
    display flex
    flex-wrap wrap

    .project
      display block
      flex 0 0 33.333%
      position relative

      @media (max-width 991px)
        flex 0 0 50%

      @media (max-width 720px)
        flex 0 0 100%

      &:before
        content ''
        display block
        padding-top 80%

      .project-item
        position absolute
        left 0
        right 0
        bottom 0
        top 0

      img 
        width 100%
        height 100%
        object-fit cover

      .overlay
        padding 50px
        position absolute
        top 0
        right 0
        bottom 0
        left 0
        pointer-events none
        background rgba(255, 255, 255, 0)
        transition all 0.4s
        display flex
        align-items flex-end
        overflow hidden

        .overlay-content
          transition all 0.8s ease-out
          transform translateY(200px)

          h1
            font-size 3.23vw
            text-transform lowercase
            font-weight 300
            line-height 1.1
            color primary-color

          p
            font-size 18px
            color #afafaf
            line-height 1.8


      &:hover, &:focus, &:active
        .overlay
          background rgba(255, 255, 255, 0.9)

          .overlay-content
            transform translateY(0)

</style>
