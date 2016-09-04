import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as photosActions from '../../actions/photosActions'

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
        let photos = state.photos
        console.log(photos);

        return (
            <div className="Photos-mainArea">
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
