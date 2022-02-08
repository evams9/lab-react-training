
function DriverCard({name, rating, img, car}) {
 return (
    <div className="drivercard">

      <section>
        <img src={img}  alt="avatar"/>
      </section>

      <section>

        <ul>{name}</ul>
        <ul>{rating}</ul>
        <ul>{car}</ul>

      </section>

    </div>
  )
}

export default DriverCard;