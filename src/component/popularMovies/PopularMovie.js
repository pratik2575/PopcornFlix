import { Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



export default function PopularMovie(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const getId = (id) => {
        navigate("/MovieDetails", {
            state: id
        })
    }
    return (
        <>
            <Card className="bg-dark text-white rounded-4 " onClick={() => { getId(props.id) }}>
                <Card.Img className='rounded-4 ' src={props.image ? props.image : "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:q-80/et00330541-yqajdpxlyv-portrait.jpg"} alt="Card image" />
            </Card>
        </>
    )
}
