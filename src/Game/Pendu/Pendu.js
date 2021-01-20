function Pendu(props) {
    var img = require(`../../images/pendu${props.counter}.png`).default
    return (
      <div className="Pendu">
          <img src={img} alt="statePendu"></img>
      </div>
    );
}

export default Pendu;