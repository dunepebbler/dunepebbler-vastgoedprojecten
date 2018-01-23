<template>
  <section class="container">
    <div>
      <h1 class="title">
        dunepebbler-vastgoedprojecten
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="project" v-for="project in projects.edges" :key="project.node.id">
          <h1>{{project.node.title}}</h1>
          <h2>{{project.node.subtitel}}</h2>
          <a :href="project.node.link">Link</a>
          <img :src="project.node.featuredImage.sourceUrl.substr(0, project.node.featuredImage.sourceUrl.lastIndexOf('/')) + '/' + project.node.featuredImage.mediaDetails.sizes[3].sourceUrl" alt="">
      </div>
    </div>
  </section>
</template>

<script>
import projects from '~/apollo/queries/projects'

export default {
  apollo: {
    projects: {
      prefetch: true,
      query: projects
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
