import PropTypes from "prop-types";

function Rating({children}) {

    return (
       <div className="stars">
   
         <nav>
         {children}
         </nav>
       
       </div>
     )
   }

   Rating.propTypes = {
    children: PropTypes.string,


}


   export default Rating;