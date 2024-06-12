/* eslint-disable no-unused-vars */

const today = new Date(Date.now()).toLocaleDateString();

// console.log(today)

let year = today.split("/")[2];
let day = today.split("/")[1];
let month = today.split("/")[0];

// const formattedDate = `${year}-${day}-${month}`

// console.log(formattedDate)

export const fetchNews = async (topic) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${topic}&from=2024-06-13&sortBy=publishedAt&apiKey=0ca33b4844b242b58ccac08b02ccbfad`
    );

    const data = await response.json();

    return data.articles;
  } catch (error) {
    window.alert("Please Enter Valid City Name");
  }
};
