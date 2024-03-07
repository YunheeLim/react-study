import './CoreConcept.css';

export default function CoreConcept(props) { // props를 {title, description, image}로 대체 가능, 대신 변수명 동일해야 함
    return (
      <li>
        <img src={props.image} alt={props.title}/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
    );
  }