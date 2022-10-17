<template>
  <form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationCustom01">Apellido</label>
      <input v-model="Apellido" type="text" class="form-control" id="validationCustom01" placeholder="First name"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Nombre</label>
      <input v-model="Nombre" type="text" class="form-control" id="validationCustom02" placeholder="Last name"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>

    <div class="col-md-3 mb-3">
      <label for="validationCustom04">Cédula</label>
      <input  v-model="Cédula" type="text" class="form-control" id="validationCustom04" placeholder="State" required>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>

    <div class="col-md-3 mb-3">
      <label for="validationCustom05">Código</label>
      <input v-model="Código" type="text" class="form-control" id="validationCustom05" placeholder="Zip" required>
      <div class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>

    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Programa</label>
      <input v-model="Programa" type="text" class="form-control" id="validationCustom02" placeholder="Last name"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>

    <div class="col-md-4 mb-3">
      <label for="validationCustom02">DireccionDependencia</label>
      <input v-model="DireccionDependencia" type="text" class="form-control" id="validationCustom02" placeholder="Last name"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>

    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Cargo</label>
      <input v-model="Cargo" type="text" class="form-control" id="validationCustom02" placeholder="Last name"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>

    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Fechaingreso</label>
      <input v-model="Fechaingreso" type="text" class="form-control" id="validationCustom02" placeholder="Last name"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>

    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Fechanacimiento</label>
      <input v-model="Fechanacimiento" type="text" class="form-control" id="validationCustom02" placeholder="Last name"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>

    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Edad</label>
      <input v-model="Edad" type="text" class="form-control" id="validationCustom02" placeholder="Last name"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>

    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Sexo</label>
      <input v-model="Sexo" type="text" class="form-control" id="validationCustom02" placeholder="Last name"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>

    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Sueldo</label>
      <input v-model="Sueldo" type="text" class="form-control" id="validationCustom02" placeholder="Last name"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>
  <button @click="add" class="btn btn-primary" type="submit">Submit form</button>
</form>
</template>


<script>
export default {
    name: 'myForm',

    data() {
        return {
            Apellido: '',
      Nombre: '',
      Cédula: '',
      Código: '',
      Programa: '',
      DireccionDependencia: '',
      Cargo: '',
      Fechaingreso: '',
      Fechanacimiento: '',
      Edad: '',
      Sexo: '',
      Sueldo: '',
        }
    },

    methods: {
        add()  {
            this.$store.dispatch('addNote', {
                id: '?',
                Apellido: this.Apellido,
      Nombre: this.Nombre,
      Cédula: this.Cédula,
      Código: this.Código,
      Programa: this.Programa,
      DireccionDependencia: this.DireccionDependencia,
      Cargo: this.Cargo,
      Fechaingreso: this.Fechaingreso,
      Fechanacimiento: this.Fechanacimiento,
      Edad: this.Edad,
      Sexo: this.Sexo,
      Sueldo: this.Sueldo,

            })
            this.$router.push('/')
        }
    }
}
</script>