import 'dotenv/config'
import express from 'express'
import axios from 'axios'
const app = express();
app.get('/',(req,res)=>{
    res.json({success : true});
})
app.get('/search',async(req,res)=>{
    const {qy,Lvideos} = req.query;
    const youtubeRes = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${Lvideos}&q=${qy}&key=${process.env.YT_API_KEY}`)
    res.json(youtubeRes.data);
})



app.listen(3000,()=>{
    console.log('server on...');
})
