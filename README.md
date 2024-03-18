# YT_Search_API
Javascript code to demonstrate use of youtube search api with axios library
### requirments : 
1. API key from youtube.![Screenshot from 2024-03-18 13-26-23](https://github.com/lalith-Kumar-B/yt_search_api/assets/143936185/46a23e37-7340-4180-81f8-7044861b34ca)

3. for you api key goto : https://console.cloud.google.com/apis/credentials : click on create credentials to generate the api key and replace that in the image below.
4. env file with YT_API_KEY variable.![Screenshot from 2024-03-18 13-03-29](https://github.com/lalith-Kumar-B/yt_search_api/assets/143936185/ae78a686-4231-4850-abfb-257a847828ab)
### how to use 
1. after cloning the repo run, `npm install`.
2. after creating a .env file and setting up the api key variable run, `npm run dev` to start the server.
3. goto your localhost in the browser and pass these query parameters : `http://127.0.0.0:3000/search?qy=WHAT_YOU_WANT_TO_SEARCH&Lvideos=HOW_MANY_VIDEOS_TO_LOAD`
4. change the WHAT_YOU_WANT_TO_SEARCH and HOW_MANY_VIDEOS_TO_LOAD, example : I want to search for pubg and want to load 24 videos then It will look like `http://127.0.0.0:3000/search?qy=pubg&Lvideos=24`.
5. It will return a json object will all the details of the video that can be used to emmbed in iframe tags
