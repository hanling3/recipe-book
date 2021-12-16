<template>
  <div id="main-page" class="profile position-relative">
    <pageTitle pageTitle="Profile" />
    <!-- <img
      class="position-absolute"
      src="@/assets/bottle.svg"
      alt="SCG-IMG"
      width="350"
      height="350"
      style="z-index: -1; transform: rotate(15deg); left: -7%; top: 40%"
    /> -->
    <!-- <img
      class="position-absolute"
      src="@/assets/egg.svg"
      alt="SCG-IMG"
      width="300"
      height="300"
      style="z-index: -1; transform: rotate(-30deg); left: 80%; top: -15%"
    /> -->
    <img
      class="position-absolute"
      src="@/assets/pot.svg"
      alt="SCG-IMG"
      width="300"
      height="300"
      style="z-index: -1; left: 80%; top: 80%"
    />

    <div class="header">
      <div>
        <img
          src="@/assets/profile_propic.jpg"
          class="circle fluid"
          alt="Robo the persona"
          style="width: 200px; height: 200px; border: 4px solid lightgrey"
        />
        <h2>Robo <b-icon icon="pencil"></b-icon></h2>
      </div>
      <!-- <h3>Robo <b-icon icon="pencil"></b-icon></h3> -->

      <div class="badge-header"><h4 class="fs-2">My Badges</h4></div>
      <div class="badges row mt-4">
        <div class="badge col-sm">
          <b-button variant="warning">
            Newly Joined
            <b-badge variant="light" class="">
              <img src="https://img.icons8.com/doodle/48/000000/new--v1.png"
            /></b-badge>
          </b-button>
          <!-- <b-button class="circle">
            <b-icon icon="star" class="star"></b-icon>
          </b-button>
          <h5>Newly Joined</h5> -->
        </div>

        <div class="badge col-sm">
          <b-button variant="warning" v-b-modal.consistentcook-details>
            Consistent Cook
            <b-badge variant="light">
              <img
                src="https://img.icons8.com/external-flat-icons-maxicons/85/000000/external-cook-restaurants-and-dining-flat-flat-icons-maxicons-2.png"
              />
            </b-badge>
          </b-button>
          <!-- <b-button v-b-modal.consistentcook-details class="circle"> <img src="https://img.icons8.com/doodle/48/000000/new--v1.png"/> </b-button>
          <h5> Consistent Cook </h5> -->

          <b-modal id="consistentcook-details" centered title="Consistent Cook" ok-only ok-variant="warning">
            <p class="badge2-text text-center">
              <img
                src="https://img.icons8.com/external-flat-icons-maxicons/85/000000/external-cook-restaurants-and-dining-flat-flat-icons-maxicons-2.png"
              />
              <br />
              <p> Awarded for cooking 20 recipes on the app. Keep it up!  </p>
              <p> Earned on: December 1, 2021. </p>
          </b-modal>
        </div>

        <div class="badge col-sm">
          <!-- <b-button class="circle">
            <b-icon icon="star" class="star"></b-icon>
          </b-button>
          <h5>Masterchef</h5> -->
          <b-button variant="warning">
            Masterchef
            <b-badge variant="light">
              <img
                src="https://img.icons8.com/color/96/000000/chef-cooking-skin-type-1.png"
              />
            </b-badge>
          </b-button>
        </div>
      </div>
    </div>
    <h4 class="mb-3 fs-2 text-center">Cooking Report</h4>
    <div class="d-flex justify-content-center">
      <div class="report">
        <ul class="text-secondary">
          <li>
            <p class="left">Completed <span>5</span> recipes this week</p>
          </li>
          <li>
            <p class="left">
              Saved <span>$100</span> on food by cooking compared to grabbing
              takeout
            </p>
          </li>
          <li>
            <p class="left">
              Saved <span>5</span> hours cooking throughout the week
            </p>
          </li>
        </ul>
      </div>
    </div>
    <!-- <nav-bar /> -->
  </div>
</template>

<script>
import pageTitle from "@/components/PageTitle.vue";

export default {
  name: "profile",
  components: {
    pageTitle
  },
}
</script>


<style>
/* this part is moved to the App.vue
h1 {
  text-align: left;
  margin-left: 25px;
  margin-top: 25px;
} 
h2 {
  font-weight: bold;
}
*/

/* Header */

img {
  margin-bottom: 30px;
}

.header {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 50px;
}

.p-icon-size {
  position: absolute;
  left: 38%;
  height: 100px;
  width: 100px;
}

/* Badges */

h4 {
  margin: 0 auto;
  font-weight: bold;
}

.circle {
  /* position: absolute; */
  /* top: 38%; */
  text-align: center;
  margin: 20px;
  height: 100px;
  width: 100px;
  border-radius: 100%;
  font-weight: bold;
  font-size: 20px;
  /* padding: 20px; */
  /* width: 50px;  
  margin: 5px; 
  padding: 25px; */
}

.profile {
  z-index: 1000;
}
.star {
  height: 50px;
  width: 50px;
}

/* .badges {
  margin: auto;
  width: auto;
  display: flex;
  flex-direction: row;
  text-align: center;
} */

.badge-header {
  margin-top: 30px;
  width: auto;
  font-size: 32px;
}

/* .badge-section {
  text-align: center;
  margin: 0 auto; 
}  */

/* Report */
.report {
  border: 1px solid #d6d6d6;
  background-color: #FFFFFF;
  margin-bottom: 80px;
  border-radius: 10px;
  /* border: 1px solid #d6d6d6; */
  padding: 32px 64px;
  font-size: 24px;
}

/* .report {
  text-align: center;
  display:inline-block;
  border: 1px solid #d6d6d6;
  padding: 20px;
  width:50%;
  margin-bottom: 200px;
} */

.left {
  text-align: left;
}

b-icon {
  height: 50px;
  width: 50px;
}

.badges .btn {
  /* width: 300px; */
  height: 100px; 
  /* margin-right: 32px; */
  width: 100%;
  /* height: 100px; */
  margin-right: 32px;
  font-size: 24px;
}

.badges .btn img {
  width: 64px;
  height: 64px;
}

span {
  font-size: 40px;
  font-weight: 700;
  color: #e57b07;
}

button.close {
  border: none;
  background: none;
}

@media only screen and (max-width: 812px) {
  .report {
    width: 300px;
    font-size: 20px;
    padding: 16px 32px;
  }

  span {
  font-size: 30px;
  font-weight: 700;
  color: #e57b07;
  }

  .badges .btn {
  /* height: 100px; */
  width: 300px;
  text-align: center; 
  /* padding: 16px 32px; */
  /* height: 100px; */
  /* margin-right: 32px;
  font-size: 24px; */
  padding: 0px;
  margin: 0px;
  }

  .badge2-text, .text-center {
    text-align: left;
  }

}

</style>
