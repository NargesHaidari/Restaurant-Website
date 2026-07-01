
import './team.css'

function TeamCard({ image, role, description }) {
  return (
    <div className="section">
      <img src={image} alt="image" />

      <h4>{role}</h4>

      <p>{description}</p>

      <div className="social">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-x-twitter"></i>
        <i className="fa-brands fa-tiktok"></i>
      </div>
    </div>
  );
}

export default TeamCard;