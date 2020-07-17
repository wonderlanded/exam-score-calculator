import React, { useState } from 'react';

function App() {
  const [ myScore, setScore ] = useState(20)
  const [ percent, setPercent ] = useState(20)
  const [ want, setWant ] = useState(90)
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>, set: React.Dispatch<React.SetStateAction<any>>) => {
    set(e.target.value)
  }
  return (
    <div className="ui container top">
      <h1 className="ui header center aligned">시험 점수 계산기</h1>
      <p className="ui header center aligned">내가 받은 수행평가 점수를 목표점수와 비교합니다.</p>
      <div className="ui huge form">
      <div className="two fields">
        <div className="field">
          <label>나의 수행평가 점수</label>
          <div className="ui labeled input">
          <input placeholder="수행점수" type="text" value={myScore} onChange={(e)=> handleChange(e, setScore)}/>
          <div className="ui label">
            점
          </div>
        </div>
        </div>
        <div className="field">
          <label>수행평가 반영 퍼센트</label>
          <div className="ui labeled input">
          <input placeholder="100% 기준 수행평가 반영 퍼센트" type="text" value={percent} onChange={(e)=> handleChange(e, setPercent)}/>
          <div className="ui label">
          %
          </div>
         
        </div>
      </div>
      </div>
      <div className="field">
          <label>목표점수</label>
          <div className="ui labeled input">
          <input placeholder="100점 기준 원하는 점수" type="text" value={want} onChange={(e)=> handleChange(e, setWant)}/>
          <div className="ui label">
          점
          </div>
          </div>
          </div>
    </div>
    <div className="ui segment">
      <div className="ui container center aligned">
        <h2>
        {
          myScore > percent ? '입력하신 수행평가 점수가 수행평가 반영 퍼센트보다 큽니다.' :
          percent > 100 ? '입력하신 수행평가 반영 퍼센트가 100%보다 큽니다.' :
          want > 100 ? '입력하신 목표 점수가 100점보다 큽니다.' :
          isNaN(myScore) || isNaN(percent) || isNaN(want) ? '입력하신 값중 숫자가 아닌값이 있습니다.' :
          (want - myScore) * (100/(100-percent)) > 100 ? '아쉽지만 목표점수에 도달할 수 없어요' :
          (
          <>
          <span style={{ color: 'red' }}>{want}</span>점 이상 받으시려면 <span style={{ color: 'red' }}>{(want - myScore) * (100/(100-percent))}</span>점이여야합니다!</>
          )
        }
        </h2>
      </div>
    </div>
    </div>
  );
}

export default App;
