import React,{useEffect, useState} from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import News from './News.js';
import Game from './Game.js';
import Login from './Login.js';
import Footer from './Footer.js'
import NewPost from './NewPost';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {db, auth} from './firebase'
  

function App() {
  const [posts, setPosts] = useState([ ]);

useEffect(() => {
  db.collection('posts').onSnapshot(snapshot =>{
    setPosts(snapshot.docs.map(doc => ({
      id:doc.id,
      post:doc.data()
    })));
  })
}, []);
  return (
    
    <Router >
   
    <Switch >
      

    <Route path='/game'>
       <Header/>
       <div>
          {
            posts.map( ({id, post}) => (
           <Game  key={id} postId={id} decada={post.decada}  />
            ))
         }
         </div>
        <Footer/> 
     </Route>

     <Route path='/login'>
     <Header/>
        <Login/>
        <NewPost/>
        <Footer/> 
     </Route>

     <Route path='/news'>
     <Header/>
        <News/>
     </Route>
     <Route path='/post'>
     <Header/>
       <NewPost/>
     </Route>
     
     <Route path='/'>
       <Header/>
       <Main/>
       <Footer/>  
     </Route>
    
    </Switch>

</Router>
    
  );
}

export default App;
