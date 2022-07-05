const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cowpwd',
  database: 'list',
  insecureAuth : true
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

// Your Database Queries Here!!

var getAll=function(callback){
  connection.query('SELECT * FROM Cow',[],(err,results)=>{
   if(err){
    callback(err);
   }
   else{
    callback(null,results);
   }
  })
};

var create=function(item,callback){
  //console.log(item);
  connection.query('INSERT INTO Cow (cowName,cowDescription) VALUES(?,?)',[item.cowName,item.cowDescription],(err,result)=>{
    if(err){
    callback(err,null);
    }
    else{
      callback(null,result)
    }
  })
};

var deleteItem=function(id,callback){
  connection.query('DELETE FROM Cow WHERE cowId = ?',[id],(err,result)=>{
    if(err){
      callback(err);
    }
    else{
      callback(null,result);
    }
  })
};

// Don't forget to export your functions!

module.exports = {
  getAll:getAll,
  create: create,
  deleteItem: deleteItem
};
