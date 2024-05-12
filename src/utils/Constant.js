const YOUTUBE_API_KEY = 'AIzaSyDcCsMPRI3FBfvxsR9YaRXZQIc1TAdFoH4'
export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&regionCode=in&maxResults=50&part=statistics&part=contentDetails&chart=mostPopular&key=${YOUTUBE_API_KEY}`;
