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
                        <input v-model="gender" value="male" name="group1" type="radio" id="m" />
                        <span>Male Only </span>
                      </label>
                    </p>
                  </div>
                  <div class="input-field col s4">
                    <p>
                      <label>
                        <input v-model="gender" value="female" name="group1" type="radio" id="f" />
                        <span>Female Only </span>
                      </label>
                    </p>
                  </div>
                  <div class="input-field col s4">
                    <p>
                      <label>
                        <input v-model="gender" value="coed" name="group1" type="radio" id="na" />
                        <span>coed</span>
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
                      <input v-model="status" value="avaliable" name="group1" type="radio"  id="avail"/>
                      <span>Avaliable Rooms</span>
                    </label>
                  </p>
                </div>
                  <div class="col s6">
                    <p>
                      <label>
                        <input v-model="status" value="not avaliable" name="group1" type="radio" id="notavail" />
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
          hasWiFi: false,
          hasParking: false,
          wheelChairAccessible: false,
          houseKeepingServices: false,
          laundryFacilities: false,
          sharedStudyArea: false,
          hasElevator: false,
          gender: "",
          status: ""
    }
  },
  methods: {
    saveBuilding(){

      axios.post("http://localhost:3010/admin/buildings/create", {
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
        gender: this.gender,
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