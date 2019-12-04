<template>
  <div class="editapartment">
     <section>
       <div class="container">

         <div>
           <h1>Edit {{apt.name}}</h1>
           <p class="grey-text">{{apt._id}}</p>
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
                  <input id="gen_cost" type="number" class="validate" v-model="apt.generalCost">
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
                          <input v-model="apt.gender" value="male" name="group1" type="radio"/>
                          <span>Male Only </span>
                        </label>
                      </p>
                    </div>
                    <div class="col s4">
                      <p>
                        <label>
                          <input v-model="apt.gender" value="female" name="group1" type="radio"/>
                          <span>Female Only </span>
                        </label>
                      </p>
                    </div>
                    <div class="col s4">
                      <p>
                        <label>
                          <input v-model="apt.gender" value="coed" name="group1" type="radio"/>
                          <span>coed</span>
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
                      <input v-model="apt.status" value="avaliable" name="group1" type="radio"/>
                      <span>Avaliable Rooms</span>
                    </label>
                  </p>
                </div>
                  <div class="col s6">
                    <p>
                      <label>
                        <input v-model="apt.status" value="not avaliable" name="group1" type="radio"/>
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
                      <span class="helper-text">Description</span>
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
              <h5>Room Types</h5> 
              <router-link :to="{name: 'createroomtype', params: {apartmentId: apt._id, buildingName: apt.name}}">
                <button class="btn">Add Room</button>
              </router-link>                
              <table id="room_types">
                <thead>
                  <tr>
                      <th>Room Type Name</th>
                      <th>Price</th>
                      <th>Edit</th>
                      <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-bind:key="r._id" v-for="r in apt.roomTypes">
                    <td>{{r.name}}</td>
                    <td>{{r.price}}</td>
                    <td>
                      <router-link :to="r.editURL">
                        <a class="btn-floating" href="#">
                          <i class="material-icons">edit</i>
                        </a>
                      </router-link>   
                    </td>
                    <td>
                      <a class="btn-floating" @click="deleteRoomType(r._id)">
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
                <b>Primary Image</b>
                <hr>
                <img :src="coverImgURL" width="100%" alt="">
                <input type="file" @change="buildingCoverChanged">
                <button class="btn" @click="uploadBuildingCover">Upload!</button>
                <!-- <form :action="coverUploadURL" method="POST" enctype="multipart/form-data">
                  <div class="file-field input-field">
                    <img :src="coverImgURL" width="100%" alt="">
                    <input type="file" id="buildingCover" ref="buildingCover" name="buildingCover">
                    <div class="file-path-wrapper"></div>
                  </div>
                  <button class="btn" type="submit">Upload</button>
                </form> -->
              </div>
              <div class="col s6">
                <b>Gallery</b>
                <hr>
                <div class="row">
                  <div class="col s4 galleryItemOuter" v-for="{img, key, index} in buildingGallery" :key="key">
                    <i class="material-icons right" @click="deleteGalleryItem(key, index)">close</i>
                    <div class="imgGalleryItem">
                      <img :src=img width="100%" alt="">
                    </div>
                  </div>
                </div>
                <div>
                  <input type="file" @change="buildingGalleryChanged" multiple>
                  <button class="btn" @click="uploadBuildingGallery">Upload</button>
                </div>
                <!-- <form :action="galleryUploadURL" method="POST" enctype="multipart/form-data">
                  <div class="file-field input-field">
                    <input type="file" id="buildingGalleryImg" ref="buildingGalleryImg" name="buildingGalleryImg" multiple>
                    <div class="file-path-wrapper">
                      <input class="file-path validate" type="text" placeholder="Upload one or more files">
                    </div>
                  </div>
                  <button class="btn" type="submit">Upload</button>
                </form> -->
              </div>
            </div>
          </div>

          <div>
            <h5>Reviews</h5>
            <div class="row">
              <table>
                <thead>
                  <tr>
                      <th>User Id</th>
                      <th>Review</th>
                      <th>Rating</th>
                      <th>Date</th>
                      <th>Delete</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="comment in apt.comments" :key="comment._id">
                    <td>{{comment.userId}}</td>
                    <td>{{comment.commentBody}}</td>
                    <td>{{comment.rating}}</td>
                    <td>{{comment.dateCreated}}</td>
                    <td><a href="#" @click="deleteComment(comment._id)"><i class="material-icons">delete</i></a></td>
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
  name : "editapartment",
  data(){
    return{
      apt: {},
      buildingCover: '',
      coverUploadURL: "",
      coverImgURL: "",
      galleryUploadURL: "",
      buildingGallery: [],
      selectedFile: null,
      fileList: []
    }
  },
  mounted(){
    axios.get("http://localhost:3010/admin/buildings/"+this.$route.params.id, {
      headers: {
        Authorization: "Bearer " + this.$store.state.token
      }})
    .then(data=>{
      this.apt = data.data.data;
      this.coverUploadURL = 'http://localhost:3010/admin/buildings/uploadCover/'+this.apt._id
      this.galleryUploadURL = 'http://localhost:3010/admin/buildings/uploadGallery/'+this.apt._id
      this.coverImgURL = 'https://webpartments.nyc3.digitaloceanspaces.com/buildingCover-'+this.apt._id
      this.apt.gallery.forEach(item=>{this.buildingGallery.push({img: "https://webpartments.nyc3.digitaloceanspaces.com/"+item, key: item})})
      this.apt.roomTypes.forEach(type=>{type.editURL = "/editRoomType/"+this.apt._id+"/"+type._id})
      window.scrollTo(0,top);
    })
  },
  methods: {
    updateBuilding(){
      axios.post("http://localhost:3010/admin/buildings/edit", {
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
        description: this.apt.description,
        dateCreated: this.apt.dateCreated,
        amenities: this.apt.amenities,
        policies: this.apt.policies,
        wifiProvided: this.apt.wifiProvided,
        laundryFacilities: this.apt.laundryFacilities,
        laundryPolicy: this.apt.laundryPolicy,
        walkingDistanceToCampus: this.apt.walkingDistanceToCampus,
        sharedStudyArea: this.apt.sharedStudyArea,
        securityFeatures: this.apt.securityFeatures,
        numberOfFloors: this.apt.numberOfFloors,
        hasParking: this.apt.hasParking,
        gender: this.apt.gender,
        wheelChairAccessible: this.apt.wheelChairAccessible,
        houseKeepingServices: this.apt.houseKeepingServices,
        hasElevator: this.apt.hasElevator
      })
      .then(data=>{
        console.log(data);
        if (data.data.success){
          M.toast({html: 'Building Edited'})
          this.$router.push({ name: "apartments"})
        }
        if (!data.data.success){
          M.toast({html: 'Error'})
        }
      })
      .catch(err=>{
        console.log(err)
      })
    },
    deleteRoomType(id){
      console.log(id);
      axios.post("http://localhost:3010/admin/buildings/roomtypes/delete", {
        roomTypeId: id,
        buildingId: this.apt._id
      })
      .then(data=>{
        console.log(data);
        if (data.data.success){
          M.toast({html: 'It Deleted'})
        }
        if (!data.data.success){
          console.log("Failure ting");
        }
      })
      .catch(err=>{
        console.log(err)
      })
    },
    deleteGalleryItem(item, index){
      axios.post("http://localhost:3010/admin/buildings/deleteGalleryItem", {
        buildingId: this.apt._id,
        itemId: item
      })
      .then(data=>{
        console.log(data);
        if (data.data.success){
          M.toast({html: 'Image Deleted'})
          this.buildingGallery.splice(index,1);
        }
        if (!data.data.success){
          console.log("Image was not deleted");
        }
      })
      .catch(err=>{
        console.log(err)
      })
    },
    deleteComment(id){
      axios.post("http://localhost:3010/admin/buildings/deleteComment", {
        commentId: id
      })
      .then(data=>{
        console.log(data);
        if (data.data.success){
          M.toast({html: 'Comment Deleted'})
        }
        if (!data.data.success){
          console.log("Comment was not deleted");
        }
      })
      .catch(err=>{
        console.log(err)
      })
    },
    buildingGalleryChanged(){
      event.target.files.forEach(file=>{
        this.fileList.push(file);
      })
    },
    uploadBuildingGallery(){
      const formData = new FormData()
      this.fileList.forEach(file=>{
        formData.append('buildingGalleryImg', file, file.name)
      })
      axios({
        method: 'post',
        url: this.galleryUploadURL,
        data: formData,
        headers: {
          Authorization: "Bearer " + this.$store.state.token,
          headers: {'Content-Type': 'multipart/form-data' }
        }
      })
      .then(data=>{
        console.log(data);
        M.toast({html: 'Building Gallery Changed'})
        // this.coverImgURL = data.data[0].location;
        this.apt.gallery = data.data.gallery;
        this.apt.gallery.forEach(item=>{
          this.buildingGallery.push({img: "https://webpartments.nyc3.digitaloceanspaces.com/"+item, key: item})
        })
      })
      .catch(err=>{
        console.log(err);
      })
    },
    buildingCoverChanged(){
      this.selectedFile = event.target.files[0];
    },
    uploadBuildingCover(){
      const formData = new FormData()
      formData.append('buildingCover', this.selectedFile, this.selectedFile.name)
      axios({
        method: 'post',
        url: this.coverUploadURL,
        data: formData,
        headers: {
          Authorization: "Bearer " + this.$store.state.token,
          headers: {'Content-Type': 'multipart/form-data' }
        }
      })
      .then(data=>{
        console.log(data);
        M.toast({html: 'Building Cover Changed'})
        this.coverImgURL = data.data[0].location;
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>
<style scoped>
  .imgGalleryItem{
    height: 130px;
  }

  .galleryItemOuter {
    margin-top: 20px;
  }
</style>