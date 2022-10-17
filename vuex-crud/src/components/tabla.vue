<template>
<table class="table" scope="col">
<thead>
    <tr>
      <th scope="col">Apellido</th>
      <th scope="col">Nombre</th>
      <th scope="col">Cedula</th>
      <th scope="col">Codigo</th>
      <th scope="col">Programa</th>
      <th scope="col">Direccion o dependencia</th>
      <th scope="col">Cargo</th>
      <th scope="col">Fecha de ingreso</th>
      <th scope="col">Fecha de nacimiento</th>
      <th scope="col">Edad</th>
      <th scope="col">Sexo</th>
      <th scope="col">Sueldo</th>
    </tr>
</thead>
  <tbody>
    
    <tr>
      <td>{{note.Apellido}}</td>
      <td>{{note.Nombre}}</td>
      <td>{{note.Código}}</td>
      <td>{{note.Programa}}</td>
      <td>{{note.DireccionDependencia}}</td>
      <td>{{note.Cargo}}</td>
      <td>{{note.FechaIngreso}}</td>
      <td>{{note.FechaNacimiento}}</td>
      <td>{{note.Edad}}</td>
      <td>{{note.Sexo}}</td>
      <td>{{note.Sueldo}}</td>
    </tr>
   
  </tbody>
  </table>
</template>

<script>
export default {
    name:'myTabla',
    props: {
        note: {
            type: Object,
            default: () => ({
                id:0,
                 Apellido: '',
      Nombre: '',
      Cédula: '',
      Código: '',
      Programa: '',
      DireccionDependencia: '',
      Cargo: '',
      FechaIngreso: '',
      FechaNacimiento: '',
      Edad: '',
      Sexo: '',
      Sueldo: '',
            })
        }
    }
}
</script>