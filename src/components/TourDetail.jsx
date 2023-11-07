import React, { useEffect, useState } from "react";
import "../styles/TourDetail.css";
import { BsCheckLg } from "react-icons/bs";
import ToorUse from "./ToorUse";
import { useParams } from "react-router-dom";
import { usestatecontext } from "../context/ContextProvider";
import axios from "axios";

const TourDetail = () => {
  const [isCheck, setIsCheck] = useState(false);
  const { loggedUser } = usestatecontext();
  console.log("logged user: ", loggedUser);

  const { id } = useParams();
  console.log(id);

  const [tourr, setTourr] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://holiday-planner-4lnj.onrender.com/api/v1/tour/getElement?fieldName=_id&value=${id}`
        );
        const data = response.data;
        setTourr(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [id]);

  console.log("=====================", tourr);
  const handleIsCheck = () => {
    setIsCheck((check) => !check);
  };
let yvette= tourr._id;
console.log("ssssssssssssssssssssss", yvette);
  const [booktour, setbooktour] = useState({
    bookingDate: "",
    paymentMethod: "",
    ticketCount: "",
    messagee: "",
    // tourID: tourr._id,
    fullname: loggedUser.fullName,
    email: loggedUser.email,
    confirmEmail: loggedUser.email,
    phone: "07888888",
    tourID: id,
  });
  const handleBook = (e) => {
    setbooktour({ ...booktour, [e.target.name]: e.target.value });
  };

  let user = JSON.parse(localStorage.getItem("info"));
  let token = user?.access_token;
  // let userData = user?.user;
  console.log(token);
  const handlebookSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://holiday-planner-4lnj.onrender.com/api/v1/booking/create",
        booktour,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQxZmJjMjEzZTMyZDA3NTVjMTI2NTUiLCJpYXQiOjE2OTkzNzkzMDYsImV4cCI6MTY5OTM5MDEwNn0.joe6vA9qh7ZVduxzwV37agsgTVRBDetHmP3HS8BomyU",
          },
        }
      );
      alert("booking created");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="details">
        <p className="italy">{tourr.Title}</p>
      </div>
      <div className="allDetails">
        <div className="leftDetails">
          <div className="ttable">
            <div className="div1" style={{ backgroundColor: "#C29D59" }}>
              Information
            </div>
            <div className="div1">Tour Plan</div>
            <div className="div1">Location</div>
            <div className="div1">Garelly</div>
            <div className="div1">Review</div>
          </div>
          <div className="ddetail">
            <div className="topDetails">
              <div className="tl">
                <p className="pp">
                  A wonderful serenity has taken possession of my entire soul
                </p>
              </div>
              {/* <div className="tr">
                <div className="circle">
                  <span className="digit1 ">$1200</span>
                  <div className="diameter"></div>
                  <span className="digit">Per Person</span>
                </div>
              </div> */}
            </div>
            <div className="tttable">
              <div className="div2">{tourr.Duration}</div>
              <div className="div2">{tourr.GroupSize}</div>
              <div className="div2">{tourr.Seats}</div>
              <div className="div2">{tourr.destination}</div>
              <div className="div2">{tourr.TourType}</div>
            </div>

            <div className="mcont">
              <p className="pcont">
                I should be incapable of drawing a single stroke at the present
                moment; and yet I feel that I never was a greater artist than
                now. When, while the lovely valley teems with vapour around me,
                and the meridian sun strikes the upper surface of the
                impenetrable foliage of my trees, and but a few stray gleams.{" "}
                <br /> <br />I should be incapable of drawing a single stroke at
                the present moment; and yet I feel that I never was a greater
                artist than now. When, while the lovely valley teems with vapour
                around me, and the meridian sun strikes the upper surface of the
                impenetrable foliage of my trees, and but a few stray gleams
                steal into the inner sanctuary, I throw myself down among the
                tall grass by the trickling stream; and, as I lie close to the
                earth, a thousand unknown plants are noticed by me: when I hear
                the buzz of the little world among the stalks, and grow familiar
                with the countless indescribable forms of the insects and flies,
                then I feel the presence of the Almighty, who formed us in his
                own image, and the breath
              </p>
            </div>
            <div className="imagedivv">
              <img
                src={tourr.backdropImage}
                className=""
                style={{ width: "100%" }}
              ></img>
            </div>
            <div className="flexes">
              <div className="flex1">
                <p>Destination</p>
              </div>
              <div className="flex2">
                <p>{tourr.destination}</p>
              </div>
            </div>
            <div className="flexes">
              <div className="flex1">
                <p>Departure</p>
              </div>
              <div className="flex2">
                <p>Lorem Ipsum</p>
              </div>
            </div>
            <div className="flexes">
              <div className="flex1">
                <p>Departure Time</p>
              </div>
              <div className="flex2">
                <p>{tourr.departureTime} AM To 9:30 AM.</p>
              </div>
            </div>
            <div className="flexes">
              <div className="flex1">
                <p>Dress Code</p>
              </div>
              <div className="flex2">
                <p>comfortable clothing and light jacket.</p>
              </div>
            </div>
            <div className="flexes">
              <div className="flex1">
                <p>Price Included</p>
              </div>
              <div className="flex2">
                <p>
                  5 Star Accommodation Air fases <br />3 Nights Hotel
                  Accomodation All transportation in destination location
                </p>
              </div>
            </div>
            <div className="flexes">
              <div className="flex1">
                <p>Price Not Included</p>
              </div>
              <div className="flex2">
                <p>Guide Service Fee Any Private Expenses Room Service Fees</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightDetails">
          <div className="relativediv">
            <form className="formdiv">
              <div className="field1">
                {/* <input
                  type="text"
                  className="formfield"
                  placeholder="userId*"
                  name="userId"
                  value={loggedUser?._id}
                ></input> */}
                {/* <input
                  type="text"
                  className="formfield"
                  placeholder="tourId*"
                  name="tourID"
                  value={tourr?._id}
                ></input> */}
              </div>
              <div className="field1">
                <input
                  type="text"
                  className="formfield"
                  placeholder="fullName*"
                  name="fullName"
                  value={loggedUser?.fullName}
                ></input>
              </div>
              <div className="field1">
                <input
                  type="text"
                  className="formfield"
                  placeholder="email*"
                  name="emil"
                  value={loggedUser?.email}
                ></input>
              </div>
              <div className="field1">
                <input
                  type="text"
                  className="formfield"
                  placeholder="toutTitle*"
                  name="toutTitle"
                  value={tourr?.Title}
                ></input>
              </div>
              <div className="field1">
                <input
                  type="date"
                  className="formfield"
                  // placeholder="yy/mm/dd*"
                  name="bookingDate"
                  value={booktour.bookingDate}
                  onChange={handleBook}
                ></input>
              </div>
              <div className="field1">
                <input
                  type="text"
                  className="formfield"
                  placeholder="Number of Tickets*"
                  name="ticketCount"
                  value={booktour.ticketCount}
                  onChange={handleBook}
                ></input>
              </div>
              <div className="field1">
                <input
                  type="text"
                  className="formfield"
                  placeholder="Payment Method*"
                  name="paymentMethod"
                  value={booktour.paymentMethod}
                  onChange={handleBook}
                ></input>
              </div>
              <div className="field2">
                <input
                  type="text"
                  className="formfield1"
                  placeholder="message*"
                  name="messagee"
                  value={booktour.messagee}
                  onChange={handleBook}
                ></input>
              </div>
              <div className="fields">
                <div className="checkbox1" onClick={handleIsCheck}>
                  {isCheck ? <BsCheckLg className="checl" /> : ""}
                </div>
                <p>Check Availability</p>
              </div>
              <button
                type="submit"
                className="buttoned"
                onClick={handlebookSubmit}
              >
                BOOO NOW
              </button>
            </form>
            <div className="call">
              <ToorUse />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourDetail;
