import React from 'react'
import UserCard from './UserCard'
const About = props => {
    return (
        <>
            <div className='row justify-content-center' style={{ maxWidth: '100vw' }}>
                <div className=' col-10 m-4 p-2 rounded shadow-lg'>
                    <h1 className='border-bottom text-muted justify-content-center d-flex'>About Us</h1>
                    <div >
                        <div className='text-muted container'>
                            <p> We are a group of enthusiasts currently studying in Internet of Everything, Pulwhore Campus, Nepal.
                </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row my-3 justify-content-center' style={{ maxWidth: '100vw' }}>
                {/* <div className='p-5 mx-5 my-1 d-flex justify-content-center'> */}
                <div className='p-2 rounded shadow-lg'>
                <h1 className='border-bottom text-muted justify-content-center d-flex'>Members</h1>
                <div className='m-4 p-2 d-flex justify-content-center'>
                        <UserCard name='Dinesh' url='https://avatars3.githubusercontent.com/u/29431728?s=460&u=b0eb7e8b3a46702969ed1f201ef19ccb0a20f05f&v=4' description='hello i am here' github='https://github.com/dineshdevkota001' />
                        <UserCard name='Maharshi' url='https://avatars0.githubusercontent.com/u/42496496?s=460&u=bc10daafc23a6cb9e923deac728c4856ae1d6acc&v=4' description='hello i am Suffering' github='https://github.com/wmaharsh' />
                        <UserCard name='Sushant' url='https://avatars2.githubusercontent.com/u/33974877?s=460&u=6dd8633958f9f1151083214948d78894f58d84f3&v=4' description='hello i am Gangsta' github='https://github.com/sushant-thapa' />
                        <UserCard name='Rajat' url='https://avatars1.githubusercontent.com/u/24754681?s=460&u=b79aa50c882dcc676978bc8e1d206660d3b27a45&v=4' description='hello i am Houdini' github='https://github.com/ch0c0l8ra1n' />
                </div>
                </div>
            </div>
        </>
    );
}

export default About;
