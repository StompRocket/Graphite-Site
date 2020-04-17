<template>
  <div id="app">
    <router-view />
    <footer class="footer">
      <div class="container">
        <div class="brand">
          <img src="./assets/wordmarkWhite.svg" alt="Graphite Writer logo" />
          <a href="mailto:support@graphitewriter.com">support@graphitewriter.com</a>
        </div>
        <div class="localeText">
          <Locale></Locale>
          <p>{{$t("footer.translations")}}</p>
          <p>
            {{$t("footer.license")}}
            <a
              href="https://github.com/StompRocket/Graphite-Writer"
              target="_blank"
            >Github</a>
          </p>
        </div>
        <div class="legal">
          <p>
            {{$t("footer.created")}}
            <a target="_blank" href="https://ronanfuruta.com">Ronan Furuta</a>
          </p>
          <small>
            {{$t("footer.legal")}}
            <router-link to="/termsofservice">{{$t("footer.terms")}}</router-link>
            {{$t("footer.and")}}
            <router-link to="/privacy">{{$t("footer.privacy")}}</router-link>
          </small>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import Locale from "@/components/locale.vue";
export default {
  name: "App",
  components: { Locale }
};
</script>