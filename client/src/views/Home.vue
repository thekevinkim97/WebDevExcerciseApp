<template>
  <div class="home">
    
    <section class="hero is-medium is-dark is-bold">
      <div class="hero-body">
        <div class="container is-fluid">
          <h1 class="title">
            Kevin's Exercise Tracker
          </h1>
          <h2 class="subtitle">
            Let's get fit!
          </h2>
        </div>
      </div>
    </section>

    <section class="section">
    <div class="container">
      <h1 class="title">
        Here you can:
      </h1>
      <div class="tile">
        <div class="tile is-parent">
          <article class="tile is-child notification is-info">
            <p class="title">Track your stats</p>
            <p class="subtitle">Record your weight, height and age!</p>
          </article>
          <article class="tile is-child notification is-warning">
            <p class="title">Add your friends</p>
            <p class="subtitle">Add your friends that are working out alongside you!</p>
          </article>
          <article class="tile is-child notification is-success">
            <p class="title">Record your routine</p>
            <p class="subtitle">Keep track of all your exercises in a nice list that also records the number of sets and reps for each one!</p>
          </article>
        </div>
        </div>
    </div>
  </section>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {
    
  },
};
</script>