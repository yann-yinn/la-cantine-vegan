<template>
  <div class="container section">
    <div v-for="(recette, i) in recettes" :key="i">
      <div class="columns">
        <div class="column is-one-quarter">
          <div class="featured-image-wrapper">
            <img class="featured-image" :src="recette.featured_image">
          </div>
        </div>
        <div class="column">
          <nuxt-link :to="`/recette/${recette.$slug}`">
            <h2 class="title is-2">{{recette.title}}</h2>
          </nuxt-link>
          <div>
            <div
              style="margin-right:1rem"
              class="tag"
              v-for="(ingredient,i) in recette.ingredients"
              :key="i"
            >{{ingredient.name}}</div>
          </div>
          <div>
            <div
              style="margin-right:1rem;margin-top:1rem"
              class="tag is-warning"
              v-for="(tag,i) in recette.tags"
              :key="i"
            >{{tag}}</div>
          </div>
          <p style="margin-top:1rem">{{recette.teaser}}</p>
        </div>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
import recettes from '@/static/api/recettes.json'

export default {
  computed: {
    recettes() {
      return recettes.data.map(node => node.data)
    }
  }
}
</script>

<style scoped>
.featured-image-wrapper {
  max-height: 200px;
  overflow: hidden;
}

.featured-image {
  object-fit: cover;
  max-height: 200px;
}
</style>

