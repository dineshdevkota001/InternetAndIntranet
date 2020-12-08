import React, { useState } from 'react'
import UserCard from './UserCard'
const About = props => {
    return (
        <div id='About' className='container-fluid'>
            <h1 className='d-flex m-5 justify-content-center'>About Us</h1>
            <h3 className='d-flex m-2 justify-content-center'>
                <div className='container'>
                    <p> We are a group of enthusiasts currently studying in Internet of Everything, Pulwhore Campus, Nepal.
                </p>
                    <p>We make nothing and this was done by the work of only one person....until now that is.
                </p>
                    <p>Goodbye and byebye world. I will be back ith some more spicy news
                </p>
                </div>
            </h3>
            <div className='p-5 m-5  row justify-content-center'>
                <UserCard name='Dinesh' url='https://picsum.photos/200' description='hello i am here' github='https://github.com/dineshdevkota001' />
                <UserCard name='Maharshi' url='https://picsum.photos/300' description='hello i am Suffering' github='https://github.com/wmaharsh' />
                <UserCard name='Sushant' url='https://picsum.photos/400' description='hello i am Gangsta' github='https://github.com/sushantThapa' />
                <UserCard name='Rajat' url='https://picsum.photos/500' description='hello i am Houdini' github='https://github.com/root' />
            </div>
        </div>
    );
}

export default About;