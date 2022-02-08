import PropTypes from "prop-types";


function Greetings({lang, children}) {



 return (
    <div className="greetings">

      <nav>{lang}{children}</nav>
    
    </div>
  )
}

Greetings.propTypes = {
    lang: PropTypes.string,
    children: PropTypes.string,

}

export default Greetings;