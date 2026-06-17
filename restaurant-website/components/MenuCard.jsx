
import './Menu.css'

export default function MenuCard({
  image,
  title,
  description,
  price,
}) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt="food-image" />
      </div>

      <div className="card-texts">
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="price">{price}</div>

        <div className="rate">
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star-half-stroke"></i>
        </div>

        <a className="btn" href="#order">
          Order Now
        </a>
      </div>
    </div>
  );
}