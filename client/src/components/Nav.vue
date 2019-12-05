<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <router-link exact-active-class="active" class="navbar-item" to="/">
            <i class="fas fa-home fa-pull-left"></i>
            Home
        </router-link>

        <router-link exact-active-class="active" class="navbar-item" to="/profile">
                <i class="fa fa-id-badge fa-pull-left"></i>
                    Profile
            </router-link>

        <router-link exact-active-class="active" class="navbar-item" to="/exercises">
            <i class="fas fa-bullhorn fa-pull-left"></i>
            Exercises
        </router-link>

        <a @click.prevent="isOpen = !isOpen" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active' : isOpen }">
        <div class="navbar-start">

            <router-link exact-active-class="active" class="navbar-item" to="/mealplan">
                <i class="fas fa-hamburger fa-pull-left"></i>
                    Meal Plan
            </router-link>

            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" active-class="kind-of-active">
                    More
                 </a>

                <div class="navbar-dropdown">
                    <router-link class="navbar-item" to="/about" exact-active-class="active">
                        <i class="fab fa-vuejs fa-pull-left"></i>
                        About
                     </router-link>
                    <hr class="navbar-divider">
                    <a class="navbar-item">
                        Report an issue
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="navbar-end">
        <div class="navbar-item">
            <div class="buttons">
                <router-link class="button is-primary" to="/login" exact-active-class="active">
                    <strong>Login</strong>
                </router-link>
            </div>
        </div>
    </div>
    <div class="navbar-end">
        <div class="navbar-item">
            <div class="buttons">
                <router-link class="button is-secondary" to="/signout" exact-active-class="active">
                    <strong>Sign Out</strong>
                </router-link>
            </div>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    data(){
        return {
            isOpen: false
        }
    }
}
</script>

<style>
    .active {
        background-color: aliceblue;
        font-weight: bold;
    }
    .kind-of-active {
        background-color: rgb(244, 248, 252);
        font-weight: 100;
    }
</style>