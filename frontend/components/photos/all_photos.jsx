// import React from 'react';
// import { Link } from 'react-router-dom';

// class PhotoIdx2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentPhotos: null,
//       photoIdx: null,
//     };

//   }
//   componentDidMount() {
//     const { photos } = this.props;
//     const currPhotos = this.photoArray(photos, this.photoIdx);
//     this.setState({ currPhotos });
//   }
//   photoArray(photos, photoIdx) {
//     return photos.map((photo) => ({
//       id: photo.id,
//       photoUrl: photo.src,
//       created_at: photo.created_at,
//       owner_id: photo.owner_id,
//       photoIdx
//     }));
//   }

// }