import Card from 'react-bootstrap/Card';

function CarouselImage(props) {
    return ( 
        <Card className='mx-2 fontColor' bg="dark">
            <div className='row'>
                <div className='col-6'>
                    <Card.Body>
                        <Card.Title className='mt-5'><span className='h1'>Guardians of the Galaxy Vol. 2</span></Card.Title>
                        <Card.Text ><span className='h5'>
                        After a successful mission, Quill and his team of galactic defenders meet Ego, 
                        a man claiming to be Quill's father. However, they soon learn some disturbing truths about Ego.
                        </span></Card.Text>
                    </Card.Body>
                </div>
                <div className='col-6'>
                    <Card.Img src={props.image} />
                </div>
            </div>
        </Card>
    );
}

export default CarouselImage;