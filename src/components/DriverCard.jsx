import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="drivercard">
      <section>
        <img src={img} alt="avatar" id="circle"/>
      </section>

      <section id="carnetData">
        <h3>{name}</h3>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </section>
    </div>
  );
}

export default DriverCard;
