import React, { useState } from 'react'

function AddUser(props) {

    // input에 입력한 값이 바뀌는 걸 인식
    const [userName, setUserName] = useState("");
    const [userAge, setUserAge] = useState("");

    // input의 state에 바뀐 값을 적용
    const userNameHandler = (data) => {
        setUserName(data.target.value);
    }
    const userAgeHandler = (data) => {
        setUserAge(data.target.value);
        console.log(data.target.value);
    }

    // form을 이용해서 부모 컴포넌트로 데이터 전달
    const submitHandler = (event) => {
        event.preventDefault();

        // if문을 통해서 경고창 2개
        if(!userName || !userAge){
            alert('데이터를 입력하세요');
            return
        }else if(userAge < 0){
            alert('0보다 큰 수를 입력하세요');
            return
        }

        // user의 data를 저장해서 부모 컴포넌트로 보내는 객체
        const userData = {
            name : userName,
            age : userAge,
        }

        props.onUserData(userData);
        // form으로 userData를 보내고 input에 입력된 내용을 초기화
        setUserName("");
        setUserAge("");
    }   


    return (
        <form onSubmit={submitHandler}>
            <div>
                <h1>Username</h1>
                <input type="text" value={userName} onChange={userNameHandler} />
            </div>
            <div>
                <h1>Age (Years)</h1>
                <input type="number" maxLength='2' value={userAge} onChange={userAgeHandler} />
            </div>
            <button type="submit">Add User</button>
        </form>
    )
}

export default AddUser