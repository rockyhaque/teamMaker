import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import "./Home.css";

const Home = () => {
  const [allActors, setAllActors] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  // useEffect(() => {}, [])
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      // .then(data => console.log(data))
      .then((data) => setAllActors(data));
  }, []);

  //   console.log(allActors);

  const handleSelectActor = (actor) => {
    // console.log("hello");
    // console.log(actor);
    const isExist = selectedActors.find((item) => item.id == actor.id);

    // Total Budget 20$
    let count = actor.salary;
    if (isExist) {
      return alert("Already Booked");
    } else {
      selectedActors.forEach((item) => {
        count += item.salary;
      });
      // Got the value by checking console log
      // console.log(count);
      const totalRemaining = 20000 - count;

      // console.log(totalRemaining);
      if(count > 20000){
        return alert("Not have enough money");
      } else{
        setTotalCost(count);
        setRemaining(totalRemaining);
        setSelectedActors([...selectedActors, actor]);
      }

    }
  };

  // console.log(selectedActors);

  return (
    <div className="container">
      <div className="home-container">
        <div className="card-container">
          {allActors.map((actor) => (
            <div key={actor.id} className="card">
              <div className="card-img">
                <img className="photo" src={actor.image} alt="" />
                <h2>{actor.name}</h2>
                <p>
                  <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vel, ipsum.
                  </small>
                </p>
                <div className="info">
                  <p>Salary: ${actor.salary}</p>
                  <p>{actor.role}</p>
                </div>
                <button
                  onClick={() => handleSelectActor(actor)}
                  className="card-btn"
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart">
          <Cart
            selectedActors={selectedActors}
            remaining={remaining}
            totalCost={totalCost}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
