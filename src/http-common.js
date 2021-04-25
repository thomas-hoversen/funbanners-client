import axios from "axios";

export default axios.create({
  baseURL: "https://gentle-refuge-49956.herokuapp.com/pictures",
  //baseURL: "http://localhost:8080/pictures",
  headers: {
    "Content-type": "application/json",
    "responseType": "blob"
  }
});