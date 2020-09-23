import React, {useState,useEffect} from 'react';
import './NewPost.css';
import {db} from './firebase'

function NewPost() {
    

    return (
        <div className='post__form'>

            <progress value='0' max='100' id='upload'>0%</progress>
            <input type='file'  id='fileButton'  />
        </div>
    )
}

export default NewPost
