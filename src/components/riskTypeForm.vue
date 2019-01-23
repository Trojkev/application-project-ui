<template>
  <section>
    <div class="container-fluid" id="risk-type-form">
      <div class="card text-left">
        <div class="card-header">
          <div class="row">
            <div class="col-md-6">
              <h5 class="card-title">{{ riskType.name }}</h5>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="card-block">
          <form>
            <div class="row" v-for="field in r_fields">
              <div class="form-group col-md-6">
                <label :for="field.id">{{ field.caption }}</label>
                <input :type="field.field_type" class="form-control" :id="field.id"
                 :placeholder="field.default_value" required>
              </div>
            </div>
          </form>
          </div>
        </div>
          <div class="card-footer">
          <router-link to="/"><button type="submit" class="btn btn-primary"
           @click.prevent="onSubmit">Submit</button></router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RiskTypeForm',
  data () {
    return {
      id: this.$route.params.id,
      riskType: {},
      r_fields: null
    }
  },
  methods: {
    onSubmit () {
      swal({'Hold up..', 'This feature is coming soon', 'info'})
    }
  },
  mounted () {
    axios.post(this.$serverUrl + 'api/get_risk_type/', {'id': this.id}).then(resp => {
      console.log(resp.data.data)
      this.riskType = resp.data.data.risk_type
      this.r_fields = resp.data.data.risk_fields
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>
