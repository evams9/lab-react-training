function BoxColor({ r, g, b }) {
  const divStyle = {
    padding: '30px',
    color: 'black',
    background: `rgb(${r}, ${g}, ${b})`,
  };

  return (
    <div className="colors">
      <nav>
        <div style={divStyle}>
          rgb({r},{g},{b})
        </div>
      </nav>
    </div>
  );
}

export default BoxColor;
