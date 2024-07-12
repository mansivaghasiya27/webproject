const express=require("express")
const path=require("path")
const hbs=require("hbs")
const app=express()
const port= process.env.PORT || 8000

app.set('view engine','hbs');

const viewpath=path.join(__dirname,'../templates/views')
app.set('views',viewpath)

const publicpath=path.join(__dirname,'../public')
app.use(express.static(publicpath))

const partials=path.join(__dirname,'../templates/partials')
hbs.registerPartials(partials);

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/weather',(req,res)=>{
    res.render('weather')
})

app.get('*',(req,res)=>{
    res.render('404',{
      errormsg:"Oops!!Page not found!"
    })
  })

app.listen(port,()=>{
    console.log(`Port is listening to http://localhost:${port}`)
})