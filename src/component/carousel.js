import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Play from 'assets/play'

function carousel(props) {
    const handleWatchMovie = () => {
        window.open("https://youtu.be/wCMzCu9qUWI")
    }
    return (
        <Card className='mx-2 fontColor rounded-4' style={{ backgroundColor: "#151334" }}>
            <div className='row '>
                <div className='col-6 m-auto'>
                    <Card.Body>
                        <Card.Title className='mx-4 mb-4'><span className='h1'>{props.title ? props.title : "The Grey Man"}</span></Card.Title>
                        <Card.Text className='mx-4'><span className='h5 '>
                            {props.description ? props.description.slice(0, 200) : "The Gray Man is the Russo Brothers’ next big directorial since The Avengers Endgame. The film follows the story of Sierra Six (Ryan Gosling), " +
                                "a CIA Special Ops assassin who is on the run after finding some evidence against the agency"}
                        </span></Card.Text>
                        <div className='d-grid mx-4 '>
                            <Button size="lg" variant="warning" className='d-flex align-items-center mt-4' onClick={handleWatchMovie}>
                                <span className='h2'><Play /></span><span className='ms-2'>Watch Movie</span></Button>
                        </div>
                    </Card.Body>
                </div>
                <div className='col-6'>
                    <Card.Img src={props.image ? props.image : "https://nonlinearplot.com/wp-content/uploads/2022/07/G1-1-627x360.jpg"} />
                </div>
            </div>
        </Card>
    );
}

export default carousel;