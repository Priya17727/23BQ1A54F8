const axios = require("axios");

// 🔴 PASTE YOUR TOKEN HERE (INSIDE QUOTES)
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM2JxMWE1NGY4QHZ2aXQubmV0IiwiZXhwIjoxNzgwNjM3Mjg2LCJpYXQiOjE3ODA2MzYzODYsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIxMGFhZTU2Yy00YWVjLTQ5NzgtOWVkZC03ZDM0MGNmN2JiMDciLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJzaXZhIHByaXlhIHlla3VsYSIsInN1YiI6IjRjOWUxODFkLTdhYTItNDQ4Yi05ODIxLWUxYzQ0NWRlYjJiYyJ9LCJlbWFpbCI6IjIzYnExYTU0ZjhAdnZpdC5uZXQiLCJuYW1lIjoic2l2YSBwcml5YSB5ZWt1bGEiLCJyb2xsTm8iOiIyM2JxMWE1NGY4IiwiYWNjZXNzQ29kZSI6IlFRZEVZeSIsImNsaWVudElEIjoiNGM5ZTE4MWQtN2FhMi00NDhiLTk4MjEtZTFjNDQ1ZGViMmJjIiwiY2xpZW50U2VjcmV0IjoiQ3pudlVGR25hclVtQXJYVCJ9.nVEp1IeD6UqdT6bsn-8BZQBGBtgJDFkt0Bbp-qsHZjA";

// 🔴 API URL
const BASE_URL = "http://20.244.56.144/evaluation-service";

async function getNotifications() {
  try {
    console.log("Fetching notifications...");

    const response = await axios.get(`${BASE_URL}/notifications`, {
      headers: {
        Authorization: `Bearer ${token}` // ✅ correct format
      }
    });

    console.log("Notifications:");
    console.log(response.data);

  } catch (error) {
    if (error.response) {
      console.log("Error:", error.response.status);
      console.log(error.response.data);
    } else {
      console.log("Error:", error.message);
    }
  }
}

// run function
getNotifications();