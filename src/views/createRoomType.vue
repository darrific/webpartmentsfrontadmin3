<template>
  <div class="createRoomType">
      <section>
        <div class="container">
          <div>
              <h1>Create Room Type for</h1>
          </div>    
                <div class="row">
                    <h5>Main Information</h5>
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s6">
                                <input v-model="name" id="room_type_name" type="text" class="validate">
                                <label for="room_type_name">Room Type Name</label>
                            </div>
                            <div class="input-field col s6">
                                <input v-model="price" id="price" type="number" class="validate">
                                <label for="price">Price</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s4">
                                <input v-model="stars" id="star_rating" type="number" class="validate">
                                <label for="star_rating">Star Rating (1 to 5)</label>
                            </div>
                            <div class="input-field col s4">
                                <input v-model="numberOfBedrooms" id="num_beds" type="number" class="validate">
                                <label for="num_beds">Number of Bedrooms</label>
                            </div>
                            <div class="col s4">
                                <input v-model="dateCreated" id="date_created" type="number" class="validate">
                                <label for="date_created">Date Created</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input v-model="description" id="description" type="text" class="validate">
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
                            <input v-model="hasAC" type="checkbox" />
                            <span>AC</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="hasBed" type="checkbox" />
                            <span>Bed</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="hasRefrigerator" type="checkbox" />
                            <span>Refrigerator</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="hasDesk" type="checkbox" />
                            <span>Desk</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="hasWardrobe" type="checkbox" />
                            <span>Wardrobe</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="communalBathroom" type="checkbox" />
                            <span>Communial Bathroom</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="hasSmokeDetector" type="checkbox" />
                            <span>Smoke Detector</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="hasMicrowave" type="checkbox" />
                            <span>Microwave</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="hasTelevision" type="checkbox" />
                            <span>Television</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="hasCouch" type="checkbox" />
                            <span>Couch</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="hasChair" type="checkbox" />
                            <span>Chair</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="hasHotWater" type="checkbox"/>
                            <span>Hot Water</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="communalKitchen" type="checkbox" />
                            <span>Communial Kitchen</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="privateKitchen" type="checkbox" />
                            <span>Private Kitchen</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input v-model="privateBathroom" type="checkbox" />
                            <span>Private Bathroom</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="row">
                    <form class="col s12">
                        <div class="row">
                        <div class="input-field col s12">
                            <input v-model="otherFurnishings" id="other_furnishings" type="text" class="validate">
                            <label for="other_furnishings">Other Furnishings</label>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>

            <div class="row">
                <a @click="saveRoomType" class="waves-effect waves-light btn-small"><i class="material-icons right">check</i>Done</a>         
            </div>

          </div>
      </section>
  </div>
</template>

<script>
import axios from 'axios'
import Router from 'vue-router'
export default {
    name: "roomType",
    data(){
        return{
            name: "",
            stars: "",
            price: "",
            hasAC: false,
            hasBed: false,
            hasRefrigerator: false,
            hasMicrowave: false,
            hasTelevision: false,
            hasCouch: false,
            hasDesk: false,
            hasChair: false,
            hasWardrobe: false,
            otherFurnishings: "",
            hasHotWater: false,
            numberOfBedrooms: "",
            privateKitchen: false,
            communalKitchen: false,
            privateBathroom: false,
            communalBathroom: false,
            description: "",
            dateCreated: "",
            hasSmokeDetector: false
        }
    },
    methods: {
        saveRoomType(){
            console.log(this.roomType, this.$route.params)
            axios.post("http://localhost:3010/admin/buildings/roomtypes/create",{
                buildingId: this.$route.params.apartmentId,
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
                if(data.data.success)
                    M.toast({html: 'It Added'})
                console.log(data);
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
}
</script>