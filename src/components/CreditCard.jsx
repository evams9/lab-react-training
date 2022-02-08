import visaImg from '../assets/images/visa.png';
import mcImg from '../assets/images/master-card.svg';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const divStyle = {
    background: bgColor,
  };

  let hashedNumber = [];
  for (let i = 0; i < number.length; i++) {
    if (i < number.length - 4) {
      hashedNumber.push('*');
    } else {
      hashedNumber.push(number[i]);
    }
  }

  let cardType;

  if (type === 'Visa') {
    cardType = visaImg;
  } else if (type === 'Master Card') {
    cardType = mcImg;
  }

  return (
    <div className="creditCard" style={divStyle}>
      <section>
        <img src={cardType} alt="visa" />
        <span>{hashedNumber.join(' ')}</span>
        <ul>
          {expirationMonth} {expirationYear} {bank}
        </ul>
        <span>{owner}</span>
        <span>{bgColor}</span>
        <span>{color}</span>
      </section>
    </div>
  );
}

export default CreditCard;
