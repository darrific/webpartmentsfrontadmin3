<template>
  <div class="editRoomType">
      <section>
        <div class="container">
          <div>
              <h1>Edit Room Type</h1>
          </div>    
                <div class="row">
                    <h5>Main Information</h5>
                    <form class="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                            <input v-model="room.name" id="room_type_name" type="text" class="validate">
                            <label for="room_type_name">Room Type Name</label>
                        </div>
                        <div class="input-field col s6">
                            <input v-model="room.price" id="price" type="number" class="validate">
                            <label for="price">Price</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s4">
                            <input v-model="room.stars" id="star_rating" type="number" class="validate">
                            <label for="star_rating">Star Rating (1 to 5)</label>
                        </div>
                        <div class="input-field col s4">
                            <input v-model="room.numberOfBedrooms" id="num_beds" type="number" class="validate">
                            <label for="num_beds">Number of Bedrooms</label>
                        </div>
                        <div class="col s4">
                            <input v-model="room.dateCreated" id="date_created" type="number" class="validate">
                            <label for="date_created">Date Created</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input v-model="room.description" id="description" type="text" class="validate">
                            <label for="description">Description</label>
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
                            <label for="other_furnishings">Other Furnishings</label>
                        </div>
                        </div>
                    </form>
                    </div>
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
    name: "roomType",
    data(){
        return{
            room: {}
        }
    },
    mounted(){
        axios.get("http://swe2.varion.co:3010/admin/buildings/roomtypes/", {
            buildingId: this.$route.params.roomTypeId
        })
        .then(data=>{
            this.room = data.data.data
        })
        .catch(err=>{
            console.log(err);
        })
    },
    methods: {
        saveRoomType(){
            console.log(this.roomType)
            axios.post("http://swe2.varion.co:3010/admin/buildings/edit",{
            //  id: $route.params.apartmentId,
                name: this.name,
                stars: this.stars,
                price: this.price,
                hasAC:  this.hasAC,
                hasBed: this.hasBed,
                hasRefrigerator: this.hasRefrigerator,
                hasMicrowave: this.hasMicrowave,
                hasTelevision: this.hasTelevision,
                hasCouch: this.hasCouch,
                hasDesk: this.hasDesk,
                hasChair: this.hasChair,
                hasWardrobe: this.hasWardrobe,
                otherFurnishings: this.otherFurnishings,
                hasHotWater: this.hasHotWater,
                numberOfBedrooms: this.numberOfBedrooms,
                privateKitchen: this.privateKitchen,
                communalKitchen: this.communalKitchen,
                privateBathroom: this.privateBathroom,
                communalBathroom: this.communalBathroom,
                description: this.description,
                dateCreated: this.dateCreated,
                hasSmokeDetector: this.hasSmokeDetector
            })
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
}
</script>