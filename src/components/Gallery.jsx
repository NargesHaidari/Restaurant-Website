
import GalleryCard from "./GalleryCard";
import './Gallery.css'
import gImg1 from '../assets/gImg1.png'
import gImg2 from '../assets/gImg2.jpg'
import gImg3 from '../assets/gImg3.jpg'
import gImg4 from '../assets/gImg4.jpg'
import gImg5 from '../assets/gImg5.jpg'
import gImg6 from '../assets/gImg6.jpg'


function Gallery() {
  return (
    <div className="gallery" id="gallery">
      <h2 className="h2">
        Our <span>Gallery</span>
      </h2>

      <div className="gallery-container">
        <GalleryCard
          image={gImg1}
          title="Chocolate Cupcake"
          description="Soft chocolate cupcake topped with creamy frosting and a rich cocoa flavor"
        />

        <GalleryCard
          image={gImg2}
          title="Strawberry Cupcake"
          description="Fresh strawberry cupcake with light cream topping and fruity sweetness"
        />

        <GalleryCard
          image={gImg3}
          title="Vanilla Cupcake"
          description="Classic vanilla cupcake with smooth cream frosting and soft texture"
        />

        <GalleryCard
          image={gImg4}
          title="Red Velvet Cupcake"
          description="Rich red velvet cupcake with cream cheese frosting and soft sponge base"
        />

        <GalleryCard
          image={gImg5}
          title="Mini Donuts"
          description="Fresh mini donuts coated with sugar and chocolate glaze"
        />

        <GalleryCard
          image={gImg6}
          title="Assorted Pastries"
          description="Delicious selection of fresh pastries with creamy and fruity fillings"
        />
      </div>
    </div>
  );
}

export default Gallery;