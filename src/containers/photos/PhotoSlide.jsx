import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as photosActions from '../../actions/photosActions'
import config from '../../constants/config'
import {Link} from 'react-router'
import AngleRight from 'react-icons/lib/fa/angle-right'
import AngleLeft from 'react-icons/lib/fa/angle-left'

if (process.env.BROWSER) {
    require('./PhotoSlide.css')
}

class PhotoSlide extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photoSelected: null
        }
        // this.getPhotoIndexById = this.getPhotoIndexById.bind(this)
    }
    componentWillMount() {
        const { actions, location, params, state } = this.props
        if(state.photos.photos != []) {
            actions.queryPhotos()
        }
    }
    componentWillReceiveProps(nextProps) {
    }
    componentDidMount() {
    }
    componentDidUpdate() {
    }
    getPhotoIndexById(id, photos) {
        let res;
        for(let i = 0; i < photos.length; i++) {
            photos[i].show = 'none'
            if(photos[i]._id == id) {
                photos[i].show = 'absolute'
                res = i
            }
        }
        return res
    }
    render() {
        let self = this

        //Redux
        let { state, location } = self.props
        let photos = state.photos.photos || []
        let photoId = location.query.photoId
        let photoSelected = self.getPhotoIndexById(photoId, photos)
        let prevPhotoId = photos[photoSelected - 1]?photos[photoSelected - 1]._id:''
        let nextPhotoId = photos[photoSelected + 1]?photos[photoSelected + 1]._id:''

        return (
            <div className="PhotoSlide-mainArea">
                <Link to={"/photos/slide?photoId=" + prevPhotoId} style={ {display: prevPhotoId?'inline':'none'} }>
                    <AngleLeft className="photoSlide-angleLeft"/>
                </Link>
                <Link to={"/photos/slide?photoId=" + nextPhotoId} style={ {display: nextPhotoId?'inline':'none'} }>
                    <AngleRight className="photoSlide-angleRight"/>
                </Link>
                <Link to="/photos" style={ {cursor: "pointer"} }>
                    <div className="PhotoSlide-blackCanvas">
                    </div>
                </Link>
                <div className="PhotoSlide-photosArea">
                    {
                        photos.map( (item) => {
                            return (
                                <img key={item._id} className="PhotoSlide-photo" src={config.apiUrl + '/files/photos/' + item.fileName} style={ {display: item.show} }/>
                            )
                        })
                    }
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

export default connect(mapStateToProps, mapDispatchToProps)(PhotoSlide)
