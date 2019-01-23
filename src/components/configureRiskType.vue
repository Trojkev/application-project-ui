<template>
  <section>
  <div class="card text-left">
    <div class="card-header">
      <button class="btn btn-primary" @click="addNewField">New Field</button>
    </div>
    <div class="card-body">
      <div class="card-block">
        <form>
          <div class="card" v-for="(field, index) in fields">
            <div class="card-header">
              Enter Field Details
              <span class="float-right" style="cursor:pointer" @click="removeField(index)">X</span>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="caption">Caption</label>
                  <input type="text" class="form-control" placeholder="Enter caption"
                   id="caption" required v-model="field.caption">
                </div>
                <div class="form-group col-md-4">
                  <label for="fieldType">Field Type</label>
                  <select id="fieldType" class="form-control" required v-model="field.field_type">
                    <option value="" disabled> -- Select Type -- </option>
                    <option value="text">Text</option>
                    <option value="email">Email</option>
                    <option value="number">Number</option>
                    <option value="date">Date</option>
                    <option value="file">File Upload</option>
                  </select>
                </div>
                <div class="form-group col-md-4">
                  <label for="default">Default Value</label>
                  <input type="text" class="form-control" placeholder="Enter default"
                    id="default" v-model="field.default_value">
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="card-footer">
      <a href="/"><button class="btn btn-primary" type="button" @click="submitFields">
       Submit </button></a>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ConfigRiskType',
  data () {
    return {
      id: this.$route.params.id,
      fields: [{
        caption: '',
        field_type: '',
        default_value: ''
      }],
      risk_fields: null
    }
  },
  methods: {
    addNewField () {
      this.fields.push({
        caption: '',
        field_type: '',
        default_value: ''
      })
    },
    removeField (index) {
      this.fields.splice(index, 1)
    },
    submitFields () {
      this.risk_fields = {fields: this.fields, id: this.id}
      axios.post(this.$serverUrl + 'api/add_risk_type_fields/', this.risk_fields).then(resp => {
        this.fields = [{caption: '', field_type: '', default_value: ''}]
        if (resp.data.status === 'success') {
          this.$swal('Success', 'Fields submitted successfully!', 'success')
        } else {
          this.$swal('Oops..', 'Something went wrong while updating fields!', 'error')
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
