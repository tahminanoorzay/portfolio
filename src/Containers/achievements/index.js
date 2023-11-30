import "./style.css";
import { FaTrophy } from "react-icons/fa";
import { achievements } from "./data";
import { useState } from "react";
import Items from "./items";
import PageHeaderContent from "../../Components/pageHeader";

const Achievements = () => {
  const [achievementItems, setMenuItems] = useState(achievements);

  return (
    <>
      <div>
        <section id="achievement" className="achievement section">
          <PageHeaderContent
            headerText="My Achievements"
            icon={<FaTrophy size={40} />}
          />
          <div className="container">
            <br />
            <div className="achievement-container  ">
              <div>
                <Items achievementItems={achievementItems} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Achievements;
