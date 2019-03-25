const express = require('express') //Express server
const app = express(); //Instantiate server


//Port setup
app.set('port', (process.env.PORT || 3001));

//production mode
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  //
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'client/build/index.html'));
  })
}








//Keep at the end of the file
//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
})

//tell express to listen for requests(start server)
//this sets up the server on localhost 3001
app.listen(process.env.PORT || 3001, function(){
    console.log(`server has started on port ${process.env.PORT || 3001 + '(localhost)'}` );
});