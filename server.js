const app = require('./app')

const port = process.env.PORT || 5000 //server port / chhnage it in .env file

app.listen(port,()=>{
    console.log(`Server hosted successfully at ${port}`)
})