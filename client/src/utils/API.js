import axios from "axios";

export default {
  //we need this to load users data can connect to meds?
  getUser: function (id) {
    return axios.get("/api/patient" + id);
  },
  // Gets all meds but we need this to get all meds
  // for a specific user?
  getMeds: function () {
    return axios.get("/api/medicine");
  },
  // Do we need this one?
  getMed: function (id) {
    return axios.get("/api/medicine/" + id);
  },
  // Deletes the medicine with the given id
  deleteMed: function (id) {
    return axios.delete("/api/medicine/" + id);
  },
  // Saves a medicine to the database
  saveMed: function (medData) {
    console.log(medData);
    return axios.post("/api/medicine/5ac993c64806ac7c16fc3080", medData);
  },
  //Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/patient", userData)
      .then(patientInfo => { //patientInfo == dbModel, returned from user creation route
        console.log(patientInfo);
        return patientInfo;
      });
  },


};