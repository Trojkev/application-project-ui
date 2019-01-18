<template>
  <div class="container-fluid" id="risk-types">
      <div class="card text-left">
        <div class="card-header">
          <div class="row">
            <div class="col-md-10">
              <h4 class="card-title">Risk Types</h4>
            </div>
            <div class="col-md-2">
              <router-link to="/add-risk-type"><button type="button"
              name="btnAdd" class="btn btn-primary">Add Risk Type</button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="card-block">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th v-for="header in headers">{{ header }} </th>
                </tr>
              </thead>
              <tbody v-if="dataAvailable">
                <tr v-for="(type, index) in risky">
                  <td>{{ index + 1 }}</td>
                  <td>{{ type.name }}</td>
                  <td>{{ type.description }}</td>
                  <td>{{ type.state__name }}</td>
                  <td>{{ type.date_created | date }}</td>
                  <td v-if="!type.has_form">
                    <router-link :to="{path: '/add-fields/' + type.id}" title="Add form">
                      <button class="btn btn-outline-info">Add</button>
                    </router-link>
                  </td>
                  <td v-else>
                    <router-link :to="{path: '/risk-type-form/' + type.id}" title="View form">
                      <button class="btn btn-outline-info">View</button>
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </table>
            <center><bar-loader class="custom-class" name="loader" :loading="loading"
              style="size: 150px color: #bada55"></bar-loader></center>
            <div class="center" v-if="!dataAvailable">
              <center >No data available</center>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'RiskTypes',
  data () {
    return {
      dataAvailable: false,
      loading: false,
      headers: ['#', 'Name', 'Description', 'Status', 'Date Created', 'Actions'],
      r_types: null
    }
  },
  mounted () {
    this.loading = true
    axios.get(this.$serverUrl + 'api/risk_types/').then(resp => {
      this.risky = resp.data.data
      this.dataAvailable = true
      this.loading = false
    }).catch(error => {
      this.loading = false
      console.log(error)
    })
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
