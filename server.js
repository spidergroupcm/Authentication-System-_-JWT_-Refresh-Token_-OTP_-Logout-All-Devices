import app from './src/app.js'
import connectDB from './src/config/database.js'

connectDB();
app.listen(300, ()=> {
  console.log("Express server is running")
})

