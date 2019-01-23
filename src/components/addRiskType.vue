<template>
  <section>
    <div class="container-fluid" id="add-risk-type">
      <div class="card text-left">
        <div class="card-header">
          <div class="row">
            <div class="col-md-10">
              <h5 class="card-title">New Risk Type</h5>
            </div>
            <div class="col-md-2">
            <router-link to="/"><button type="button" name="back" class="btn
            btn-secondary">Back To All</button>
            </router-link>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="card-block">
          <form>
            <div class="form-group col-md-6">
              <label class="control-label" for="name">Name</label>
              <input type="text" class="form-control" id="name"
               placeholder="Enter name" v-model="r_type.name" required>
            </div>
            <div class="form-group col-md-6">
              <label for="description">Description</label>
              <textarea class="form-control" id="description" v-model="r_type.description"
              placeholder="Enter description here"></textarea>
            </div>
            <a href="/"><button type="button" class="btn btn-primary"
             @click="onSubmit">Submit</button></a>
          </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AddRiskType',
  data () {
    return {
      r_type: {
        name: '',
        description: ''
      }
    }
  },
  methods: {
    onSubmit () {
      axios.post(this.$serverUrl + 'api/add_risk_type/', this.r_type).then(resp => {
        if (resp.data.status === 'success') {
          swal('Success', 'Risk Type created successfully!', 'success')
        } else {
          swal('Oops..', 'Something went wrong while creating RiskType!', 'error')
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
