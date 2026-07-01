
import './Discription.css'
import ReviewCard from "./ReviewCard";
import user1 from '../assets/user1.jpg'
import user2 from '../assets/user2.jpg'
import user3 from '../assets/user3.jpg'
import user4 from '../assets/user4.jpg'

export default function Discription() {
  return (
    <div className="discriptions" id="discriptions">
      <h2 className="h2">
        Customer <span>Reviews</span>
      </h2>

      <div className="dis-container">
        <ReviewCard
          image={user1}
          name="Sara Alen"
          text="My experience with this store was excellent. The support was responsive, the quality was high, and the delivery was fast. I will definitely buy from here again."
        />

        <ReviewCard
          image={user2}
          name="Jack Gardener"
          text="I had a great experience with this store. The product quality was excellent and everything arrived quickly and in perfect condition."
        />

        <ReviewCard
          image={user3}
          name="Meera Yaran"
          text="The shopping process was smooth and easy. The website is user-friendly and I am very satisfied with my order."
        />

        <ReviewCard
          image={user4}
          name="Raya Grand"
          text="Customer service was very helpful and professional. They quickly solved my issue and made the experience stress-free."
        />
      </div>
    </div>
  );
}