import React from 'react'
import PropTypes from 'prop-types'

function CardBody({ children }) {
    const { title, text, link } = children;
    return (
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <a href={link} className="btn btn-primary">Go somewhere</a>
        </div>
    )
}

CardBody.propTypes = {
    children: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }).isRequired
}

export default CardBody
