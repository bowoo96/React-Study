import React from 'react'


function UserDataList(props) {
    return (
        <li>{props.name} ({props.age} years old)</li>
    )
}

export default UserDataList