import React from 'react'

const User = props => (
    <div>
        <p>{props.user.name}</p>
        <button id={props.user._id} onClick={props.handleDelete}>Delete {props.user.name}</button>
    </div>
)

export default User