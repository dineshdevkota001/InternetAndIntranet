const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'localhost', 
     user:'user', 
     password: 'password',
     database: 'mydb',
     connectionLimit: 5
});

// let us assume that the following is the username and password that we get from the fornt end

const dataFromFrontEnd = {username:'Dinesh',password:'nepal123'}; // dummy username and password

pool.getConnection().then(conn=>{

	conn.query("SELECT * FROM userbase").then((rows)=>{ // assumption is that the table name is userbase
		for(let i=0;i<rows.length;i++)
		{
			if(rows[i].username == dataFromFrontEnd.username){
				console.log("username found");	// username matches

				if(rows[i].password == dataFromFrontEnd.password)
				{
					console.log("and password matches"); // password matches
					break;
				}
				console.log("but password doesn't match");
				break;
			}
			if(i == rows.length-1)
				console.log('username not found'); // no such username exists
		}
	})
})