<template>
  <div id="app">
    <router-view/>
    <footer class="footer">
      <div class="container">
        <div class="brand">
          <img src="./assets/wordmarkWhite.svg" alt="Graphite Writer logo">
          <a href="mailto:support@graphitewriter.com">support@graphitewriter.com</a>
        </div>
        <div class="localeText">
          <p>Because Graphite Writer is a small open source project all non English translations are made with Google Translate. If you see any errors please let us know.</p>
          <p>Graphite Writer is released under the APL-2.0 License. If your interested in contributing to its development check out our Github</p>
        </div>
        <div class="legal">
          <p>Graphite Writer is created and maintained by <a target="_blank" href="https://ronanfuruta.com">Ronan Furuta</a></p>
          <small>By using this site you agree to our use of cookies and to be bound by our <router-link to="/termsofservice">terms of service</router-link> and <router-link to="/privacy">privacy policy</router-link></small>
        </div>
      </div>
    </footer>
  </div>
</template>
