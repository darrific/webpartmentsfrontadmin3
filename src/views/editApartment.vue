<template>
  <div class="editapartment">
     <section>
       <div class="container">

         <div>
           <h1>Edit {{apt.name}}</h1>
         </div>

          <div class="row">
            <h5>Main Information</h5>
            <form class="col s12">
              <div class="row">
                <div class="input-field col s4">
                  <input id="apt_name" type="text" class="validate" v-model="apt.name">
                  <span class="helper-text">Apartment Name</span>
                </div>
                <div class="input-field col s4">
                  <input id="gen_cost" type="number" class="validate" :value="apt.generalCost">
                  <span class="helper-text">General Cost</span>
                </div>
                <div class="input-field col s4">
                  <input v-model="apt.dateCreated" id="date_created" type="text" class="validate">
                  <span class="helper-text">Date Created</span>
                </div>
              </div>
              <div>
                <div class="row">
                  <form action="#">
                    <div class="col s4">
                      <p>
                        <label>
                          <input v-model="apt.maleOnly" name="group1" type="radio" required id="m" />
                          <span>Male Only </span>
                        </label>
                    </p>
                    </div>
                    <div class="col s4">
                      <p>
                        <label>
                          <input v-model="apt.femaleOnly" name="group1" type="radio" id="f" />
                          <span>Female Only </span>
                        </label>
                      </p>
                    </div>
                    <div class="col s4">
                      <p>
                        <label>
                          <input v-model="apt.coed" name="group1" type="radio" id="na" />
                          <span>n/a</span>
                        </label>
                      </p>
                    </div>
                  </form>
                </div>

              </div>
              <div class="row">
                <form action="#">
                  <div class="col s6">
                  <p>
                    <label>
                      <input v-model="apt.status" name="group1" type="radio"  id="avail"/>
                      <span>Avaliable Rooms</span>
                    </label>
                  </p>
                </div>
                  <div class="col s6">
                    <p>
                      <label>
                        <input v-model="apt.status"  name="group1" type="radio" id="notavail" />
                        <span>No Avaliable Rooms</span>
                      </label>
                    </p>
                  </div>
                </form>
              </div>
              <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s12">
                      <input v-model="apt.policies" id="apt_pol" type="text" class="validate">
                      <span class="helper-text">Policies</span>
                  </div>
                  </div>
                </form>
              </div>
              <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s12">
                      <input v-model="apt.description" id="desc" type="text" class="validate">
                      <span class="helper-text">Desctiption</span>
                    </div>
                  </div>
                </form>
              </div>
            </form>
          </div>

          <div class="row">
            <h5>Owner Information</h5>
            <form class="col s12">
              <div class="row">
                <div class="input-field col s4">
                  <input v-model="apt.owner" id="owner_name" type="text" class="validate">
                  <span class="helper-text">Owner Name</span>
                </div>
                <div class="input-field col s4">
                  <input v-model="apt.ownerTel" id="owner_phone_number" type="number" class="validate">
                  <span class="helper-text">Owner Telephone Number</span>
                </div>
                <div class="input-field col s4">
                  <input v-model="apt.ownerEmail" id="owner_email" type="text" class="validate">
                  <span class="helper-text">Owner Email</span>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input v-model="apt.address" id="apartment_address" type="text" class="validate">
                  <span class="helper-text">Apartment Address</span>
                </div>
              </div>
              <label for="room_types">Room Types</label>
              <table id="room_types">
                <thead>
                  <tr>
                      <th>Room Type Name</th>
                      <th>Price</th>
                      <th>Create</th>
                      <th>Edit</th>
                      <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Studio</td>
                    <td>3137</td>
                    <td>
                    <router-link :to="{name: 'createroomtype'}">
                        <a class="btn-floating" href="#">
                          <i class="material-icons">add</i>
                        </a>
                      </router-link>
                    </td>
                    <td>
                      <router-link :to="{name: 'editroomtype'}">
                        <a class="btn-floating" href="#">
                          <i class="material-icons">edit</i>
                        </a>
                      </router-link>   
                    </td>
                    <td>
                      <router-link :to="{name: 'createapartment'}">
                        <a class="btn-floating" href="#delete" >
                          <i class="material-icons">delete</i>
                        </a>
                      </router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>

          <div>
            <h5>Amenities</h5>
            <div class="row">
                <div class="input-field col s4">
                  <form action="#">
                    <p>
                      <label>
                        <input v-model="apt.wifiProvided" type="checkbox" />
                        <span>WiFi</span>
                       </label>
                    </p>
                  </form>
                </div>
                <div class="input-field col s4">
                  <form action="#">
                    <p>
                      <label>
                        <input v-model="apt.laundryFacilities" type="checkbox" />
                        <span>Laundry Facilities</span>
                       </label>
                    </p>
                  </form>
                </div>
                <div class="input-field col s4">
                  <form action="#">
                    <p>
                      <label>
                        <input v-model="apt.hasParking" type="checkbox" />
                        <span>Parking</span>
                       </label>
                    </p>
                  </form>
                </div>
                <div class="input-field col s4">
                  <form action="#">
                    <p>
                      <label>
                        <input v-model="apt.wheelChairAccessible" type="checkbox" />
                        <span>Wheel Chair Accessibility</span>
                       </label>
                    </p>
                  </form>
                </div>
                <div class="input-field col s4">
                  <form action="#">
                    <p>
                      <label>
                        <input v-model="apt.houseKeepingServices" type="checkbox" />
                        <span>House Keeping Services</span>
                       </label>
                    </p>
                  </form>
                </div>
                <div class="input-field col s4">
                  <form action="#">
                    <p>
                      <label>
                        <input v-model="apt.sharedStudyArea" type="checkbox" />
                        <span>Shared Study Area</span>
                       </label>
                    </p>
                  </form>
                </div>
                <div class="input-field col s12">
                  <form action="#">
                    <p>
                      <label>
                        <input v-model="apt.hasElevator" type="checkbox" />
                        <span>Elevator</span>
                       </label>
                    </p>
                  </form>
                </div>
                <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s12">
                      <input v-model="apt.amenities" id="desc" type="text" class="validate">
                      <span class="helper-text">Amenities</span>
                    </div>
                  </div>
                </form>
              </div>
                <div class="row">
                  <form class="col s12">
                    <div class="row">
                      <div class="input-field col s12">
                        <input v-model="apt.laundryPolicy" id="desc" type="text" class="validate">
                        <span class="helper-text">Laundry Policy</span>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="row">
                  <form class="col s12">
                    <div class="row">
                      <div class="input-field col s12">
                        <input v-model="apt.securityFeatures" id="desc" type="text" class="validate">
                        <span class="helper-text">Security Features</span>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="input-field col s6">
                  <input v-model="apt.numberOfFloors" id="num_floors" type="number" class="validate">
                  <span class="helper-text">Number of Floors</span>
                </div>
                <div class="input-field col s6">
                  <input v-model="apt.walkingDistanceToCampus" id="walking_dist" type="number" class="validate">
                  <span class="helper-text">Walking Distance To Campus</span>
                </div>
              </div>
          </div>

          <div>
            <h5>Images</h5>
            <div class="row">
              <div class="col s6">
                <h6>Primary Image</h6>
                <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>UPLOAD</a>
              </div>
              <div class="col s6">
                <h6>Thumbnail</h6>
                <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>UPLOAD</a>
              </div>
            </div>
          </div>

          <div>
            <h5>Reviews</h5>
            <div class="row">
              <table>
                <thead>
                  <tr>
                      <th>User Name</th>
                      <th>Review</th>
                      <th>View</th>
                      <th>Delete</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Alvin</td>
                    <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi rerum animi voluptas sunt, voluptatum commodi ad inventore maiores eveniet a itaque possimus qui placeat? Nulla distinctio vitae optio ea illo.</td>
                    <td><i class="material-icons">remove_red_eye</i></td>
                    <td><i class="material-icons">delete</i></td>
                  </tr>
                  <tr>
                    <td>Alan</td>
                    <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, totam porro. Quo vitae fugiat corporis? Sit dignissimos, tempore aliquam laboriosam sed voluptatum accusamus pariatur ipsum, blanditiis sint asperiores, necessitatibus aliquid.</td>
                    <td><i class="material-icons">remove_red_eye</i></td>
                    <td><i class="material-icons">delete</i></td>
                  </tr>
                  <tr>
                    <td>Jonathan</td>
                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sint accusamus qui consectetur quis sequi pariatur fugiat earum, eum soluta possimus quam deserunt minus excepturi! Magnam vitae ab debitis sunt?</td>
                    <td><i class="material-icons">remove_red_eye</i></td>
                    <td><i class="material-icons">delete</i></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="row">
            <a @click="updateBuilding" class="waves-effect waves-light btn-small"><i class="material-icons right">check</i>Done</a>         
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
      apt: {}
    }
  },
  mounted(){
    axios.get("http://swe2.varion.co:3010/admin/buildings/"+this.$route.params.apartmentId)
    .then(data=>{
      this.apt = data.data.data;
      console.log(data)
      console.log(this.apt)
      if(this.apt.maleOnly == true) document.getElementById('m').checked = true;
      if(this.apt.femaleOnly == true) document.getElementById('f').checked = true;
      if(this.apt.coed == true) document.getElementById('na').checked = true;
      if (this.apt.status == "avaliable") document.getElementById('avail').checked = true;
      if (this.apt.status == "not avaliable") document.getElementById('notavail').checked = true;
    })
  },
  methods: {
    updateBuilding(){

      if (document.getElementById('m').checked){
        this.apt.maleOnly = true
        this.apt.femaleOnly = false
        this.apt.coed = false
      }

      if (document.getElementById('f').checked){
        this.apt.maleOnly = false
        this.apt.femaleOnly = true
        this.apt.coed = false
      }

      if (document.getElementById('na').checked){
        this.apt.maleOnly = false
        this.apt.femaleOnly = false
        this.apt.coed = true
      }

      if (this.apt.status == "avaliable")  document.getElementById('avail').checked;
      if (this.apt.status == "not avaliable") document.getElementById('notavail').checked;

      if (this.apt.hasWiFi  == null) this.hasWiFi = false
      if (this.apt.laundryFacilities  == null) this.laundryFacilities = false
      if (this.apt.hasParking  == null) this.hasParking = false
      if (this.apt.wheelChairAccessible  == null) this.wheelChairAccessible = false
      if (this.apt.houseKeepingServices  == null) this.houseKeepingServices = false
      if (this.apt.sharedStudyArea  == null) this.sharedStudyArea = false
      if (this.apt.hasElevator  == null) this.hasElevator = false

      axios.post("http://swe2.varion.co:3010/admin/buildings/edit", {
        id: this.apt._id,
        name: this.apt.name,
        owner: this.apt.owner,
        ownerTel: this.apt.ownerTel,
        ownerEmail: this.apt.ownerEmail,
        // primaryImage: String,
        address: this.apt.address,
        // comments: [commentSchema],
        generalCost: this.apt.generalCost,
        // roomTypes: [roomSchema],
        status: this.apt.status,
        description: this.apt.desctiption,
        dateCreated: this.apt.dateCreated,
        amenities: this.apt.amenities,
        policies: this.apt.policies,
        wifiProvided: this.apt.wifiProvided,
        laundryFacilities: this.apt.laundryFacilities,
        laundryPolicy: this.apt.laundryPolicy,
        walkingDistanceToCampus: this.apt.walkingDistanceToCampus,
        sharedStudyArea: this.apt.securityFeatures,
        securityFeatures: this.apt.securityFeatures,
        numberOfFloors: this.apt.numberOfFloors,
        hasParking: this.apt.hasParking,
        maleOnly: this.apt.maleOnly,
        femaleOnly: this.apt.femaleOnly,
        coed: this.apt.console,
        wheelChairAccessible: this.apt.wheelChairAccessible,
        houseKeepingServices: this.apt.houseKeepingServices,
        hasElevator: this.apt.hasElevator
      })
      .then(data=>{
        console.log(data);
        if (data.data.success){
          console.log("Edited");
        }
        if (!data.data.success){
          console.log("Failed");
        }
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>