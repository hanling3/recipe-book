<template>
  <div class="browse">
    <!-- <router-link to="/" tag="button" class="back-button"> ← </router-link> -->
    <div class="page-titel">
      <h1>Browse</h1>
    </div>

    <div class="section-favorites">
      <h3>Favorites</h3>
    </div>

    <div class="scrollmenu1">
      <b-row>
        <b-col>
          <router-link to="/outofscope" tag="button">
            <b-icon icon="card-image" scale="5"></b-icon>
          </router-link>
        </b-col>
        <b-col>
          <router-link to="/outofscope" tag="button">
            <b-icon icon="card-image" scale="5"></b-icon>
          </router-link>
        </b-col>
        <b-col>
          <router-link to="/outofscope" tag="button">
            <b-icon icon="card-image" scale="5"></b-icon>
          </router-link>
        </b-col>
        <b-col>
          <router-link to="/outofscope" tag="button">
            <b-icon icon="card-image" scale="5"></b-icon>
          </router-link>
        </b-col>
      </b-row>
    </div>

    <div class="section-recommend">
      <h3>We recommend</h3>
    </div>

    <div class="dropdown-browse">
      <b-dropdown id="dropdown-1" text="Cook Time" class="m-md-2">
        <b-dropdown-item> &#8804; 30 min </b-dropdown-item>
        <b-dropdown-item> &#8804; 1 h </b-dropdown-item>
        <b-dropdown-item> &#8805; 1 h </b-dropdown-item>
      </b-dropdown>
      <b-dropdown id="dropdown-2" text="Budget" class="m-md-2">
        <b-dropdown-item> $0 - $10 </b-dropdown-item>
        <b-dropdown-item> $11 - $20 </b-dropdown-item>
        <b-dropdown-item> $21 - $30 </b-dropdown-item>
        <b-dropdown-item> &#8805; $31 </b-dropdown-item>
      </b-dropdown>
      <b-dropdown id="dropdown-3" text="Dish Type" class="m-md-2">
        <b-dropdown-item> Japanese </b-dropdown-item>
        <b-dropdown-item> Korean </b-dropdown-item>
        <b-dropdown-item> Chinese </b-dropdown-item>
        <b-dropdown-item> Mexican </b-dropdown-item>
        <b-dropdown-item> American </b-dropdown-item>
      </b-dropdown>
      <b-dropdown id="dropdown-4" text="Diffculty" class="m-md-2">
        <b-dropdown-item> Easy </b-dropdown-item>
        <b-dropdown-item> Medium </b-dropdown-item>
        <b-dropdown-item> Hard </b-dropdown-item>
      </b-dropdown>
    </div>

    <div class="scrollmenu2">
      <b-row>
        <b-col>
          <router-link to="/outofscope" tag="button">
            <b-icon icon="card-image" scale="5"></b-icon>
          </router-link>
        </b-col>
        <b-col>
          <router-link to="/outofscope" tag="button">
            <b-icon icon="card-image" scale="5"></b-icon>
          </router-link>
        </b-col>
        <b-col>
          <router-link to="/outofscope" tag="button">
            <b-icon icon="card-image" scale="5"></b-icon>
          </router-link>
        </b-col>
        <b-col>
          <router-link to="/outofscope" tag="button">
            <b-icon icon="card-image" scale="5"></b-icon>
          </router-link>
        </b-col>
      </b-row>
    </div>

    <!--<div class="nav-bar">
      <b-row>
        <b-col>
          <router-link to="/plan" tag="button">
            <b-icon icon="calendar2-week" scale="1"></b-icon>
            <p>Plan</p>
          </router-link>
        </b-col>
        <b-col>
          <router-link to="/favorites" tag="button">
            <b-icon icon="heart" scale="1"></b-icon>
            <p>Saved</p>
          </router-link>
        </b-col>
        <b-col>
          <router-link to="/profile" tag="button">
            <b-icon icon="person" scale="1"></b-icon>
            <p>Profile</p>
          </router-link>
        </b-col>
      </b-row>
    </div>-->
    
  </div>
</template>

<script>
</script>

<style>
.page-titel {
  position: absolute;
  top: 2%;
  width: 10%;
  left: 15%;
}

.section-favorites {
  position: absolute;
  top: 15%;
  /* width: 10%; */
  left: 20%;
}

.scrollmenu1 {
  position: absolute;
  top: 20%;
  width: 50%;
  left: 25%;
  display: inline-block;
}

.section-recommend {
  position: absolute;
  top: 40%;
  /* width: 10%; */
  left: 20%;
}

.dropdown-browse {
  position: absolute;
  top: 45%;
  left: 25%;
}

.scrollmenu2 {
  position: absolute;
  top: 55%;
  width: 50%;
  left: 25%;
  display: inline-block;
}

.nav-bar {
  position: absolute;
  bottom: 0;
  width: 50%;
  left: 25%;
  display: inline-block;
}
</style>