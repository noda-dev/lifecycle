import React from 'react';
import CSS from 'csstype';

type Props = {
  url: string,
  label: string
}

const PhotoText = (props: Props) => {
  const imgStyle: CSS.Properties = {
    objectFit: 'cover',
    width: '500px',
    height: '300px'
  }

  return (
    <div>
      <h2>{props.label}</h2>
      <img src={props.url} alt={props.label} style={imgStyle}/>
    </div>
  );
}

export default PhotoText;