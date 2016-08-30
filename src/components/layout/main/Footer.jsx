import React from 'react'

if (process.env.BROWSER) {
    require('./Footer.css')
}

export default class Footer extends React.Component {
	render() {
		return (
			<footer className="MainFooter-footer">
			    Copyright © DumDumGenius 2016
			</footer>
		)
	}
}
