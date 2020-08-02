// Test youtube api call
// import 'dotenv/config';
require('dotenv').config()
const fetch = require("node-fetch");

const getRating = async (videoId) => {
  const API_KEY = process.env.API_KEY

  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`

  try {
    const result = await fetch(url);
    const response = await result.json();
    const { likeCount, dislikeCount } = response.items[0].statistics;
    const totalLikeCount = likeCount + dislikeCount;

    if(totalLikeCount < 100) {
        // show UI message for low rating threshold
    }

    const ratioPercentage = (dislikeCount / likeCount) * 100;
    const ratioOutOf100 = (100 - ratioPercentage).toFixed(4);
    console.log(ratioOutOf100);

  } catch (err) {
    console.error(err);
  }
};

getRating();
