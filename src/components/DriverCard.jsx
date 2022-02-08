import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="drivercard">
      <section>
        <img src={img} alt="avatar" />
      </section>

      <section>
        <h6>{name}</h6>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </section>
    </div>
  );
}

export default DriverCard;
