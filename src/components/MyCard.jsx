import Tags from './Tags';
import Card from 'react-bootstrap/Card';
//COMPONENTE CARD, RECIBE LOS PARAMETROS DESDE COMPONENTE APP, PARA EL Y PARA TAG
const MyCard = ({ url, name, description, tagName, tagColor}) => {

    return (
        <Card style={{ width: '18rem', border: '1px black solid', borderRadius: '1rem' }}>
            <Card.Img variant="top" src={url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Tags tagName={tagName} tagColor={tagColor}></Tags>
            </Card.Body>
        </Card>
    );

}

export default MyCard