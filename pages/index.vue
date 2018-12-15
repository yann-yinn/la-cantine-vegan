<template>
  <div class="container section">
    <div style="padding-bottom:1rem" v-for="(recette, i) in recettes" :key="i">
      <nuxt-link :to="`/recette/${recette.slug}`">
        <h2 class="title is-2">{{recette.titre}}</h2>
      </nuxt-link>
      <p>{{recette.description}}</p>
    </div>
  </div>
</template>

<script>
import PersonsWithSearch from '@/components/PersonsWithSearch'
import recettes from '@/static/api/recettes.json'

export default {
  computed: {
    recettes() {
      return recettes
    }
  }
}
</script>

