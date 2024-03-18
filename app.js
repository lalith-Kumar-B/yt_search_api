import 'dotenv/config'
import express from 'express'
import axios from 'axios'
const app = express();

const port = 3000;

app.get('/',(req,res)=>{
    res.json({success : true,msg:"you can alter the url to this : http://localhost:3000/search?py=spiderMan&Lvideos=24  OR http://127.0.0.0:3000/search?py=spiderMan&Lvideos=24  to see results" });
})
app.get('/search',async(req,res)=>{
    const {qy="belugaCat",Lvideos=25} = req.query;
    const youtubeRes = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${Lvideos}&q=${qy}&key=${process.env.YT_API_KEY}`)
    res.json(youtubeRes.data);
})



app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
})
