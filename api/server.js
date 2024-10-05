const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
app.use(cors({
    credentials: true, 
origin: 'http://localhost:3000',}
));
app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: 'yourSecretKey', 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true } 
}));

//-------------------------------------------DATABASE CONNECTION----------------------------------------------------


const db = mysql.createConnection({
    host: '103.145.51.250',
    user: 'HalaHomeUsr',
    password: 'Nypl08$06',
    database: 'halahomeappdb'
})


//-------------------------------------------LOGIN/SIGNUP METHODS----------------------------------------------------


app.post('/login', (req, res) => {
    const email = req.body.email;
    const otp = Number(req.body.otp);

    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, [email], (err, results) => {
        if (err) {
            return res.json(err);
        } 
        else {
            if (results.length > 0){
                const storedOtp = results[0].otp;
                res.cookie('user_id', results[0].user_id, { maxAge: 86400000, httpOnly: false });
                res.cookie('Full Name', results[0].full_name, { maxAge: 86400000, httpOnly: false });
                res.cookie('Category', results[0].user_type, { maxAge: 86400000, httpOnly: false });
                if (Number(otp) === storedOtp) {
                    return res.json({ message: 'Login successful', user: results[0].user_id });
                } else {
                    return res.json({ message: 'Invalid credentials' });
                }
            } else {
                return res.json(results);
            }
        }
    });
});

app.post('/users', (req,res) => {
    const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const updatedAt = createdAt;
    const q = "INSERT INTO users (full_name,email,user_type,phone,otp,created_at, updated_at) VALUES (?);";
    const values = [
        req.body.full_name,
        req.body.email,
        req.body.user_type,
        req.body.phone,
        req.body.otp,
        createdAt, 
        updatedAt
    ];

    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Signed Up succesfully")
    })
})

//-------------------------------------------COMMUNITY METHODS----------------------------------------------------

app.post('/interests',(req,res) => {
    const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
     const updatedAt = createdAt;
    const q = "INSERT INTO users_details (id,user_id,recommended_topic,featured_home_disscussion,created_at,updated_at) VALUES (?);";
    const values = [
        req.body.id,
        req.body.user_id,
        req.body.recommended_topic,
        req.body.featured_home_disscussion,
        createdAt,
        updatedAt
    ];

    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("poted succesfully")
    })
})

app.get('/posts/', (req,res) => {
    const q = req.query.post_id?"SELECT u.user_id, `full_name`, `question`, `description`, `intrest_category_id`, `post_id`, p.created_at, like_count FROM posts p JOIN users u ON p.user_id = u.user_id WHERE p.post_id = ? ":"SELECT * FROM posts";
    db.query (q,[req.query.post_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/posts/:intrest_category_id', (req,res) => {
    const interest_category_id = req.params.intrest_category_id;
    const q = "SELECT u.user_id, `full_name`, `question`, `description`, `intrest_category_id`, `post_id`, views, p.created_at, like_count  FROM posts p JOIN users u ON p.user_id = u.user_id WHERE p.intrest_category_id = ? ";
    db.query (q,[interest_category_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
})
})

app.post('/posts/', (req,res) => {

    const created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const updated_at = created_at;
    const q = "INSERT INTO posts (user_id,question,description,intrest_category_id,created_at,updated_at) VALUES (?);";
    const values = [
        req.body.user_id,
        req.body.question,
        req.body.description,
        req.body.recommended_topic,
        created_at,
        updated_at
    ];

    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("posted succesfully")
    })
})

//-------------------------------------------VIEW METHODS----------------------------------------------------

app.post('/posts/view_count', (req, res) => {
    const post_id = req.body.post_id; // Assuming postId is received from the request
    const user_id = req.body.user_id; // The substring you want to check
    // Check if the substring exists in the existing text
    const selectQuery = `SELECT views FROM posts WHERE post_id = ${post_id}`;
    db.query(selectQuery, (selectErr, selectResult) => {
      if (selectErr) {
        res.status(500).send('Error fetching data from the database');
      } else {
        let existingText = selectResult[0].views;
        if (existingText === null) {
            existingText = user_id;
          } else if (existingText.includes(user_id)) {
            // res.status(400).send('Substring already exists in the text');
            // return;
          } else {
            // Concatenate the new string to the existing text
            existingText += `,${user_id}`;
          }
    
          // Update the database with the concatenated text
          const updateQuery = `UPDATE posts SET views = '${existingText}' WHERE post_id = ${post_id}`;
          db.query(updateQuery, (updateErr, updateResult) => {
            if (updateErr) {
              res.status(500).send('Error updating data in the database');
            } 
          });
        }
    });
  });

//-------------------------------------------lIKE/DISLIKE METHODS----------------------------------------------------

app.post('/posts/likes/', (req, res) => {
    const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const updatedAt = createdAt;
    const q = "INSERT INTO likes (user_id, post_id, created_at, updated_at) VALUES (?);";
    const values = [
      req.body.user_id,
      req.body.post_id,
      createdAt,
      updatedAt
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      const incrementQuery = 'UPDATE posts SET like_count = like_count + 1 WHERE post_id = ?';
      db.query(incrementQuery, [req.body.post_id], (err, result) => {
        if (err) {
          console.error('Error incrementing like count:', err);
          return res.status(500).json({ error: 'Internal server error' });
        }return res.status(200).json({ message: 'Post liked successfully' });
      });
    });
  });

app.delete('/posts/dislikes/', (req, res) => {
  const { user_id, post_id } = req.body;
  if (!user_id || !post_id) {
    return res.status(400).json({ error: 'Missing user_id or post_id' });
  }

  const q = 'DELETE FROM likes WHERE user_id = ? AND post_id = ?';
  const values = [user_id, post_id];

  db.query(q, values, (err, data) => {
    if (err) {
      console.error('Error deleting dislike:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (data.affectedRows === 0) {
      return res.status(404).json({ error: 'No matching record found to delete' });
    }
    const decrementQuery = 'UPDATE posts SET like_count = CASE WHEN like_count > 0 THEN like_count - 1 ELSE 0 END WHERE post_id = ?';
    db.query(decrementQuery, [post_id], (err, result) => {
      if (err) {
        console.error('Error decrementing like count:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      return res.status(200).json({ message: 'Post disliked successfully' });
    });
  });
});
  

app.get('/posts/likes/:user_id', (req,res) => {
    const user_id = req.params.user_id;
    const q = "SELECT post_id FROM likes WHERE user_id =(?) ";
    db.query (q,[user_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.get('/comments/likes/:user_id', (req,res) => {
    const user_id = req.params.user_id;
    const q = "SELECT comments_id FROM likes WHERE user_id =(?) ";
    db.query (q,[user_id],(err,data)=>{

        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/comments/likes/', (req, res) => {
    const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const updatedAt = createdAt;
    const q = "INSERT INTO likes (user_id, comments_id, created_at, updated_at) VALUES (?);";
    const values = [
      req.body.user_id,
      req.body.comment_id,
      createdAt,
      updatedAt
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
  
      // Update the like_count in the comments table
      const incrementQuery = 'UPDATE comments SET like_count = like_count + 1 WHERE id = ?';
      db.query(incrementQuery, [req.body.comment_id], (err, result) => {
        if (err) {
          console.error('Error incrementing like count:', err);
          return res.status(500).json({ error: 'Internal server error' });
        }
        return res.status(200).json({ message: 'Comment liked successfully' });
      });
    });
  });
  
  app.delete('/comments/dislikes/', (req, res) => {
    const { user_id, comment_id } = req.body;
    if (!user_id || !comment_id) {
      return res.status(400).json({ error: 'Missing user_id or comment_id' });
    }
  
    const q = 'DELETE FROM likes WHERE user_id = ? AND comments_id = ?';
    const values = [user_id, comment_id];
  
    db.query(q, values, (err, data) => {
      if (err) {
        console.error('Error deleting dislike:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
  
      if (data.affectedRows === 0) {
        return res.status(404).json({ error: 'No matching record found to delete' });
      }
      const decrementQuery = 'UPDATE comments SET like_count = CASE WHEN like_count > 0 THEN like_count - 1 ELSE 0 END WHERE id = ?';
      db.query(decrementQuery, [comment_id], (err, result) => {
        if (err) {
          console.error('Error decrementing like count:', err);
          return res.status(500).json({ error: 'Internal server error' });
        }
        return res.status(200).json({ message: 'Comment disliked successfully' });
      });
    });
  });
  
//-------------------------------------------COMMENTS METHODS----------------------------------------------------


app.post('/posts/comments/', (req,res) => {

    const created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const updated_at = created_at;
    const q = "INSERT INTO comments (user_id,post_id,content,modified_by,modified_on,created_at,updated_at) VALUES (?);";
    const values = [
        req.body.user_id,
        req.body.post_id,
        req.body.content,
        req.body.user_id,
        created_at,
        created_at,
        updated_at
    ];
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("posted succesfully")
    })
})

app.get('/posts/comments/:post_id', (req,res) => {
    const post_id = req.params.post_id;
    const q = "SELECT c.user_id, c.id, full_name,c.like_count, c.created_at, content FROM comments c JOIN users u ON c.user_id = u.user_id WHERE post_id= ? ";
    db.query (q,[post_id],(err,data)=>{ 
        if(err) return res.json(err)
        return res.json(data)
    })
})

//-------------------------------------------PROFILE----------------------------------------------------

app.get('/profile/display/', (req,res) => {
  const q = req.query.user_id?"SELECT user_id, full_name, user_type  FROM users WHERE user_id=(?)":"SELECT * FROM users";
  db.query (q,[req.query.user_id],(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
})
})
//-------------------------------------------USER PROFILE----------------------------------------------------

app.get('/UserProfile/Profile/:user_id', (req,res) => {
  const user_id = req.params.user_id;
  const q = "SELECT u.user_id, `full_name`, `email`, `phone`, p.user_id, `city`, `provience` FROM users p JOIN users_details u ON p.user_id = u.user_id WHERE u.user_id = ?";
  db.query(q,[user_id],(err,data) => {
      if(err) return res.json(err)
      return res.json(data)
  })
})

// app.post('/UserProfile/Profile/:user_id', (req, res) => {
//   const user_id = req.params.user_id;

//   const q = `
//     INSERT INTO users_details (user_id, city, provience)
//     VALUES (?, ?, ?)
//     ON DUPLICATE KEY UPDATE
//       city = VALUES(city),
//       provience = VALUES(provience);
//   `;

//   const values = [user_id, req.body.city, req.body.provience];

//   db.query(q, values, (err, data) => {
//     if (err) {
//       return res.json(err);
//     }

//     return res.json("Data updated or inserted successfully");
//   });
// });

app.post('/UserProfile/Profile/', (req, res) => {
  const q = `
  UPDATE users_details SET city = ?, provience = ? WHERE user_id = ?
  `;

  const [city, provience, user_id] = [req.body.city, req.body.provience, Number(req.body.user_id)];
  console.log(city)
  db.query(q, [city, provience, user_id], (err, data) => {
    if (err) {
      return res.json(err);
    }

    // Now, update the users table
    const updateUsersQuery = `
      UPDATE users
      SET full_name = ?, email = ?, phone = ?
      WHERE user_id = ?;
    `;

    const [full_name, email, phone, user_id] = [req.body.full_name, req.body.email, req.body.phone, Number(req.body.user_id)];

    db.query(updateUsersQuery, [full_name, email, phone, user_id], (updateErr, updateData) => {
      if (updateErr) {
        console.log(updateErr)
        return res.json(updateErr);
      }
      
      return res.json("Data updated or inserted successfully");
    });
  });
});









//-------------------------------------------FIND PROFESSIONATIONALS----------------------------------------------------

app.get('/users/:category', (req,res) => {
  const category = req.params.category;
  const q = "SELECT full_name, about_us,rating,experience,u.user_id FROM users_details u JOIN users p ON u.user_id = p.user_id WHERE category=(?)";
  db.query (q,[category],(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
})
})

//-------------------------------------------PORT ALLOCATION----------------------------------------------------

app.listen(8081, ()=> {
    console.log("listening");
})