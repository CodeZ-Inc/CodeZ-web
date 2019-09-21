<template>
  <div class="nav-container">
    <a id="top"></a>
    <nav class="absolute transparent">
      <div class="nav-bar">
        <div class="module left">
          <a href="/">
            <img class="logo logo-light" alt="Foundry" src="../assets/images/logo-light.png"/>
            <img class="logo logo-dark" alt="Foundry" src="../assets/images/logo-dark.png"/>
          </a>
        </div>
<!--        <div class="module widget-handle mobile-toggle right visible-sm visible-xs">-->
        <!--          <i class="ti-menu"></i>-->
        <!--        </div>-->
        <div class="module-group right">
          <div class="module left">
            <ul class="menu">
              <li class="has-dropdown">
                <a href="#">
                  Home
                </a>
                <ul class="mega-menu">
                  <li>
                    <ul>
                      <li>
                        <span class="title">Concepts</span>
                      </li>
                      <li>
                        <a href="home-adventure.html">Adventure Travel</a>
                      </li>
                      <li>
                        <a href="home-agency.html">Agency</a>
                      </li>
                      <li>
                        <a href="home-agency-2.html">Agency 2</a>
                        <span class="label">New!</span>
                      </li>
                      <li>
                        <a href="home-app-landing.html">App Landing</a>
                      </li>
                      <li>
                        <a href="home-app-landing-2.html">App Landing 2</a>
                      </li>
                      <li>
                        <a href="home-capital-firm.html">Capital Firm</a>
                      </li>
                      <li>
                        <a href="home-fashion.html">Fashion</a>
                      </li>
                      <li>
                        <a href="home-fitness.html">Fitness</a>
                      </li>
                      <li>
                        <a href="home-restaurant.html">Restaurant</a>
                      </li>
                      <li>
                        <a href="home-music.html">Music</a>
                      </li>
                      <li>
                        <a href="home-event.html">Event / Seminar</a>
                      </li>
                      <li>
                        <a href="home-architecture.html">Architecture</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <a href="home-photography.html">Photography</a>
                      </li>
                      <li>
                        <a href="home-photography-2.html">Ken Burns</a>
                      </li>
                      <li>
                        <a href="home-personal-portfolio.html">Portfolio</a>
                      </li>
                      <li>
                        <a href="home-property.html">Property Listing</a>
                      </li>
                      <li>
                        <a href="home-resume.html">Resumé</a>
                      </li>
                      <li>
                        <a href="home-winery.html">Winery</a>
                      </li>
                      <li>
                        <span class="title">Home Pages</span>
                      </li>
                      <li>
                        <a href="index.html">Home Classic</a>
                      </li>
                      <li>
                        <a href="home-default-2.html">Home Layout 2</a>
                      </li>
                      <li>
                        <a href="home-default-3.html">Home Layout 3</a>
                      </li>
                      <li>
                        <a href="home-default-4.html">Home Layout 4</a>
                      </li>
                      <li>
                        <a href="home-default-5.html">Home Layout 5</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <!--end of menu module-->
          <div class="module widget-handle language left">
            <ul class="menu">
              <li class="has-dropdown">
                <a href="#">ENG</a>
                <ul>
                  <li>
                    <a href="#">French</a>
                  </li>
                  <li>
                    <a href="#">Deutsch</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <!--end of module group-->
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Fnav'
}
</script>

<style scoped lang="scss">
@import "../assets/scss/theme-foundry.scss";
</style>
