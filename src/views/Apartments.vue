<template>
  <div class="apartments">
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4>Delete {{deleteid}}</h4>
          <h6>Enter Password</h6>
          <div class="row">
          <div class="input-field col s12">
            <input id="password" type="password" class="validate">
            <label for="password">Password</label>
          </div>
      </div>
        </div>
        <div class="modal-footer">
          <a class="btn-floating modal-trigger" href="#" >
            <i class="material-icons" @click="deleteBuilding(apt._id)">delete</i>
          </a>
        </div>
      </div>
      <section>
        <div class="container">
          <div class="row col xl12">
            <h1>Apartments</h1>
            <router-link :to="{name: 'createapartment'}">
              <button class="btn waves-effect waves-light">CREATE APARTMENT</button>
            </router-link>          
          </div>
          <div class="row">
            <div class="col xl12">
              <table>
                <thead>
                  <tr>
                      <th>Building Name</th>
                      <th>Date Created</th>
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
                    <td>{{apt.dateCreated}}</td>
                    <td>{{apt.ownerTel}}</td>
                    <td>{{apt.address}}</td>
                    <td>{{apt.status}}</td>
                    <td>
                      <router-link :to="{ name: 'editapartment', params: { apartmentId: apt._id, apartmentName: apt.name}}">
                        <a href="#"><i class="material-icons">edit</i></a>
                      </router-link>
                    </td>
                    <td>
                      <a class="btn-floating modal-trigger" href="#" >
                        <i class="material-icons" @click="deleteBuilding(apt._id)">delete</i>
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
import Router from 'vue-router'
export default {
  name : "apartments",
  data(){
        return{
            apartments: [],
            deleteid: "" 
    }
  },
  mounted(){
    $('.modal').modal()
    axios.get("http://swe2.varion.co:3010/admin/buildings")
    .then(data=>{
      data.data.data.forEach(element => {
        this.apartments.push(element)
      });
    })
    .catch(err=>{
      window.console.log(err)
    })
  },
  methods: {
    deleteBuilding(id){
      $('.modal').modal('open')
      this.deleteid = this.apartments[this.apartments.findIndex(element => element._id == id)].name
      if (document.getElementById("password").value === "dW5KYext*vgj=%^B"){
        
        axios.post("http://swe2.varion.co:3010/admin/buildings/delete/", {
        buildingId: id
        })
        .then(data=>{
          if(data.data.success){
            this.apartments.splice(this.apartments.findIndex(element => element._id == id), 1)
            console.log("Deleted")
          }
          if(!data.data){
            console.log("Not Deleted")
          }
        })
        .catch(err=>{
          console.log(err);
        })
      }
      else {
        console.log('IDK')
      }
      
    }
  },
    
}
</script>
