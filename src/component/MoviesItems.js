import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import Placeholder from 'react-bootstrap/Placeholder';
import { getMovieDetails } from 'store/movie/action';

function Movies(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getId = (id) => {
        dispatch(getMovieDetails(id));
        navigate("/MovieDetails", {
            state: id
        })
    }
    return (
        <Card className="border-0 color " onClick={() => getId(props.id)}>
            <Card.Img variant="top" className='rounded-4 ' src={props.image}></Card.Img>
            <Card.Body>
                <Placeholder as={Card.Title} animation="glow" className='text-light text-uppercase'>
                    {props.title ? props.title : <Placeholder xs={3} />}
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow" className='text-light text-uppercase'>
                    {props.year ? props.year : <Placeholder xs={3} />}
                </Placeholder>

            </Card.Body>
        </Card>
    );
}
export default Movies;