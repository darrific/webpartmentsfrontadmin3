<template>
  <div class="bugReport">
      <section>
        <div class="container">
          <h1>Bug Reports</h1>
          <div class="row">
              <div class="row">
              <table>
                <thead>
                  <tr>
                      <th>Email</th>
                      <th>Report</th>
                      <th>Resolved</th>
                      <th>Timestamp</th>
                      <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="report in reports" :key="report._id">
                    <td>{{report.email}}</td>
                    <td>{{report.report}}</td>
                    <td>
                        <form action="#"> <p><label><input type="checkbox" v-model="report.isResolved" @click="updateBug(report._id, $event)"/><span>Resolved</span></label></p></form>
                    </td>
                    <td>{{report.timestamp}}</td>
                    <td>
                      <a class="btn-floating" href="#" >
                        <i class="material-icons" @click="deleteBugReport(report._id)">delete</i>
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
  name : "bugReport",
  data(){
    return{
      reports: []
    }
  },
  mounted(){
    console.log("We in");
    axios.get("http://localhost:3010/admin/bugs/", {
      headers: {
        Authorization: "Bearer " + this.$store.state.token
      }})
      .then(data=>{
        window.scrollTo(0,top);
        this.reports = data.data.data;
      })
  },
  methods: {
    updateBug(id, event){
      axios.post("http://localhost:3010/admin/bugs/update", {
        id: id,
        isResolved: event.target.checked
      })
      .then(data=>{
        console.log(data);
        if (data.data.success){
          M.toast({html: 'Bug Report Edited'})
        }
        if (!data.data.success){
          M.toast({html: 'Error'})
        }
      })
      .catch(err=>{
        console.log(err)
      })
    },
    deleteBugReport(id){
      axios.post("http://localhost:3010/admin/bugs/delete", {
        id: id
      })
      .then(data=>{
        console.log(data);
        if (data.data.success){
          this.reports.splice(this.reports.map(e => e._id).indexOf(id), 1);
          M.toast({html: 'Bug Report Deleted'})
        }
        if (!data.data.success){
          M.toast({html: 'Error'})
        }
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>