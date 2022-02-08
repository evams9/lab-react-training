import PropTypes from "prop-types";


function IdCard({lastName, firstName, gender, height, picture}) {
 return (
    <div className="card">

      <section>
        <img src={picture}  alt="avatar"/>
      </section>

      <section>
      <ul><b>First Name:</b> {firstName}</ul>
      <ul><b>Last Name:</b> {lastName}</ul>
      <ul><b>Gender:</b> {gender}</ul>
      <ul><b>Height:</b> {height}</ul>
      {/*<ul> <b>Birth</b> {birth} </ul>*/}

      </section>

    </div>
  )
}

IdCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  gender: PropTypes.oneOf(["male", "female"]),
  height: PropTypes.number,
  picture: PropTypes.string,
}
  
export default IdCard;