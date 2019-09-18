<template>
  <div>
    <fnav/>
    <section class="bg-primary background-multiply pt240 pb240 pt-xs-120 pb-xs-120 overlay image-bg parallax">
      <div class="background-image-holder">
        <img alt="image" class="background-image" src="../assets/images/home24.jpg"/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">
            <img alt="Logo" class="image-small mb40 mb-xs-0" src="../assets/images/logo-light.png"/>
            <h4 class="mb56 mb-xs-24">
              Foundry is a digital design collective, tailoring experiences in web and print for clients all around the
              globe.
            </h4>
            <a class="btn btn-lg btn-white mb0" href="#">Make An Enquiry</a>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
    <section class="portfolio-pullup">
      <div class="container">
        <div class="row row-gapless masonry masonryFlyIn">
          <div class="col-md-4 col-sm-6 masonry-item project" data-filter="People">
            <div class="image-tile inner-title hover-reveal text-center">
              <a href="#">
                <img alt="Pic" src="../assets/images/project-single-1.jpg"/>
                <div class="title">
                  <h5 class="uppercase mb0">Happy Couple</h5>
                  <span>People / Life</span>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 masonry-item project" data-filter="Animals">
            <div class="image-tile inner-title hover-reveal text-center">
              <a href="#">
                <img alt="Pic" src="../assets/images/project-single-2.jpg"/>
                <div class="title">
                  <h5 class="uppercase mb0">Lonely Dog</h5>
                  <span>Animals / Art</span>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 masonry-item project" data-filter="People">
            <div class="image-tile inner-title hover-reveal text-center">
              <a href="#">
                <img alt="Pic" src="../assets/images/project-single-3.jpg"/>
                <div class="title">
                  <h5 class="uppercase mb0">Pondering Blonde</h5>
                  <span>People / Life</span>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 masonry-item project" data-filter="Objects">
            <div class="image-tile inner-title hover-reveal text-center">
              <a href="#">
                <img alt="Pic" src="../assets/images/project-single-5.jpg"/>
                <div class="title">
                  <h5 class="uppercase mb0">Vintage Typewriter</h5>
                  <span>Objects / Isolated</span>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 masonry-item project" data-filter="Objects">
            <div class="image-tile inner-title hover-reveal text-center">
              <a href="#">
                <img alt="Pic" src="../assets/images/project-single-4.jpg"/>
                <div class="title">
                  <h5 class="uppercase mb0">Summer Lovin'</h5>
                  <span>Objects / Food</span>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 masonry-item project" data-filter="People">
            <div class="image-tile inner-title hover-reveal text-center">
              <a href="#">
                <img alt="Pic" src="../assets/images/project-single-6.jpg"/>
                <div class="title">
                  <h5 class="uppercase mb0">Thick Fog</h5>
                  <span>People / Life</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
  </div>
</template>

<script>
import Fnav from '@/components/Fnav'

export default {
  name: 'Test',
  components: {
    Fnav
  }
}
</script>

<style scoped lang="scss">
/*@import "../assets/scss/theme-foundry.scss";*/

</style>
