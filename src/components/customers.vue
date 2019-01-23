<template>
  <div class="container-fluid" id="customers">
      <div class="card text-left">
        <div class="card-header">
          <div class="row">
            <div class="col-md-10">
              <h4 class="card-title">Customers</h4>
            </div>
            <div class="col-md-2">
              <router-link to="/add-customer"><button type="button"
              name="btnAdd" class="btn btn-primary">Add Customer</button>
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
                <tr v-for="(customer, index) in customers">
                  <td>{{ index + 1 }}</td>
                  <td>{{ customer.name }}</td>
                  <td>{{ customer.phone_number }}</td>
                  <td>{{ customer.email }}</td>
                  <td>{{ customer.gender }}</td>
                  <td>{{ customer.date_of_birth }}</td>
                  <td>{{ customer.state__name }}</td>
                  <td>{{ customer.date_created | date }}</td>
                </tr>
              </tbody>
            </table>
            <center><bar-loader class="custom-class" name="cloader" :loading="loading"
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
  name: 'Customers',
  data () {
    return {
      loading: false,
      dataAvailable: false,
      headers: [
        '#', 'Name', 'Phone Number', 'Email', 'Gender',
        'Date of Birth', 'Status', 'Join Date'],
      customers: null
    }
  },
  mounted () {
    this.loading = true
    axios.get('https://kev-backend.herokuapp.com/api/customers/').then(resp => {
      this.customers = resp.data.data
      this.dataAvailable = true
      this.loading = false
    }).catch(error => {
      this.loading = false
      console.log(error)
    })
  }
}
</script>
