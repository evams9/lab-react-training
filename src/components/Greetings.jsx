import PropTypes from 'prop-types';

function Greetings({ lang, children }) {
  let greeting;

  if (lang === 'de') {
    greeting = 'Hallo';
  } else if (lang === 'en') {
    greeting = 'Hello';
  } else if (lang === 'es') {
    greeting = 'Hola';
  } else if (lang === 'fr') {
    greeting = 'Bonjour';
  } else {
    greeting = 'Hi';
  }

  return (
    <div className="greetings">
      <nav>
        {greeting} {children}
      </nav>
    </div>
  );
}

Greetings.propTypes = {
  lang: PropTypes.string,
  children: PropTypes.string,
};

export default Greetings;
