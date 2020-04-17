<template>
  <div>
    <NavBar></NavBar>
    <div class="home">
      <section class="home__banner">
        <div class="navSpace"></div>
        <vue-typer
          class="heading--large"
          :text="[$t('header.writePoems'), $t('header.notes'), $t('header.lyrics'), $t('header.createDocuments') ]"
          :repeat="0"
        >{{$t("header.createDocuments")}}</vue-typer>

        <h2 class="heading">{{$t("header.online")}}</h2>
        <p>{{$t("header.desc")}}</p>
        <div class="banner__row">
          <a
            @click="openApp"
            href="https://app.graphitewriter.com"
            class="btn--dark"
          >{{$t("getStarted")}}</a>
          <a href v-scroll-to="'#features'" class="btn--outline">{{$t("header.learnMore")}}</a>
        </div>
      </section>
      <section id="features" class="gwIs">
        <div class="container">
          <h2>{{$t("tagline.header")}}</h2>
          <p>{{$t("tagline.tagline")}}</p>
        </div>
      </section>
      <section class="features">
        <div class="container">
          <div class="featureRow">
            <div class="featureText">
              <h2>{{$t("features.speed.title")}}</h2>
              <p>{{$t("features.speed.text")}}</p>
            </div>
            <div class="featureBox">
              <img src="../assets/undraw_fast_loading_0lbh.svg" alt="Fast loading" />
            </div>
          </div>
          <div class="featureRow left">
            <div class="featureText">
              <h2>{{$t("features.people.title")}}</h2>
              <p>{{$t("features.people.text")}}</p>
            </div>
            <div class="featureBox">
              <img src="../assets/undraw_celebration_0jvk.svg" alt="People jumping" />
            </div>
          </div>
          <div class="featureRow">
            <div class="featureText">
              <h2>{{$t("features.privacy.title")}}</h2>
              <p>{{$t("features.privacy.text")}}</p>
            </div>
            <div class="featureBox">
              <img src="../assets/undraw_surveillance_kqll.svg" alt="Big brother" />
            </div>
          </div>
          <div class="featureRow left">
            <div class="featureText">
              <h2>{{$t("features.openSource.title")}}</h2>
              <p>
                {{$t("features.openSource.text")}}
                <a
                  href="https://github.com/StompRocket/Graphite-Writer"
                  target="_blank"
                >Github</a>
              </p>
            </div>
            <div class="featureBox">
              <img src="../assets/teamwork.svg" alt="Open source contributors" />
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="updated">
      <div class="container">
        <img src="../assets/undraw_os_upgrade_nj2m.svg" alt="Upgraded device" />
        <h2>{{$t("updated.title")}}</h2>
        <p>
          {{$t("updated.text")}}
          <a
            href="mailto:support@graphitewriter.com"
          >support@graphitewriter.com</a>
        </p>
      </div>
    </section>
    <div class="cta">
      <div class="container">
        <img src="../assets/icon.svg" alt="Graphite Writer Icon" />
        <div>
          <h1 class="heading">Speed up your text editing</h1>
          <h2 class>Start using Graphite Writer today and forever change the way you write text.</h2>
          <a class="btn" href="https://app.graphitewriter.com" @click="openApp">Get Started</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/nav.vue";
import Locale from "@/components/locale.vue";
export default {
  name: "Home",
  components: {
    NavBar,
    Locale
  },
  methods: {
    openApp() {}
  }
};
</script>
