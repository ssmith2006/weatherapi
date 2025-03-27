"use strict";

async function main() {
  await fetch("https://proxy-key-eb0j.onrender.com"); //the server on render

  const config = {
    method: "POST",
    //If method === get, header will be "accept": "application/json" instead of "Content-Type"
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "123456" }), //secret must be capitalized in the Environments variable on render
    //key must be capitalized in the Environments variable on render.com
  };
  const res = await fetch(
    "https://proxy-key-eb0j.onrender.com/get-key",
    config //server on render config that has the API Key
  );
  const data = await res.json();
  const { key } = data;

  console.log(key); //logging the API Key

  getWeather(key);
}



async function getWeather(key) {
  try {
    const res = await fetch(
      "https://api.weatherapi.com/v1/current.json?q=70816&days=5&key=" + key
    ); //API Key from the WeatherAPI app
    const data = await res.json()
    console.log(data)
  } catch (error) {

  }
}

main();
