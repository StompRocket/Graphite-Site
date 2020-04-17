<template>
  <div class="local">
    <select class="input" v-model="$i18n.locale" @change="storeLocal">
      <option value="en">English</option>
      <option value="pt">Português (BETA)</option>
    </select>
    <i class="fas fa-language"></i>
  </div>
</template>
<script>
export default {
  name: "locale",
  methods: {
    storeLocal() {
      console.log(this.$i18n.locale);
      // this.$moment.locale(this.$i18n.locale)
      window.localStorage.setItem("local", this.$i18n.locale);
      this.$store.commit("urlLang", this.$i18n.locale);
    }
  }
};
</script>