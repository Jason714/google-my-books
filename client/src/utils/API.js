import axios from "axios";

require("dotenv").config();

export default {
  searchBook: function (query) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
};
