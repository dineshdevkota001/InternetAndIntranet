import React, { userState } from 'react'
import { Card, Button, Image } from 'react-bootstrap'
const UserCard = props => {
    return (
        <Card className='m-5 p-2 col-2 shadow' style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="https://picsum.photos/200" roundCircle /> */}
            <Image
            src={props.url}
            roundedCircle
          />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Button href={props.github} variant="primary">Github</Button>
            </Card.Body>
        </Card>
    );
}

export default UserCard;