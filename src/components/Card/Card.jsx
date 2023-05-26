import React from 'react'
import CardBody from '../CardBody/CardBody';
import CardImage from '../CardImage/CardImage';
// import PropTypes from 'prop-types'

function Card(props) {
    const { url } = props.children;
    return (
        <div className="w-30 d-flex align-items-end">
            <div className="card">
                {url && (
                    <CardImage {...props} />
                )}
                <CardBody {...props}></CardBody>
            </div>
        </div>
    )
}

Card.propTypes = {}

export default Card
