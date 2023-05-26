import React from 'react'
// import PropTypes from 'prop-types'

function CardLIst(props) {
    return (
        <>
            <h3>CardList</h3>
            <div className="card-group" id={props.id}>
                {props.children(props.items)}
            </div>
        </>
        
    )
}

CardLIst.propTypes = {}

export default CardLIst
