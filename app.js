const express =require("express")
const mongoose=require("mongoose")
const cors =require("cors")
const{coursemode, coursemodel}=require("./models/course.js")

const app=express()
app.use(cors())
app.use(express.json()
)
mongoose.connect("mongodb+srv://marywinchakkunny:marywinchakkunny2001@cluster0.nuf6v.mongodb.net/coursedb?retryWrites=true&w=majority&appName=Cluster0")

    app.get("/view"),(req,res)=>{
    coursemodel.find().then(
        (data)=>(
            res.json(data)
        )
    ).catch(
        (error)=>(
            res.json(error)
        )

    )
} 



app.post("/add",(req,res)=>{
    let input = req.body
    let course=new coursemodel(input)
    course.save()
   res.json({"status":"success"})
})

app.post("/Search",(req,res)=>{
    let input=req.body
    coursemodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})
app.post("/delete",(req,res)=>{
    let input =req.body
    coursemodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
        }
        
    ).catch(
        ()=>{
            res.json({"status":"fail"})
        }
    )
})


app.get("/view",(req,res)=>{
    coursemodel.find().then(
        (data)=>{
            res.json(data)
        }
    )
})

app.listen(8081,()=>{
    console.log("Server started")
})

    
