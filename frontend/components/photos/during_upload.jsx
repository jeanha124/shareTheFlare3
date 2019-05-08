import React from 'react';
import { Link } from 'react-router-dom';

class DuringUpload extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.photo;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }
  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }
  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      return this.setState({photoFile: file, photoUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }
  componentDidMount(){
    return <input type="file" onChange={this.handleFile} className="form-file" />;
  }
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[title]', this.state.title);
    formData.append('photo[description]', this.state.description);
    formData.append('photo[currentUserId]', this.state.ownerId);
    if (this.state.photoFile) {
      formData.append('photo[picture]', this.state.photoFile);
    }
    this.props.action(formData).then(function () {
      this.props.history.push(`/photos/~/${this.state.display_name}`);
    }.bind(this));
  }
  stopEnter(e) {
    e.preventDefault();
  }
  render(){
    let prev, submit, inputTitle, inputDescription;
    prev = this.state.photoUrl ? <img src={this.state.photoUrl} style={{maxHeight: '300px', maxWidth: '300px'}}/> : null;
    submit = this.handleSubmit;
    inputTitle = <input type="text" className="photo-title" value={this.state.title} onChange={this.update('title')} placeholder="Add title"/>;
    inputDescription = <input type="text" className="photo-description" value={this.state.description} onChange={this.update('description')} placeholder="Add a description"/>;
   
      return (
        <React.Fragment>
          <div className="content-new">
            <nav className="change-nav">
                <button id="upload1" onClick={submit}>{this.props.formType}</button>
            </nav>
            <div className="sidebar">
              <div className="inner-sidebar">
                <ul className="sidebar-ul">
                  <p>Editing 1 photo:</p>
                  <li>Title</li>
                  <li>Tags</li>
                  <li>Albums</li>
                </ul>
              </div>
            </div>  
            <form className="new-photo" onSubmit={this.stopEnter.bind(this)}>
              <ul>
                <input type="file" onChange={this.handleFile} className="form-file"/>
                <li>{prev}</li>
                <li className="photo-title">{inputTitle}</li>
                <li className="photo-description">{inputDescription}</li>
              </ul>
            </form>
          </div>
        </React.Fragment>
      ); 
  }
}

export default DuringUpload;