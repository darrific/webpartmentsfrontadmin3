<template>
  <div class="apartments">
      <section>
        <div class="container">
          <div class="row col xl12">
            <h1>Apartments</h1>
            <button class="btn waves-effect waves-light">CREATE APARTMENT</button>
          </div>
          <div class="row">
            <div class="col xl12">
              <table>
                <thead>
                  <tr>
                      <th>Building Name</th>
                      <th>Date</th>
                      <th>Contact Info</th>
                      <th>Address</th>
                      <th>Status</th>
                      <th></th>
                      <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-bind:key="apt._id" v-for="apt in apartments">
                    <td>{{}}</td>
                    <td>31.66.1027</td>
                    <td>333-3333</td>
                    <td>#60 skjfnsdksjdnf sdkjfnk, Curepe</td>
                    <td>Available</td>
                    <td>
                      <a href="#">
                        <i class="material-icons">edit</i>
                      </a>
                    </td>
                    <td>
                      <a class="btn-floating modal-trigger" href="#delete" >
                        <i class="material-icons">delete</i>
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
  name : apartments,
  data(){
        return{
            apartments: [] 
    }
  },
}
</script>