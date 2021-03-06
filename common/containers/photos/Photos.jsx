import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as photosActions from '../../actions/photosActions'
import {Link} from 'react-router'
import Star from 'react-icons/lib/fa/star'
import Bans from 'react-icons/lib/fa/ban'
import PlusSquare from 'react-icons/lib/fa/plus-square'
import SimplePhotoBox from '../../components/box/simplePhotoBox/SimplePhotoBox.jsx'

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
        const { actions, location, params, state } = this.props
        if(state.photos.photos.length == 0) {
            actions.queryPhotos()
        }
    }
    componentWillReceiveProps(nextProps) {
    }
    componentDidMount() {
    }
    componentDidUpdate() {
    }
    deletePhoto(id) {
        const { actions } = this.props
        actions.deletePhoto(id)
    }
    render() {
        let self = this

        //Redux
        let { state, location } = self.props
        let photos = state.photos.photos || []
        let superMode = location.query.super
        return (
            <div className="Photos-mainArea">
                <div className="Photos-displayPhotos">
                    <Link className="Photos-addPhoto" to={'/photos/create'} style={ {display: superMode?'initial':'none'} }>
                        <PlusSquare />
                    </Link>
                    <div className="Photos-photosArea">
                        {
                            photos.map( (item) => {
                                return (
                                    <SimplePhotoBox onClick={ self.deletePhoto.bind(self, item._id) } key={item._id} photo={item}>
                                        <Bans onClick={ self.deletePhoto.bind(self, item._id) } style={ {display: superMode?'initial':'none'} }/>
                                    </SimplePhotoBox>
                                )
                            })
                        }
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

export default connect(mapStateToProps, mapDispatchToProps)(Photos)
