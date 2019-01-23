<template>
  <section>
    <div class="container-fluid" id="add-risk-type">
      <div class="card text-left">
        <div class="card-header">
          <div class="row">
            <div class="col-md-10">
              <h5 class="card-title">Register Customer</h5>
            </div>
            <div class="col-md-2">
              <router-link to="/customers"><button type="button" name="back" class="btn
              btn-secondary">Back To All</button></router-link>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="card-block">
            <form>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="first_name">First Name</label>
                  <input type="text" class="form-control" id="first_name"
                   v-model="customer_data.first_name" required>
                </div>
                <div class="form-group col-md-6">
                  <label for="last_name">Last Name</label>
                  <input type="text" class="form-control" id="last_name"
                   v-model="customer_data.last_name" required>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="phone_number">Phone Number</label>
                  <input type="text" class="form-control" id="phone_number"
                   v-model="customer_data.phone_number" required>
                </div>
                <div class="form-group col-md-6">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email"
                   v-model="customer_data.email" required>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="salutation">Salutation</label>
                  <select id="salutation" class="form-control" required v-model="customer_data.salutation">
                    <option value="" disabled> -- Select Salutaion -- </option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Miss</option>
                    <option value="Dr">Doctor</option>
                    <option value="Prof">Professor</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="gender">Gender</label>
                  <select id="gender" class="form-control" required v-model="customer_data.gender">
                    <option value="" disabled> -- Select Gender -- </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="date_of_birth">Date of Birth</label>
                  <input type="date" class="form-control" id="last_name"
                   v-model="customer_data.date_of_birth" required>
                </div>
              </div>
              <div class="row">
                <router-link to="/customers"><button type="button" name="onSubmit" class="btn btn-primary"
                 @click.prevent="onSubmit">Submit</button></router-link>>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RegisterCustomer',
  data () {
    return {
      customer_data: {
        first_name: '',
        last_name: '',
        phone_number: '',
        date_of_birth: '',
        email: '',
        salutation: '',
        gender: ''
      }
    }
  },
  methods: {
    onSubmit () {
      axios.post(this.$serverUrl + 'api/register_customer/', this.customer_data).then(resp => {
        if (resp.data.status === 'success') {
          this.$swal('Success', 'Customer registered successfully!', 'success')
        } else {
          if (resp.data.message === 'Provided phone number is already taken') {
            this.$swal('Oops..', 'The customer with that phone number already exists!', 'error')
          } else {
            this.$swal('Oops..', 'Something went wrong while registering Customer!', 'error')
          }
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
