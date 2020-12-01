import React, { useState, useEffect } from 'react';

function FriendStatus(type) {
    const [selection, setselection] = useState({name:' ', filename:'default.jpg'});
    
    useEffect(() => { 
        // component will mount
        setselection(props)
        // Component will unmount
        return () => { 
           setselection({name:' ', filename:'default.jpg'})
        }
    });
    return selection.filename;

}