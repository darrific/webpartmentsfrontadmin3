<template>
  <div class="createApartment">
      <section>
        <div class="container">
          <h1>Create An Apartment</h1>
          <div class="row col xl12">
            <div>
            <h5>Main Information</h5>
            <form class="col s12">
              <div class="row">
                <div class="input-field col s4">
                  <input v-model="aptName" id="apt_name" type="text" class="validate">
                  <label for="apt_name">Apartment Name</label>
                </div>
                <div class="input-field col s4">
                  <input v-model="generalCost" id="gen_cost" type="number" class="validate">
                  <label for="gen_cost">General Cost (Between 1 and 3)</label>
                </div>
                <div class="input-field col s4">
                  <input v-model="dateCreated" id="date_created" type="text" class="validate">
                  <label for="date_created">Date Created</label>
                </div>
              </div>
              <div>
                <form action="#">
                  <div class="input-field col s4">
                    <p>
                      <label>
                        <input v-model="maleOnly" name="group1" type="radio" required id="m" />
                        <span>Male Only </span>
                      </label>
                    </p>
                  </div>
                  <div class="input-field col s4">
                    <p>
                      <label>
                        <input v-model="femaleOnly" name="group1" type="radio" id="f" />
                        <span>Female Only </span>
                      </label>
                    </p>
                  </div>
                  <div class="input-field col s4">
                    <p>
                      <label>
                        <input v-model="coed" name="group1" type="radio" id="na" />
                        <span>n/a </span>
                      </label>
                    </p>
                  </div>
                </form>
              </div>
              <div class="row">
                <form action="#">
                  <div class="col s6">
                  <p>
                    <label>
                      <input v-model="status" name="group1" type="radio"  id="avail"/>
                      <span>Avaliable Rooms</span>
                    </label>
                  </p>
                </div>
                  <div class="col s6">
                    <p>
                      <label>
                        <input v-model="status"  name="group1" type="radio" id="notavail" />
                        <span>No Avaliable Rooms</span>
                      </label>
                    </p>
                  </div>
                </form>
              </div>
              <div class="row">
                <form class="col s12">
                  <div class="input-field col s12">
                    <input v-model="policies" id="apt_pol" type="text" class="validate">
                    <label for="apt_name">Apartment Policy</label>
                  </div>
                </form>
              </div>
              <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s12">
                      <input v-model="description" id="desc" type="text" class="validate">
                      <label for="apt_name">Description</label>
                    </div>
                  </div>
                </form>
              </div>
              <h5>Room Types</h5>
              <div class="row"></div>
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
          <div class="row"></div>
          <div class="row"></div>

          <div>
            <h5>Owner Information</h5>
            <div class="row"></div>
            <form class="col s12">
              <div class="row">
                <div class="input-field col s4">
                  <input v-model="owner" id="owner_name" type="text" class="validate">
                  <label for="owner_name">Owner Name</label>
                </div>
                <div class="input-field col s4">
                  <input v-model="ownerTel" id="owner_phone_number" type="number" class="validate">
                  <label for="owner_phone_number">Owner Phone Number</label>
                </div>
                <div class="input-field col s4">
                  <input v-model="ownerEmail" id="owner_email" type="text" class="validate">
                  <label for="owner_email">Owner Email</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input v-model="address" id="apartment_address" type="text" class="validate">
                  <label for="apartment_address">Apartment Address</label>
                </div>
              </div>
            </form>
          </div>

          <div>
            <h5>Amenities</h5>
            <div class="row">
                <div class="input-field col s4">
                  <form action="#">
                    <p>
                      <label>
                        <input v-model="hasWiFi" type="checkbox" />
                        <span>WiFi</span>
                       </label>
                    </p>
                  </form>
                </div>
                <div class="input-field col s4">
                  <form action="#">
                    <p>
                      <label>
                        <input v-model="laundryFacilities" type="checkbox" />
                        <span>Laundry Facilities</span>
                       </label>
                    </p>
                  </form>
                </div>
                <div class="input-field col s4">
                  <form action="#">
                    <p>
                      <label>
                        <input v-model="hasParking" type="checkbox" />
                        <span>Parking</span>
                       </label>
                    </p>
                  </form>
                </div>
                <div class="input-field col s4">
                  <form action="#">
                    <p>
                      <label>
                        <input v-model="wheelChairAccessible" type="checkbox" />
                        <span>Wheel Chair Accessibility</span>
                       </label>
                    </p>
                  </form>
                </div>
                <div class="input-field col s4">
                  <form action="#">
                    <p>
                      <label>
                        <input v-model="houseKeepingServices" type="checkbox" />
                        <span>House Keeping Services</span>
                       </label>
                    </p>
                  </form>
                </div>
                <div class="input-field col s4">
                  <form action="#">
                    <p>
                      <label>
                        <input v-model="sharedStudyArea" type="checkbox" />
                        <span>Shared Study Area</span>
                       </label>
                    </p>
                  </form>
                </div>
                <div class="input-field col s12">
                  <form action="#">
                    <p>
                      <label>
                        <input v-model="hasElevator" type="checkbox" />
                        <span>Elevator</span>
                       </label>
                    </p>
                  </form>
                </div>
                <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s12">
                      <input v-model="amenities" id="desc" type="text" class="validate">
                      <label for="apt_name">Other Amenities</label>
                    </div>
                  </div>
                </form>
              </div>
                <div class="row">
                  <form class="col s12">
                    <div class="row">
                      <div class="input-field col s12">
                        <input v-model="laundryPolicy" id="desc" type="text" class="validate">
                        <label for="apt_name">Laundry Policy</label>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="row">
                  <form class="col s12">
                    <div class="row">
                      <div class="input-field col s12">
                        <input v-model="securityFeatures" id="desc" type="text" class="validate">
                        <label for="apt_name">Security Features</label>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="input-field col s6">
                  <input v-model="numFloors" id="num_floors" type="number" class="validate">
                  <label for="num_floors">Number of Floors</label>
                </div>
                <div class="input-field col s6">
                  <input v-model="walkingDistance" id="walking_dist" type="number" class="validate">
                  <label for="walking_dist">Walking Distance to Campus</label>
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
          <div class="row">
            <a v-on:click="saveBuilding" class="waves-effect waves-light btn-small"><i class="material-icons right">check</i>Done</a>         
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
          aptName: "",
          generalCost: "",
          owner: "",
          ownerTel: "",
          ownerEmail: "",
          address: "",
          dateCreated: "",
          aptPolicy: "",
          description: "",
          policies: "",
          amenities: "",
          laundryPolicy: "",
          securityFeatures: "",
          numFloors: "",
          walkingDistance: "",
          hasWiFi: "",
          hasParking: "",
          wheelChairAccessible: "",
          houseKeepingServices: "",
          laundryFacilities: "",
          sharedStudyArea: "",
          hasElevator: "",
          maleOnly: "",
          femaleOnly: "",
          coed: "",
          status: ""
    }
  },
  methods: {
    saveBuilding(){
      // var today = new Date();
      // var dd = String(today.getDate()).padStart(2, '0');
      // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      // var yyyy = today.getFullYear();
      // today = mm + '-' + dd + '-' + yyyy;
      // console.log(typeof today);

      if (document.getElementById('m').checked){
        this.maleOnly = true
        this.femaleOnly = false
        this.coed = false
      }

      if (document.getElementById('f').checked){
        this.maleOnly = false
        this.femaleOnly = true
        this.coed = false
      }

      if (document.getElementById('na').checked){
        this.maleOnly = false
        this.femaleOnly = false
        this.coed = true
      }

      var ya = document.getElementById('avail').checked;
      var na = document.getElementById('notavail').checked;
      if (ya) this.status = "avaliable";
      if (na) this.status = "not avaliable";

      if (this.hasWiFi != true) this.hasWiFi = false
      if (this.laundryFacilities != true) this.laundryFacilities = false
      if (this.hasParking != true) this.hasParking = false
      if (this.wheelChairAccessible != true) this.wheelChairAccessible = false
      if (this.houseKeepingServices != true) this.houseKeepingServices = false
      if (this.sharedStudyArea != true) this.sharedStudyArea = false
      if (this.hasElevator != true) this.hasElevator = false

      axios.post("http://swe2.varion.co:3010/admin/buildings/create", {
        name: this.aptName,
        owner: this.owner,
        ownerTel: this.ownerTel,
        ownerEmail: this.ownerEmail,
        // primaryImage: String,
        address: this.address,
        // comments: [commentSchema],
        generalCost: this.generalCost,
        // roomTypes: [roomSchema],
        status: this.status,
        description: this.description,
        dateCreated: this.dateCreated,
        amenities: this.amenities,
        policies: this.policies,
        wifiProvided: this.hasWiFi,
        laundryFacilities: this.laundryFacilities,
        laundryPolicy: this.laundryPolicy,
        walkingDistanceToCampus: this.walkingDistance,
        sharedStudyArea: this.sharedStudyArea,
        securityFeatures: this.securityFeatures,
        numberOfFloors: this.numFloors,
        hasParking: this.hasParking,
        maleOnly: this.maleOnly,
        femaleOnly: this.femaleOnly,
        coed: this.coed,
        wheelChairAccessible: this.wheelChairAccessible,
        houseKeepingServices: this.houseKeepingServices,
        hasElevator: this.hasElevator

      })
      .then(data=>{
        console.log(data)


        if (data.data.success){
          console.log("Created");
        }
        if (!data.data.success){
          console.log("Was Not Created");
        }
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>