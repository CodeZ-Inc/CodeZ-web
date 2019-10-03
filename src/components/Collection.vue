<template>
  <section class="portfolio-pullup">
    <v-container class="container-collection">
      <v-row no-gutters class="pb-0">
        <v-col cols="12" sm="12" md="6">
          <v-card
            class="mx-auto"
            :tile="true"
          >
            <v-img
              class="white--text"
              height="400px"
              src="../assets/images/collection-single-7-m.jpg"
            >
              <v-card-title class="align-end fill-height pb-0 px-0">
                <div class="container half-black">
                <span>
                  <span class="headline uppercase">Data Guidance</span>
                  <p class="body-1 mb-0 mt-1">
                    At data scientist and enterprise level.
                </p>
                </span>
                </div>
              </v-card-title>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-card
            class="mx-auto"
            :tile="true"
          >
            <v-img
              class="white--text"
              height="400px"
              src="../assets/images/collection-single-8-m.jpg"
            >
              <v-card-title class="align-end fill-height pb-0 px-0">
                <div class="container half-black">
                <span>
                  <span class="uppercase">Data Quality</span>
                  <p class="body-1 mb-0 mt-1">
                  Data Signature for each dataset enabling anomaly detection and timely
                  identification of data quality issues at source.
                </p>
                </span>
                </div>
              </v-card-title>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="8">
          <v-card
            class="mx-auto"
            :tile="true"
          >
            <v-img
              class="white--text"
              height="420px"
              src="../assets/images/collection-single-4.jpg"
            >
              <v-card-title class="align-end fill-height pb-0 px-0">
                <div class="container half-black">
                <span>
                  <span class="uppercase">Data Catalog:</span>
                  <p class="body-1 mb-0 mt-1">
                    Captures data access patterns and generates required core meta data for the other services.
                </p>
                </span>
                </div>
              </v-card-title>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="4" class="">
          <v-card
            class="mx-auto"
            :tile="true"
          >
            <v-img
              class="white--text"
              height="420px"
              src="../assets/images/collection-single-2.jpg"
            >
              <v-card-title class="align-end fill-height pb-0 px-0">
                <div class="container half-black">
                 <span>
                  <span class="uppercase">Data Intelligence </span>
                  <p class="body-1 mb-0 mt-1">
                    Machine Learning, Dictionary & Regex based data classification.
                </p>
                </span>
                </div>
              </v-card-title>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <v-card
            class="mx-auto"
            :tile="true"
          >
            <v-img
              class="white--text"
              height="500px"
              src="../assets/images/collection-single-6.jpg"
            >
              <v-card-title class="align-end fill-height pb-0 px-0">
                <div class="container half-black">
                <span>
                  <span class="uppercase">Data Lineage</span>
                  <p class="body-1 mb-0 mt-1">
                    Enables understanding of storage & processing redundancy.
                </p>
                </span>
                </div>
              </v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
      <!--end of row-->
    </v-container>
    <!--end of container-->
  </section>
</template>

<script>
export default {
  name: 'Collection'
}
</script>

<style scoped lang="scss">

.half-black {
  background: black(0.5);
}

.half-white {
  background: white(0.3);
}

.container-collection {
  /*visibility: hidden;*/
  @media (min-width: 1200px) {
    width: 1170px;
  }
  @media (max-width: $mobile_width) {
  }
}

.move-up {
  margin-top: -300px;
  @media (max-width: $mobile_width) {
    margin-top: 0px;
  }
}

section + .portfolio-pullup {
  padding-top: 0;
  margin-top: -128px;
  position: relative;
  z-index: 20;
}

.portfolio-pullup .project {
  margin-bottom: 0;
}

.portfolio-pullup .inner-title:hover {
  opacity: 1;
}

/*!---------- 22. IMAGE TILES ----------*/
img {
  max-width: 100%;
  height: 100%;
}

.image-tile {
  overflow: hidden;
  position: relative;
  margin-bottom: -5px;
  height: 400px;
}

.image-story {
  /*height: 550px !important;*/
}

.image-tile img {
  width: 100%;
  display: inline-block;
}

.image-tile .label {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 5;
}

.inner-title:before {
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(34, 34, 34, 0.9) 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(34, 34, 34, 0.9)));
  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(34, 34, 34, 0.9) 100%);
  background: -o-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(34, 34, 34, 0.9) 100%);
  background: -ms-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(34, 34, 34, 0.9) 100%);
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(34, 34, 34, 0.9) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#292929', GradientType=0);
  pointer-events: none;
}

.inner-title.title-center:before {
  background: #292929;
  opacity: .4;
}

.inner-title:hover:before {
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
}

.inner-title .title {
  position: absolute;
  width: 100%;
  bottom: 24px;
  z-index: 5;
}

.inner-title .title h1,
.inner-title .title h2,
.inner-title .title h3,
.inner-title .title h4,
.inner-title .title h5,
.inner-title .title h6 {
  color: #ffffff;
}

.inner-title .title p,
.inner-title .title span,
.inner-title .title li {
  color: #ffffff;
}

.inner-title.title-center .title {
  bottom: auto;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  -webkit-transform: translate3d(0, -50%, 0);
  -moz-transform: translate3d(0, -50%, 0);
}

.inner-title .title h5 {
  font-weight: 600;
}

.inner-title {
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  opacity: 1;
}

.inner-title:hover {
  opacity: .95;
}

.inner-title.hover-reveal:before {
  opacity: 0;
}

.inner-title.hover-reveal .title {
  opacity: 0;
  transform: translate3d(0, 50px, 0);
  -webkit-transform: translate3d(0, 50px, 0);
  -moz-transform: translate3d(0, 50px, 0);
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
}

.inner-title.hover-reveal:hover .title {
  opacity: 1;
  transform: translate3d(0, 0px, 0);
  -webkit-transform: translate3d(0, 0px, 0);
  -moz-transform: translate3d(0, 0px, 0);
}

.inner-title.hover-reveal:hover:before {
  opacity: 1;
}

.outer-title img {
  display: inline-block;
  margin-bottom: 12px;
}

.hover-tile {
  position: relative;
  overflow: hidden;
  background: #292929;
}

.hover-tile img {
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
}

.hover-tile:hover img {
  opacity: .5;
}

.hover-tile .hover-state {
  position: relative;
  transform: translate3d(0, -50%, 0);
  -webkit-transform: translate3d(0, -50%, 0);
  top: 50%;
  z-index: 2;
  position: absolute;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  opacity: 0;
  width: 100%;
}

.hover-state {
  z-index: 99;
  padding: 0 40px;
  cursor: default;
}

.hover-state h1,
.hover-state h2,
.hover-state h3,
.hover-state h4,
.hover-state h5,
.hover-state h6 {
  color: #ffffff;
}

.hover-state p,
.hover-state span,
.hover-state li {
  color: #ffffff;
}

.hover-state * {
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transform: translate3d(0, 30px, 0) scale(1.05);
  -webkit-transform: translate3d(0, 30px, 0) scale(1.05);
}

.hover-tile:hover .hover-state {
  opacity: 1;
}

.hover-tile:hover .hover-state * {
  transform: translate3d(0, 0px, 0) scale(1);
  -webkit-transform: translate3d(0, 0px, 0) scale(1);
}

.hover-state *:last-child {
  margin-bottom: 0;
}

.border-thick {
  border: 16px solid #fff;
  border-top: none;
}

.border-thick.col-sm-6:first-child {
  border-right: 8px solid #fff;
}

.border-thick.col-sm-6:last-child {
  border-left: 8px solid #fff;
}

.horizontal-tile {
  overflow: hidden;
}

.horizontal-tile:not(:last-of-type) {
  margin-bottom: 30px;
}

.tile-left,
.tile-right {
  width: 50%;
  float: left;
  display: inline-block;
  overflow: hidden;
  min-height: 300px;
  position: relative;
}

.tile-right .description,
.tile-left .description {
  padding: 48px;
}

.tile-right:hover .background-image-holder,
.tile-left:hover .background-image-holder {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
}

@media all and (max-width: 767px) {
  .tile-left,
  .tile-right {
    width: 100%;
    float: none;
  }
}
</style>
