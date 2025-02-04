import Style from "../component/Staff_Card.module.css";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";

const Staff_Card = ({
  img,
  status,
  position,
  name,
  to,
  verified,
  viewDetails = true,
}) => {
  return (
    <div id={Style.Staff_Card_mainDiv}>
      <div id={Style.Staff_Card_WrapperDiv}>
        <div>
          <div id={Style.verified_img_div}>
            {verified && <img src={verified} alt="" />}
          </div>
          <img src={img} alt="" />
        </div>

        <div id={Style.Staff_Card_textDiv}>
          <p className={Style.Staff_Card_nameText}>{name}</p>
          <p className={Style.Staff_Card_careRep}>{position}</p>
          <p className={Style.Staff_Card_onlineDiv}>
            {" "}
            <div className={Style.Staff_Card_online_signalDiv}></div>
            {status}
          </p>
          {viewDetails && (
            <Link to={to}>
              <Button text={"View More Details"} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Staff_Card;
