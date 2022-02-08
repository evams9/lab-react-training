function CreditCard({type, number, expirationMonth, expirationYear, banck, owner, bgColor, color}) {

 return ( 
    <div className="creditCard">

    <section>
      
      <img src={type}  alt="visa"/>
      <span>{number}</span> 
      <ul>{expirationMonth} {expirationYear} {banck}</ul>
      <span>{owner}</span> 
      <span>{bgColor}</span> 
      <span>{color}</span>
     

    </section>

    </div>
  )
}


  
export default CreditCard;