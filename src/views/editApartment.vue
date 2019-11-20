<template>
  <div class="editapartment">
     <section>
       <div class="container">

         <div>
           <h1>Edit "Name of the Apartment Goes Here"</h1>
         </div>

          <div class="row">
            <h5>Main Information</h5>
            <form class="col s12">
              <div class="row">
                <div class="input-field col s6">
                  <input id="apt_name" type="text" class="validate">
                  <label for="apt_name">Apartment Name</label>
                </div>
                <div class="input-field col s6">
                  <input id="gen_cost" type="number" class="validate">
                  <label for="gen_cost">General Cost (Between 1 and 3)</label>
                </div>
              </div>
              <div>
                <div class="input-field col s4">
                  <form action="#">
                    <p>
                      <label>
                        <input name="group1" type="radio" />
                        <span>Male Only </span>
                      </label>
                    </p>
                  </form>
                </div>
                <div class="input-field col s4">
                  <form action="#">
                    <p>
                      <label>
                        <input class="with-gap" name="group1" type="radio"  />
                        <span>Female Only </span>
                      </label>
                    </p>
                  </form>
                </div>
                <div class="input-field col s4">
                  <form action="#">
                    <p>
                      <label>
                        <input class="with-gap" name="group1" type="radio"  />
                        <span>n/a</span>
                      </label>
                    </p>
                  </form>
                </div>
              </div>
               <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s12">
                      <textarea id="amenities" class="materialize-textarea"></textarea>
                      <label for="amenities">Amenities</label>
                    </div>
                  </div>
                </form>
              </div>
              <div class="input-field col s6">
                <form action="#">
                  <p>
                    <label>
                      <input class="with-gap" name="group1" type="radio"  />
                      <span>Avaliable Rooms</span>
                    </label>
                  </p>
                </form>
              </div>
              <div class="input-field col s6">
                <form action="#">
                  <p>
                    <label>
                      <input class="with-gap" name="group1" type="radio"  />
                      <span>No Avaliable Rooms</span>
                    </label>
                  </p>
                </form>
              </div>
              <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s12">
                      <textarea id="policies" class="materialize-textarea"></textarea>
                      <label for="policies">Policies</label>
                    </div>
                  </div>
                </form>
              </div>
              <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s12">
                      <textarea id="description" class="materialize-textarea"></textarea>
                      <label for="description">Desciription</label>
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
                  <input id="owner_name" type="text" class="validate">
                  <label for="owner_name">Owner Name</label>
                </div>
                <div class="input-field col s4">
                  <input id="owner_phone_number" type="number" class="validate">
                  <label for="owner_phone_number">Owner Phone Number</label>
                </div>
                <div class="input-field col s4">
                  <input id="owner_email" type="text" class="validate">
                  <label for="owner_email">Owner Email</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input id="apartment_address" type="text" class="validate">
                  <label for="apartment_address">Apartment Address</label>
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
                      <a class="btn-floating" href="#">
                        <i class="material-icons">add</i>
                      </a>
                    </td>
                    <td>
                      <a class="btn-floating" href="#">
                        <i class="material-icons">edit</i>
                      </a>
                    </td>
                    <td>
                      <a class="btn-floating" href="#delete" >
                        <i class="material-icons">delete</i>
                      </a>
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
                        <input type="checkbox" />
                        <span>WiFi</span>
                       </label>
                    </p>
                  </form>
                </div>
                <div class="input-field col s4">
                  <form action="#">
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Laundry Facilities</span>
                       </label>
                    </p>
                  </form>
                </div>
                <div class="input-field col s4">
                  <form action="#">
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Parking</span>
                       </label>
                    </p>
                  </form>
                </div>
                <div class="input-field col s4">
                  <form action="#">
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Wheel Chair Accessibility</span>
                       </label>
                    </p>
                  </form>
                </div>
                <div class="input-field col s4">
                  <form action="#">
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>House Keeping Services</span>
                       </label>
                    </p>
                  </form>
                </div>
                <div class="input-field col s4">
                  <form action="#">
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Shared Study Area</span>
                       </label>
                    </p>
                  </form>
                </div>
                <div class="row">
                  <form class="col s12">
                    <div class="row">
                      <div class="input-field col s12">
                        <textarea id="laundry_policies" class="materialize-textarea"></textarea>
                        <label for="laundry_policies">Laundry Policy</label>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="row">
                  <form class="col s12">
                    <div class="row">
                      <div class="input-field col s12">
                        <textarea id="security_features" class="materialize-textarea"></textarea>
                        <label for="security_features">Security Features</label>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="input-field col s6">
                  <input id="num_floors" type="number" class="validate">
                  <label for="num_floors">Number of Floors</label>
                </div>
                <div class="input-field col s6">
                  <input id="walking_dist" type="number" class="validate">
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
            <a class="waves-effect waves-light btn-small"><i class="material-icons right">check</i>Done</a>         
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
          aptName: ""
    }
  },
  mounted(){
    axios.get("http://swe2.varion.co:3010/admin/buildings/"+ this.id)
    .then(date=>{
      
    })
  }
  methods: {
    updateBuilding(){

      axios.post("http://swe2.varion.co:3010/admin/buildings/edit/id", {
        name: this.aptName
        // owner: String,
        // ownerTel: String,
        // ownerEmail: String,
        // primaryImage: String,
        // address: String,
        // comments: [commentSchema],
        // generalCost: Number,
        // roomTypes: [roomSchema],
        // status: String,
        // description: String,
        // dateCreated: Number,
        // amenities: [String],
        // policies: [String],
        // wifiProvided: Boolean,
        // laundryFacilities: Boolean,
        // laundryPolicy: String,
        // walkingDistanceToCampus: Number,
        // sharedStudyArea: Boolean,
        // securityFeatures: [String],
        // numberOfFloors: Number,
        // hasParking: Boolean,
        // maleOnly: Boolean,
        // femaleOnly: Boolean,
        // coed: Boolean,
        // wheelChairAccessible: Boolean,
        // houseKeepingServices: Boolean,
        // hasElevator: Boolean
      })
      .then(data=>{
        if (data.success){
          window.console.log("Created")
        }
      })
      .catch(err=>{
        window.console.log(err)
      })
    }
  }
}
</script>