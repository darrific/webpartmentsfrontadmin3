<template>
  <div class="editRoomType">
      <section>
        <div class="container">
            <div>
                <h1>Edit Room Type</h1>
            </div>
            <div>
                <h5>Images</h5>
                <div class="row">
                <div class="col s6">
                    <h6>Primary Image</h6>
                    <br>
                    <img :src="room.coverImgURL" width="100%" alt="">
                    <input type="file" @change="roomCoverChanged">
                    <button class="btn" @click="uploadRoomCover">Upload</button>
                    <!-- <form :action="room.coverUploadURL" method="POST" enctype="multipart/form-data">
                    <div class="file-field input-field">
                        <img :src="room.coverImgURL" width="200px" alt="">
                        <input type="file" id="roomTypeCover" ref="roomTypeCover" name="roomTypeCover">
                        <div class="file-path-wrapper"></div>
                    </div>
                    <button class="btn" type="submit">Upload</button>
                    </form> -->
                </div>
                </div>
            </div>
                <div class="row">
                    <h5>Main Information</h5>
                    <form class="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                            <input v-model="room.name" id="room_type_name" type="text" class="validate">
                            <span class="grey-text" for="room_type_name">Room Type Name</span>
                        </div>
                        <div class="input-field col s6">
                            <input v-model="room.price" id="price" type="number" class="validate">
                            <span class="grey-text" for="price">Price</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s4">
                            <input v-model="room.stars" id="star_rating" type="number" class="validate">
                            <span class="grey-text" for="star_rating">Star Rating (1 to 5)</span>
                        </div>
                        <div class="input-field col s4">
                            <input v-model="room.numberOfBedrooms" id="num_beds" type="number" class="validate">
                            <span class="grey-text" for="num_beds">Number of Bedrooms</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input v-model="room.description" id="description" type="text" class="validate">
                            <span class="grey-text" for="description">Description</span>
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
                            <input v-model="room.hasAC" type="checkbox" />
                            <span>AC</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="room.hasBed" type="checkbox" />
                            <span>Bed</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="room.hasRefrigerator" type="checkbox" />
                            <span>Refrigerator</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="room.hasDesk" type="checkbox" />
                            <span>Desk</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="room.hasWardrobe" type="checkbox" />
                            <span>Wardrobe</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="room.communalBathroom" type="checkbox" />
                            <span>Communial Bathroom</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="room.hasSmokeDetector" type="checkbox" />
                            <span>Smoke Detector</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="room.hasMicrowave" type="checkbox" />
                            <span>Microwave</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="room.hasTelevision" type="checkbox" />
                            <span>Television</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="room.hasCouch" type="checkbox" />
                            <span>Couch</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="room.hasChair" type="checkbox" />
                            <span>Chair</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="room.hasHotWater" type="checkbox" />
                            <span>Hot Water</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="room.communalKitchen" type="checkbox" />
                            <span>Communial Kitchen</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="room.privateKitchen" type="checkbox" />
                            <span>Private Kitchen</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="room.privateBathroom" type="checkbox" />
                            <span>Private Bathroom</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="row">
                    <form class="col s12">
                        <div class="row">
                        <div class="input-field col s12">
                            <input v-model="room.otherFurnishings" id="other_furnishings" type="text" class="validate">
                            <span class="grey-text" for="other_furnishings">Other Furnishings</span>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>

            <div class="row">
                <a @click="saveRoomType" class="waves-effect waves-light btn-small"><i class="material-icons right">check</i>Save Room Type</a>         
            </div>

          </div>
      </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "roomType",
    data(){
        return{
            room: {},
            selectedFile: null
        }
    },
    mounted(){
        axios.post("http://localhost:3010/admin/buildings/roomtypes/", {
            buildingId: this.$route.params.bid,
            roomTypeId: this.$route.params.rid,
            headers: {
                Authorization: "Bearer " + this.$store.state.token
            }
        })
        .then(data=>{
            console.log(data);
            this.room = data.data.data
            this.room.coverUploadURL = "http://localhost:3010/admin/buildings/roomTypes/uploadCover/"+this.room._id;
            this.room.coverImgURL = "https://webpartments.nyc3.digitaloceanspaces.com/roomTypeCover-"+this.room._id;
        })
        .catch(err=>{
            console.log(err);
        })
    },
    methods: {
        saveRoomType(){
            axios.post("http://localhost:3010/admin/buildings/roomtypes/edit",{
                roomTypeId: this.$route.params.rid,
                name: this.room.name,
                stars: this.room.stars,
                price: this.room.price,
                hasAC:  this.room.hasAC,
                hasBed: this.room.hasBed,
                hasRefrigerator: this.room.hasRefrigerator,
                hasMicrowave: this.room.hasMicrowave,
                hasTelevision: this.room.hasTelevision,
                hasCouch: this.room.hasCouch,
                hasDesk: this.room.hasDesk,
                hasChair: this.room.hasChair,
                hasWardrobe: this.room.hasWardrobe,
                otherFurnishings: this.room.otherFurnishings,
                hasHotWater: this.room.hasHotWater,
                numberOfBedrooms: this.room.numberOfBedrooms,
                privateKitchen: this.room.privateKitchen,
                communalKitchen: this.room.communalKitchen,
                privateBathroom: this.room.privateBathroom,
                communalBathroom: this.room.communalBathroom,
                description: this.room.description,
                hasSmokeDetector: this.room.hasSmokeDetector
            })
            .then(data=>{
                if (data.data.success){
                    M.toast({html: 'Room Type Edited'})
                    // this.$router.push({ name: "editapartment", props: {apartmentId: this.$route.params.apartmentId}})
                }
                if (!data.data.success){
                    console.log(data.data);
                    M.toast({html: 'Error'})
                }
            })
            .catch(err=>{
                console.log(err);
            })
        },
        roomCoverChanged(){
            this.selectedFile = event.target.files[0];
        },
        uploadRoomCover(){
            const formData = new FormData()
            formData.append('roomTypeCover', this.selectedFile, this.selectedFile.name)
            axios({
                method: 'post',
                url: this.room.coverUploadURL,
                data: formData,
                headers: {
                Authorization: "Bearer " + this.$store.state.token,
                headers: {'Content-Type': 'multipart/form-data' }
                }
            })
            .then(data=>{
                console.log(data);
                M.toast({html: 'Room Cover Changed'})
                this.room.coverImgURL = data.data[0].location;
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
}
</script>