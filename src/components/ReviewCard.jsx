
import './Discription.css'

function ReviewCard({ image, name, text }) {
  return (
    <div className="dis-card">
      <div className="card-img">
        <img src={image} alt="image" />
      </div>

      <h4>{name}</h4>

      <div className="rate">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half-stroke"></i>
      </div>

      <div className="social">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-x-twitter"></i>
        <i className="fa-brands fa-tiktok"></i>
      </div>

      <p>{text}</p>
    </div>
  );
}

export default ReviewCard;