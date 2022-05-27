import React, { useState } from 'react';
import AddUser from './component/AddUser';
import UserDataList from './component/UserDataList';

function App() {
  // userData를 배열에 넣어주는 작업, boolean값으로 component 보이게 하는 작업
  const [userDataArray, setUserDataArray] = useState([]);
  const [showComponent, setShowComponent] = useState(false);

  // 배열에 자식 컴포넌트에서 받아온 데이터를 객체 형태로 추가하는 작업, boolean값 변화
  const saveUserData = (userData) => {
    setUserDataArray(userDataArray => [...userDataArray, userData]);
    setShowComponent(true);
  }

  // map을 통해 컴포넌트를 state의 변화에 따라 생성
  const addComponent = userDataArray.map((dataObject) => (
    <UserDataList
      name={dataObject.name}
      age={dataObject.age}
    />
  ))

  return (
    <div>
      {/* 최종적으로 조건부 렌더링을 통해서, data유무에 true false를 주고, 그에 맞으면 리스트가 보이도록 설정을 해야한다. */}
      <AddUser onUserData={saveUserData} />
      {showComponent && <ul>{addComponent}</ul>}
    </div>
  );
}

export default App;
