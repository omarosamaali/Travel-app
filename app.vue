<script setup>
import Navbar from './components/navbar/Navbar.vue'
import HeroSection from './components/sections/HeroSection.vue'
import Cards from './components/cards/Cards.vue'
import Footer from './components/footer/Footer.vue'
</script>
<script>
export default {
  watch: {
    '$i18n.locale'() {
      this.setHtmlDirection();
    }
  },
  mounted() {
    this.setHtmlDirection();
  },
  methods: {
    setHtmlDirection() {
      const currentLocale = this.$i18n.locales.find(locale => locale.code === this.$i18n.locale);
      document.documentElement.setAttribute('dir', currentLocale ? currentLocale.dir : 'ltr');
    }
  }
}
</script>

<template>
  <div class="bg-[#f3f7fc]">
    <Navbar />
    <HeroSection />
    <Cards />
    <Footer />
  </div>
</template>

<style scoped>
</style>
