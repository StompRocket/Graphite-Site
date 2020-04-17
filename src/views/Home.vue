<template>
  <div>
    <NavBar></NavBar>
    <div class="home">
      <div></div>
      <section class="home__banner">
        <vue-typer class="heading--large" :text="['Write Poems', 'Take Notes', 'Write Lyrics', 'Create Documents' ]" :repeat='0'>Create Documents</vue-typer>

        <h2 class="heading">Online For Free</h2>
        <p>Graphite Writer is an open source web application that enables you to write, edit, view, and share documents
          from anywhere.</p>
        <div class="banner__row">
          <a @click="openApp" href="https://app.graphitewriter.com" class="btn--dark">Get Started</a>
          <a href="" v-scroll-to="'#features'" class="btn--outline">Learn More</a>
        </div>
      </section>
      <section id="features" class="gwIs">
        <div class="container">
          <h2>Graphite Writer is:</h2>
          <p>A cloud based document editor focused on speed and usability</p>
        </div>
      </section>
      <section class="features">
        <div class="container">
          <div class="featureRow">
            <div class="featureText">
              <h2>Built For Speed</h2>
              <p>Graphite Writer is lightweight and FAST. It is clocked up to 20 seconds faster than competitors. This
                allows you to jump into your documents instead of losing inspiration while waiting for your software to
                load.</p>
            </div>
            <div class="featureBox">
              <img src="../assets/undraw_fast_loading_0lbh.svg" alt="Fast loading">
            </div>
          </div>
          <div class="featureRow left">
            <div class="featureText">
              <h2>Built For People</h2>
              <p>Graphite Writer was designed for ease of use, not computer whizzes. We pride ourselves on Graphite’s
                accessibility. We have worked hard to bring multiple language support to Graphite Writer.</p>
            </div>
            <div class="featureBox">
              <img src="../assets/undraw_celebration_0jvk.svg" alt="People jumping">
            </div>
          </div>
          <div class="featureRow">
            <div class="featureText">
              <h2>Built For Privacy</h2>
              <p>With Graphite Writer you are not the product. Graphite Writer is a free, open source project that runs
                completely on donations. We do not sell your personal information.</p>
            </div>
            <div class="featureBox">
              <img src="../assets/undraw_surveillance_kqll.svg" alt="Big brother">
            </div>
          </div>
          <div class="featureRow left">
            <div class="featureText">
              <h2>Open Source</h2>
              <p>Graphite Writer is proudly an open source project started by people who wanted to see a new standard of
                document editor. Anyone can contribute to its development or see the source code on our Github.</p>
            </div>
            <div class="featureBox">
              <img src="../assets/teamwork.svg" alt="Open source contributors">
            </div>
          </div>
        </div>

      </section>
    </div>
    <section class="updated">
      <div class="container">
        <img src="../assets/undraw_os_upgrade_nj2m.svg" alt="Upgraded device">
        <h2>Updated and Upgraded</h2>
        <p>Graphite Writer is frequently updated with new features. Want a feature? Email us directly: <a href="mailto:support@graphitewriter.com">support@graphitewriter.com</a></p>
      </div>
    </section>
    <div class="cta">
      <div class="container">
        <img src="../assets/icon.svg" alt="Graphite Writer Icon">
        <div>
          <h1 class="heading">Speed up your text editing</h1>
          <h2 class="">Start using Graphite Writer today and forever change the way you write text.</h2>
          <a class="btn" href="https://app.graphitewriter.com" @click="openApp">Get Started</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavBar from '@/components/nav.vue'

  export default {
    name: 'Home',
    components: {
      NavBar
    },
    methods: {
      openApp() {

      }
    }
  }
</script>
