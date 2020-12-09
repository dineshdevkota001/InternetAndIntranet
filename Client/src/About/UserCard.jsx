import React from 'react'
import { Card, Button, Image } from 'react-bootstrap'
const UserCard = props => {
    return (
        <Card className='mx-5 my-2 p-2 col-2 shadow' style={{ width: '18rem' }}>
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