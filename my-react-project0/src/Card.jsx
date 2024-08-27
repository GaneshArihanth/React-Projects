import profilpic from '/Users/ganesharihanth/Pictures/Pictures/Screenshot 2023-09-16 at 6.30.20 PM.jpeg';
import './Card.css'

function Card() {
   
    return (
        <div className="card">
            <img className="cardimg" src={profilpic} alt="profil picture"></img>
            <h2 className="cardtitle">Ganesh</h2>
            <p className="cardpara">I am a Computer Science student from CIT</p>
        </div>
    );
}

export default Card;