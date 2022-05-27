import React from 'react'

function UserDataList(props) {
    return (
        <li>
            <div>{props.name}</div>
            <div>{` (${props.age} years old)`}</div>
        </li>
    )
}

export default UserDataList