<template>
  <div class="apartments">
      <section>
        <div class="container">
          <div class="row col xl12">
            <h1>Apartments</h1>
            <button class="btn waves-effect waves-light">CREATE APARTMENT</button>
          </div>
          <div class="row">
            <div class="col xl12">
              <table>
                <thead>
                  <tr>
                      <th>Building Name</th>
                      <th>Contact Info</th>
                      <th>Address</th>
                      <th>Status</th>
                      <th></th>
                      <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-bind:key="apt._id" v-for="apt in apartments">
                    <td>{{apt.name}}</td>
                    <td>{{apt.ownerTel}}</td>
                    <td>{{apt.address}}</td>
                    <td>{{apt.status}}</td>
                    <td>
                      <router-link :to="{ name: 'editapartment', params: { id: apt._id }}">
                        <a href="#"><i class="material-icons">edit</i></a>
                      </router-link>
                    </td>
                    <td>
                      <a class="btn-floating modal-trigger" href="#delete" >
                        <i class="material-icons">delete</i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name : "apartments",
  data(){
        return{
            apartments: [] 
    }
  },
  mounted(){
    axios.get("http://swe2.varion.co:3010/admin/buildings")
    .then(data=>{
      window.console.log(data.data.data)
      data.data.data.forEach(element => {
        this.apartments.push(element)
      });
    })
    .catch(err=>{
      window.console.log(err)
    })
  }
}
</script>
