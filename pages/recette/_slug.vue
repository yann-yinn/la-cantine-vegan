<template>
  <div class="container section">
    <h1 class="title is-1">{{recette.title}}</h1>
    <div class="featured-image-wrapper">
      <img class="featured-image" :src="recette.featured_image">
    </div>
    <div>
      <div
        style="margin-right:1rem;margin-top:1rem"
        class="tag is-warning"
        v-for="(tag,i) in recette.tags"
        :key="i"
      >{{tag}}</div>
    </div>
    <hr>
    <div>
      <strong>Préparation et cuisson</strong>
      : {{recette.preparation_time}} min
    </div>
    <hr>

    <div class="ingredients columns">
      <div class="column">
        <div class="content">
          <h4>{{recette.ingredients_title}}</h4>
          <ul>
            <li
              v-for="(ingredient,i) in recette.ingredients"
              :key="i"
            >{{ingredient.quantity}} {{ingredient.name}}</li>
          </ul>
        </div>
      </div>
      <div class="column">
        <div class="content">
          <h4>{{recette.ingredients_2_title}}</h4>
          <ul>
            <li
              v-for="(ingredient,i) in recette.ingredients_2"
              :key="i"
            >{{ingredient.quantity}} {{ingredient.name}}</li>
          </ul>
        </div>
      </div>
      <div class="column">
        <div class="content">
          <h4>{{recette.ingredients_3_title}}</h4>
          <ul>
            <li
              v-for="(ingredient,i) in recette.ingredients_3"
              :key="i"
            >{{ingredient.quantity}} {{ingredient.name}}</li>
          </ul>
        </div>
      </div>
    </div>
    <hr>
    <strong>Préparation</strong>
    <br>
    <br>
    <div class="content" v-html="recette.__html"></div>
  </div>
</template>

<script>
import recettes from '@/static/api/recettes'

export default {
  computed: {
    recette: function() {
      return recettes.find(v => v.slug === this.$route.params.slug)
    }
  },
  head() {
    const title = this.recette.title
    const description = this.recette.teaser
    const image = this.recette.featured_image
    return {
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: title
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: image
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        // twitter card:
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: image
        }
      ]
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


