<template>
  <div class="editRoomType">
      <section>
        <div class="container">    
              <h1>Edit "Name of the room type goes here</h1>
                <div class="row">
                    <h5>Main Information</h5>
                    <form class="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="room_type_name" type="text" class="validate">
                            <label for="room_type_name">Room Type Name</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="price" type="number" class="validate">
                            <label for="price">Price</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s4">
                            <input id="star_rating" type="number" class="validate">
                            <label for="star_rating">Star Rating (1 to 5)</label>
                        </div>
                        <div class="input-field col s4">
                            <input id="num_beds" type="number" class="validate">
                            <label for="num_beds">Number of Beds</label>
                        </div>
                        <div class="col s4">
                            <input id="date_created" type="date" class="validate">
                            <label for="date_created">Date Created</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                        <textarea id="description" class="materialize-textarea"></textarea>
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
                            <input type="checkbox" />
                            <span>AC</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input type="checkbox" />
                            <span>Bed</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input type="checkbox" />
                            <span>Refrigerator</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input type="checkbox" />
                            <span>Desk</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input type="checkbox" />
                            <span>Wardrobe</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input type="checkbox" />
                            <span>Communial Bathroom</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input type="checkbox" />
                            <span>Smoke Detector</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input type="checkbox" />
                            <span>Microwave</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input type="checkbox" />
                            <span>Television</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input type="checkbox" />
                            <span>Couch</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input type="checkbox" />
                            <span>Chair</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s4">
                    <form action="#">
                        <p>
                        <label>
                            <input type="checkbox" />
                            <span>Hot Water</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="input-field col s12">
                    <form action="#">
                        <p>
                        <label>
                            <input type="checkbox" />
                            <span>Communial Kitchen</span>
                        </label>
                        </p>
                    </form>
                    </div>
                    <div class="row">
                    <form class="col s12">
                        <div class="row">
                        <div class="input-field col s12">
                            <textarea id="other_furnishings" class="materialize-textarea"></textarea>
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