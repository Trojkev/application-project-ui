<template>
  <div id="app">
  <div class="row" style="padding-top: .05rem">
      <div class="col-md-3" style="padding: .0rem .25rem .0rem .25rem">
      <section>
        <div class="container-fluid" id="side-bar-component">
          <div class="card text-left" style="height: 90vh">
            <div class="card-header">
              <h5 class="card-title">{{title}}</h5>
            </div>
            <div class="card-body">
              <div class="card-block">
                <ul class="list-group list-group-flush" v-for="item in linkItems">
                  <li class="list-group-item">
                    <router-link :to="item.path"><h5>{{item.name}}</h5></router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <div class="col-md-9" style="padding-left: .05rem">
        <router-view/>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      title: 'Navigation',
      linkItems: [
        { name: 'Risk Types', path: '/' },
        { name: 'Customers', path: '/customers' }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
