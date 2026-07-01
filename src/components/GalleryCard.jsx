
import './Gallery.css'


function GalleryCard({ image, title, description }) {
  return (
    <div className="gallery-card">
      <img src={image} alt="cupcake-image" />

      <div className="gallery-texts">
        <h3>{title}</h3>
        <p>{description}</p>
        <a className="btn" href="#order">
          Order Now
        </a>
      </div>
    </div>
  );
}

export default GalleryCard;