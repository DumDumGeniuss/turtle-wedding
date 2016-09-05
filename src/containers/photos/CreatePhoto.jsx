import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as photosActions from '../../actions/photosActions'


if (process.env.BROWSER) {
    require('./CreatePhoto.css')
}

class CreatePhoto extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: null,
            sequence: null,
            create_at: new Date(),
            update_at: new Date()
        }
    }
    createPhoto() {
        let { actions } = this.props,
            self = this,
            params = {
                content: self.state.content,
                sequence: parseInt(self.state.sequence, 10),
                photo: document.getElementById('photo').files[0],
                create_at: self.state.create_at,
                update_at: self.state.update_at
            }
        photosActions.addPhoto(params)
        photosActions.queryPhotos()
        self.props.history.push('/photos');
    }
    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }
    handleSequenceChange(event) {
        this.setState({
            sequence: event.target.value
        })
    }
                    // <div>
                    //     <label className="CreatePhotos-inputLabel">Sequence</label>
                    //     <input className="CreatePhotos-input" onChange={this.handleSequenceChange.bind(this)}></input>
                    // </div>
    render() {
        return (
            <div>
                <div>
                    <span className="CreatePhotos-title"><b>Create New Photo!</b></span>
                    <div>
                        <label className="CreatePhotos-inputLabel">content</label>
                        <textarea className="CreatePhotos-textInput" onChange={this.handleContentChange.bind(this)}></textarea>
                    </div>
                    <div>
                        <label className="CreatePhotos-inputLabel">photo</label>
                        <input className="CreatePhotos-input" type="file" name="photo" id="photo" accept="image/*" />
                    </div>
                    <div>
                        <button className="CreatePhotos-submitButton" onClick={this.createPhoto.bind(this)}>submit</button>
                    </div>
                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(photosActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePhoto)
