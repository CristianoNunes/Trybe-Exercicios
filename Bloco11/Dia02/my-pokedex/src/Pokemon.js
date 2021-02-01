import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight: { value, measurementUnit}, image } = this.props.pokemon;
    return(
      <div className="containerPoke">
        <div className="infoPoke">
        <span className="info">{name}</span>
        <span className="info">{type}</span>
        <span className="info">{`Average weight ${value} ${measurementUnit}`}</span>
        </div>
        <img src={image} className="imgPoke"/>
      </div>
    );
  }
}

export default Pokemon;