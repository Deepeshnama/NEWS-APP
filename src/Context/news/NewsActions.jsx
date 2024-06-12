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
      `https://newsapi.org/v2/everything?q=tesla&from=2024-05-12&sortBy=publishedAt&apiKey=c597a43730154fc1b90adb98e0447892`
    );

    const data = await response.json();

    return data.articles;
  } catch (error) {
    window.alert("Please Enter Valid City Name");
  }
};
