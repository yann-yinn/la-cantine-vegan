<template>
  <div class="container section">
    <h1 class="title is-1">{{recette.title}}</h1>
    <div class="featured-image-wrapper">
      <img class="featured-image" :src="recette.featured_image.replace('/static', '')">
    </div>
    <hr>
    <div>
      <strong>Préparation et cuisson</strong>
      : {{recette.preparation_time}} min
    </div>
    <hr>

    <strong>Ingrédients:</strong>
    <br>
    <br>
    <div class="ingredients">
      <ul>
        <li v-for="(ingredient,i) in recette.ingredients" :key="i">{{ingredient}}</li>
      </ul>
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
  }
  /*
  head() {
    const title = `Profil de ${this.person.prenom} ${
      this.person.nom
    }, freelance ${this.person.technologies.join(', ')}`
    const description = `Popcorn : trouvez un développeur freelance à Nantes avec (vraiment) 0% de commission pour tout le monde`
    const image = `${process.env.popcornBaseUrl}${this.person.photo}`
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
  */
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


