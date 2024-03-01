import Badge from 'react-bootstrap/Badge';

const Tags = ({tagColor,tagName})=>{

    return (
        <Badge bg={tagColor}>{tagName}</Badge>
      );

}

export default Tags