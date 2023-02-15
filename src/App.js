import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <h1>포트폴리오 작성 목록 정리</h1>
        <ul>
          <li>컨셉 구상</li>
          <li>인트로 구현</li>
          <li>반응형 구현(pc, tablet, mobile 호환)</li>
          <li>헤더 구현</li>
          <li>메인 구현</li>
          <li>내용 작성</li>
          <li>데코레이션</li>
          <li>프로젝트 추가</li>
        </ul>
      </div>
    );
  }
}

export default App;
