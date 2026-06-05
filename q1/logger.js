const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM2JxMWE1NGY4QHZ2aXQubmV0IiwiZXhwIjoxNzgwNjMzOTkxLCJpYXQiOjE3ODA2MzMwOTEsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJiN2Y1ZjIzNy01MDZmLTQxYzQtYWM3OS0wMGMxYTM5ZjNmZWUiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJzaXZhIHByaXlhIHlla3VsYSIsInN1YiI6IjRjOWUxODFkLTdhYTItNDQ4Yi05ODIxLWUxYzQ0NWRlYjJiYyJ9LCJlbWFpbCI6IjIzYnExYTU0ZjhAdnZpdC5uZXQiLCJuYW1lIjoic2l2YSBwcml5YSB5ZWt1bGEiLCJyb2xsTm8iOiIyM2JxMWE1NGY4IiwiYWNjZXNzQ29kZSI6IlFRZEVZeSIsImNsaWVudElEIjoiNGM5ZTE4MWQtN2FhMi00NDhiLTk4MjEtZTFjNDQ1ZGViMmJjIiwiY2xpZW50U2VjcmV0IjoiQ3pudlVGR25hclVtQXJYVCJ9.AQpcvXafDR7vNFGbnLAt_yEu7b-xofHjUheQDOrA6dc";

async function Log(stack, level, pkg, message) {
  try {
    await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: pkg,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = Log;