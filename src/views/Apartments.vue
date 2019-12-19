<template>
  <div class="apartments">
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4>Delete {{deleteName}}</h4>
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
            <i class="material-icons" @click="deleteBuilding(this.deleteid)">delete</i>
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
                      <th>Contact Info</th>
                      <th>Address</th>
                      <th>Rooms Available</th>
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
                      <router-link :to="apt.editURL">
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
export default {
  name : "apartments",
  data(){
        return{
            apartments: [],
            deleteid: "",
            deleteName: ""

    }
  },
  mounted(){
    $('.modal').modal()
    axios.get("http://localhost:3010/admin/buildings",{
      headers: {
        Authorization: "Bearer " + this.$store.state.token
      }
    })
    .then(data=>{
      data.data.data.forEach(element => {
        element.editURL = "/editApartment/"+element._id
        this.apartments.push(element)
        console.log(this.$store.state.token);
      });
    })
    .catch(err=>{
      window.console.log(err)
    })
  },
  methods: {
    deleteModal(id,name){
      $('.modal').modal('open');
      this.deleteName = name;
      this.deleteid = id;
  
    },
    deleteBuilding(id){
      this.deleteid = id;
      axios.post("http://localhost:3010/admin/buildings/delete/", {
        buildingId: this.deleteid,
      })
      .then(data=>{
        if(data.data.success){
          this.apartments.splice(this.apartments.findIndex(x => x._id == this.deleteid), 1)
          M.toast({html: 'Apartment Deleted'})
          console.log("Deleted")
        }
      })
      .catch(err=>{
        console.log(err);
      })
    }
  },
    
}
</script>
