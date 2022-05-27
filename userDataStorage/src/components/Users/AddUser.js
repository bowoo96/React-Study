import React, { useState } from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import styled from '../UI/Button.module.css';
import ErrorModal from '../UI/ErrorModal';

function AddUser(props) {

    // input에 입력한 값이 바뀌는 걸 인식
    const [userName, setUserName] = useState("");
    const [userAge, setUserAge] = useState("");
    const [error, setError] = useState();

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
        if (!userName || !userAge) {
            setError({
                title : "Invalid input",
                message : "값을 입력해 주세요.",
            });
            return
        } else if (+userAge < 1) {
            setError({
                title : "Invalid age",
                message : "나이를 1 이상 입력해 주세요.",
            });
            return
        }

        // user의 data를 저장해서 부모 컴포넌트로 보내는 객체
        const userData = {
            name: userName,
            age: userAge,
        }

        props.onUserData(userData);
        // form으로 userData를 보내고 input에 입력된 내용을 초기화
        setUserName("");
        setUserAge("");
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title="An error occured!" message="Something went wrong!" onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={userName} onChange={userNameHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={userAge} onChange={userAgeHandler} />
                    <button type="submit" className={styled.button}>Add User</button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser