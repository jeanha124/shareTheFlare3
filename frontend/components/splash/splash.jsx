import React from 'react';

class Splash extends React.Component {
  constructor (props){
    super(props);
  }
  render (){
    return (
    <div className='splash'>
      <div className="image1"></div>
      <div className="image2"></div>
      <div className="image3"></div>
      <div className="image4"></div>
      <div className="content">
        <h1 className="content-h1">Find your inspiration.</h1>
        <h2 className="content-h2">Join the Share the Flare community, home to tens of billions of photos and 2 million groups.</h2>
        <button className='signup-2' onClick={() => this.props.openModal('signup')}>Sign Up</button>
      </div>
    </div>
    );

  }
}




export default Splash;
