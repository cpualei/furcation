import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBookingPage, addBooking } from "../../store/bookings";
import { Calendar } from "react-calendar";

const CreateBookingPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const booking = useSelector((state) => state.bookings[id]);

  const [totalCost, setTotalCost] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [errors, setErrors] = useState([]);
  const [value, onChange] = useState(new Date());

  // const calendar = useSelector((state) => state = {
  //     date: new Date()
  // });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBooking = {
      userId: sessionUser,
      totalCost,
      startDate,
      endDate,
    };
  };

  useEffect(() => {
    dispatch(getBookingPage(id)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
  }, [dispatch, id]);

  const confirmBookingBtn = (e) => {
    history.push("/bookings");
  };

  return (
    <div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <div>{booking?.name}</div>
          <div>{booking?.state}</div>
          <div>{booking?.country}</div>
          <img src={booking?.img1} alt="img1"></img>
          <label>Start Date:</label>
          <input
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <label>End Date:</label>
          <input value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          <div>
            <Calendar onChange={onChange} value={value} />
          </div>
          <p>Total Cost: ${booking?.cost + booking?.cost * 0.4}</p>
          <label>Confirm Total Cost:</label>
          <input
            value={totalCost}
            onChange={(e) => setTotalCost(e.target.value)}
          />
          <button type="submit">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBookingPage;
