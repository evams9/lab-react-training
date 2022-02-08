import PropTypes from "prop-types";

function Random({min, max}) {

    return (
       <div className="number">
   
         <nav>
          Random value between {min} and {max} {"=>"}
          {Math.floor((Math.random() * (max - min + 1)) + min)}
         
         </nav>
       
       </div>
     )
   }

   Random.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,

}


   export default Random;