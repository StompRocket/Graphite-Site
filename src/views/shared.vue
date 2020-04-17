<template>
  <div>
    <NavBar></NavBar>
    <div class="doc">
      <div class="container">
        <p v-if="!error">This document has been moved to: <a :href="url">{{url}}</a></p>
        <p class="heading" v-if="error">Error, Invalid share link</p>
      </div>


    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavBar from '@/components/nav.vue'
  function GetURLParameter (sParam) {
    var sPageURL = window.location.search.substring(1)
    var sURLVariables = sPageURL.split('&')
    for (var i = 0; i < sURLVariables.length; i++) {
      var sParameterName = sURLVariables[i].split('=')
      if (sParameterName[0] == sParam) {
        return sParameterName[1]
      }
    }
  }
  export default {
    name: 'Home',
    components: {
      NavBar
    },
    data() {
      return {
        url: "",
        error: false
      }
    },
    mounted() {
      let uid = GetURLParameter("u")
      let doc = GetURLParameter("d")
      if (uid && doc) {
        this.url = `https://app.graphitewriter.com/shared/${uid}/${doc}`
         window.location.href = this.url

        console.log("mounted", this.url)
      } else {
        this.error = true
      }

    },
    methods: {
      openApp() {

      }
    }
  }
</script>
