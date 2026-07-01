import MenuCard from "./MenuCard";
import './Menu.css'
import meal1 from "../assets/meal1.png";
import meal2 from "../assets/meal2.png";
import meal3 from "../assets/meal3.jpg";
import meal4 from "../assets/meal4.jpg";
import meal5 from "../assets/meal5.jpg";
import meal6 from "../assets/meal6.jpg";
import meal7 from "../assets/meal7.jpg";
import meal8 from "../assets/meal8.jpg";

export default function Menu() {
  return (
    <div className="menu" id="menu">
      <h2 className="h2">
        Food <span>Menu</span>
      </h2>

      <div className="menu-container">
        <MenuCard
          image={meal1}
          title="Alfredo Vegetable Pasta"
          description="Creamy Alfredo pasta with fresh seasonal vegetables and parmesan cheese"
          price="350 AFN"
        />

        <MenuCard
          image={meal3}
          title="Grilled Chicken Sandwich"
          description="Juicy grilled chicken sandwich with fresh vegetables and special sauce"
          price="350 AFN"
        />

        <MenuCard
          image={meal4}
          title="Salmon Steak"
          description="Fresh grilled salmon steak served with herbs and lemon"
          price="350 AFN"
        />

        <MenuCard
          image={meal2}
          title="Special Beef Taco"
          description="Mexican-style taco filled with seasoned beef and fresh toppings"
          price="350 AFN"
        />

        <MenuCard
          image={meal5}
          title="Natural Fruit Juice Mix"
          description="Fresh blend of seasonal fruits with no added sugar"
          price="350 AFN"
        />

        <MenuCard
          image={meal6}
          title="Special Mixed Ice Cream"
          description="Assorted ice cream flavors with chocolate and nut toppings"
          price="350 AFN"
        />

        <MenuCard
          image={meal7}
          title="Strawberry Ice Cream"
          description="Fresh creamy strawberry ice cream with rich flavor"
          price="350 AFN"
        />

        <MenuCard
          image={meal8}
          title="Chicken Skewer Kebab"
          description="Grilled chicken skewers with herbs and special spices"
          price="350 AFN"
        />

      </div>
    </div>
  );
}