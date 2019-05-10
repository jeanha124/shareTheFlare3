import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../main_tools/footer';
// import Slider from 'react-slick';

class Splash extends React.Component {
  constructor (props){
    super(props);
  }
  render (){
    // const items = ["https://s3.amazonaws.com/share-the-flare-dev/bench2.jpg", "https://s3.amazonaws.com/share-the-flare-dev/amanda.jpg", "https://s3.amazonaws.com/share-the-flare-dev/amber.jpg"];
    // let settings = {
    //   dots: false,
    //   infinity: true,
    //   autoplay: true,
    //   arrows: false,
    // };
    // const content1 = {
    //   margin: 'auto',
    //   paddingBottom: '12px',
    //   width: '560px',
    //   color: 'white',
    //   fontSize: '60px',
    //   textShadow: '1px 1px black',
    // };
    // const content2 = {
    //   margin: 'auto',
    //   paddingBottom: '15px',
    //   color: 'white',
    //   fontWeight: '500',
    //   width: '500px',
    //   fontSize: '26px',
    //   textAlign: 'center',
    //   textShadow: '1px 1px black',
    // };
    // const contentSignup = {
    //   display: 'black',
    //   margin: '0 auto',
    //   fontSize: '24px',
    //   background: 'whitesmoke',
    //   color: 'black',
    //   borderRadius: '5px',
    //   padding: '16px 58px'
    // };
    return (
    <React.Fragment>
      <nav className="splash-auth">
        <Link to='/'><h1 className="logo" style={{color: '#fff', margin: "0 30px"}}>Share The Flare</h1></Link>
        <div className="splash-losi">
          <button className="login" onClick= { () => this.props.openModal('login') }>Log In</button>
          <button className="signup" onClick= { () => this.props.openModal('signup') }>Sign Up</button>
        </div>
      </nav>
      <div className="launch-body">
        {/* <Slider {...settings} style={{fontFamily: 'Proxima Nova, helvetica nueue, helvetica, arial, sans-serif', position: 'relative', zIndex: '10'}}>
          {
            items.map(
              (item, idx) => <CarouselPhoto key={idx} item={item} />  
            )
          }
        </Slider> */}
        <div className="content">
          <h1 className="content-h1">Find your inspiration.</h1>
          <h2 className="content-h2">Join the Share the Flare community, home to tens of billions of photos and 2 million groups.</h2>
          <button className='signup-2' onClick={() => this.props.openModal('signup')}>Sign Up</button>
        </div>
      </div>
      <Footer />
    </React.Fragment>
    );

  }
}


// class CarouselPhoto extends React.Component {
//   render() {
//     const { item } = this.props;
//     return (
//       <React.Fragment>
//         <img src={`${item}`} style={{width: '100%', maxHeight: '1150px'}}/>
//       </React.Fragment>
//     );
//   }
// }
// return (
//   this.props.currentUser ? mainNav() : sessionLinks()
//   );

export default Splash;
  
 
  
  // <Switch>
  // <Route path='/' component={HomepageContainer} />
      // </Switch>
  /*<nav className="sub-nav">
  <h1 className="activity">All Activity</h1>
  </nav>*/
  
  //<input type="text" placeholder="Photos" className="search"/> 