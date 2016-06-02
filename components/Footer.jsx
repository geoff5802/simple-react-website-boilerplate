'use-strict';

import React from 'react';

const footerObj = {
  image: './images/logo-transparent.png',
  url: 'http://bigroomstudios.com/'
};

class Footer extends React.Component {
  render(){
    const styleSheet = {
      fontStyle: 'Arial',
      background: 'rgb(34, 34, 34)',
      left:'0px',
      right:'0px',
      width: '100%',
      padding:'1em',
      color:'#9d9d9d',
      marginTop:'5em'
    };
    const footerStyle = {
      textAlign: 'center'
    };
    return (
      <div style={styleSheet}>
        <footer style={footerStyle}>
          <a href={footerObj.url} target='_blank'><img src={footerObj.image} style={{height: '100px'}}/></a>
        </footer>
      </div>
    );
  }
}

export default Footer;
