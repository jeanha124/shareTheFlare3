import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './../modals/modal';
import { Switch, Route } from 'react-router-dom';
import Splash from './splash/splash_container';
import Upload from './photos/upload_container';
import Homepage from './homepage/homepage_container';
import PhotoIndex from './photos/photo_index_container';
import PhotoShow from './photos/photo_show_container';
import AlbumForm from './albums/album_form_container';
import AlbumShow from './albums/album_show';
import AlbumIndex from './albums/album_index';
import AlbumUpdate from './albums/album_update';
import MainNav from './main_tools/main_nav_container';
import Footer from './main_tools/footer';

class App extends React.Component {
  render () {
    const path = window.location.hash;
    return (
      <div className="main-container" style={{display: 'flex', flexDirection: 'column'}}>
        <Route path="/" component={MainNav} />
        <Modal />
        <AuthRoute exact path='/' component={Splash} />
        <ProtectedRoute exact path='/' component={Homepage} />
        <ProtectedRoute path='/photos/upload' component={Upload} />
        <ProtectedRoute exact path='/photos/~/:display_name' component={PhotoIndex} />
        <ProtectedRoute exact path='/photos/~/:display_name/:photoId' component={PhotoShow} />
        <ProtectedRoute exact path='/:display_name/new_album' component={AlbumForm} />
        <ProtectedRoute exact path='/albums/:albumId/edit' component={AlbumUpdate} />
        <ProtectedRoute exact path='/albums/:albumId' component={AlbumShow} />
        <ProtectedRoute exact path='/albums' component={AlbumIndex} />
        <Route path="/" component={Footer} />
      </div>
    );
  }
}

export default App;
