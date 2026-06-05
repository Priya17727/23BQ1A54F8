const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM2JxMWE1NGY4QHZ2aXQubmV0IiwiZXhwIjoxNzgwNjM3Mjg2LCJpYXQiOjE3ODA2MzYzODYsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIxMGFhZTU2Yy00YWVjLTQ5NzgtOWVkZC03ZDM0MGNmN2JiMDciLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJzaXZhIHByaXlhIHlla3VsYSIsInN1YiI6IjRjOWUxODFkLTdhYTItNDQ4Yi05ODIxLWUxYzQ0NWRlYjJiYyJ9LCJlbWFpbCI6IjIzYnExYTU0ZjhAdnZpdC5uZXQiLCJuYW1lIjoic2l2YSBwcml5YSB5ZWt1bGEiLCJyb2xsTm8iOiIyM2JxMWE1NGY4IiwiYWNjZXNzQ29kZSI6IlFRZEVZeSIsImNsaWVudElEIjoiNGM5ZTE4MWQtN2FhMi00NDhiLTk4MjEtZTFjNDQ1ZGViMmJjIiwiY2xpZW50U2VjcmV0IjoiQ3pudlVGR25hclVtQXJYVCJ9.nVEp1IeD6UqdT6bsn-8BZQBGBtgJDFkt0Bbp-qsHZjA" ;
const NOTIFICATIONS_URL = "http://4.224.186.213/evaluation-service/notifications";

function getAuthHeader() {
  if (!TOKEN || TOKEN === "YOUR_TOKEN") {
    console.warn(
      "Warning: notification service token is not configured. Set NOTIFICATION_SERVICE_TOKEN or replace TOKEN in notificationService.js."
    );
  }
  return `Bearer ${TOKEN}`;
}
console.log("TOKEN:", TOKEN);
async function getNotifications() {
  try {
    const response = await axios.get(NOTIFICATIONS_URL, {
      headers: {
        Authorization: getAuthHeader()
      },
      validateStatus(status) {
        return status >= 200 && status < 500;
      }
    });

    if (response.status !== 200) {
      const body = response.data ? JSON.stringify(response.data) : response.statusText;
      throw new Error(`Notifications request failed: ${response.status} ${response.statusText} - ${body}`);
    }

    if (!response.data || !Array.isArray(response.data.notifications)) {
      throw new Error("Notifications response is malformed or missing notifications array.");
    }

    return response.data.notifications;
  } catch (err) {
    if (err.response) {
      console.error("Notification service HTTP error:", err.response.status, err.response.statusText);
      console.error("Response body:", err.response.data);
    } else {
      console.error("Notification service error:", err.message);
    }
    throw err;
  }
}

module.exports = getNotifications;