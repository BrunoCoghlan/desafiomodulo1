import Badge from 'react-bootstrap/Badge';
//COMPONENTE TAG SE INSERTA EN EL COMPONENTE CARD RECIBE EL TAG Y COLOR DESDE CARD
const Tags = ({tagColor,tagName})=>{

    return (
        <Badge bg={tagColor}>{tagName}</Badge>
      );

}

export default Tags