import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as photosActions from '../../actions/photosActions'
import DisplayPhotos from '../../components/displayPhotos/DisplayPhotos.jsx'

if (process.env.BROWSER) {
    require('./Photos.css')
}

class Photos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {      
        }
    }
    componentWillMount() {
        const { actions, location, params } = this.props
        actions.queryPhotos();
    }
    componentWillReceiveProps(nextProps) {
    }
    componentDidMount() {
    }
    componentDidUpdate() {
    }
    render() {
        let self = this

        //Redux
        let { state, location } = self.props
        let photos = state.photos.photos || []

        return (
            <div className="Photos-mainArea">
                <DisplayPhotos photos={photos}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Photos)
