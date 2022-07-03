<br/>

# Triple _ Frontend Homework \#3


#### 🪡  Developed By _"FE Developer 박성현"_

<br/>
<br/>

  
  <div align="center">
    <img src="https://play-lh.googleusercontent.com/iGYo5pucLuqcD8eptVjjWwiilKXbd0FiIE-dMO0l9185DaL1lEfbSNJbJBfJm53q25c" alt="spark's Draggable GIF"/>
  
  </div>
</div>

<br/>
<br/>

## 📜 How To Start

##### [OneLine Command] 
<br/>
(아래의 command line 을 복사하여 터미널에서 실행하고, 브라우저의 "localhost:3000"으로 접근하세요.)

```
git clone https://github.com/Hyunja27/triple_FrontEnd_2022.git && cd triple_FrontEnd_2022 && cd tripleHomeWork3 && npm i && npm run dev

```

##### [설치 및 실행방법] 

1. 해당 레포지토리를 클론합니다.

```
git clone https://github.com/Hyunja27/triple_FrontEnd_2022.git
```

2. 프로젝트 폴더에 접근하고, 필요한 패키지를 설치합니다.

```
cd triple_FrontEnd_2022 && cd tripleHomeWork3 && npm i
```

3. 개발 모드를 사용하여 구동합니다.

```
npm run dev
```

4. 브라우저의 "localhost:3000" 으로 접근하여 확인합니다. 

<br/>
<br/>
<br/>


## 🧰 Tech Set & reason

#### Core :   React, typeScript <br/>
#### stateControl :   React Hooks <br/>
#### style :   Stitches <br/>
<br/>
<br/>

#### 🙋‍♂️ Why React Hooks?
=> 과제의 제시내용 상, 특정 상황에 따른 변화 가능성이나 재사용이 예상되지 않았어요. <br/>
Redux 등의 상태관리 라이브러리를 사용하는 것보다, React Hook을 사용하는 것이 더 편리하다고 생각했습니다. <br/> 
<br/>

#### 🙋‍ Why Stitches? 
=> 카운터 애니메이션의 리렌더링이 빈번히 일어나기에, css-in-css 로 작업을 고려했지만, <br/> 
과제에서 주어진 카운터 애니메이션의 수준은 용인할 만한 정도라고 생각되었어요. <br/> 
그보다는 작업 편의성 & 가독성에 더 중점을 두고 싶었습니다.<br/>
그래서, 각 기능 단위의 디자인을 세부적으로 컨트롤하기 위해 css-in-js 라이브러리인 stitches 를 사용했습니다. <br/>
<br/>

#### 🙋‍ Why TypeScript? 
=> 런타임 전에 타입에러를 잡아줄 수 있어 편리할 뿐만 아니라, 개발자에게 더 많은 생각을 하며 코드를 짜도록 해준다고 생각해요 <br/> 
그로 인해, 훨씬 더 안정성 있게 데이터를 주고받을 수 있도록 만들어준다고 생각합니다. <br/> 
<br/>






<br/>
<br/>
<br/>


## 🗺️ Record of Think
  
  1. triple 메인 사이트의 레이아웃에 대해 고찰해보았습니다.
  - 메인 사이트의 화면을 줄이니, static section의 왼쪽 Logo 부분이 상단으로 재배치되면서 반응형 배치로 바뀌는 것을 관찰했어요.
  - Logo 컴포넌트의 'absolute' 배치가 소거되면서 상단으로 재배치 & 크기조정 되는 반응형 화면 구조를 적용할지 고민했어요.
  - 반응형 디자인은 과제의 요구사항이 아니기에 반응형 로직을 만들지는 않았지만, 반응형을 고려한 사전 배치에 대해 고찰해보았습니다. 
  
  2. Counter 애니메이션에 대해 고민했습니다.
  - 따로 Branch를 두고, 이에 대한 구현 작업에 집중하였어요.
  - 라이브러리를 사용한 구현방안이 가장 효율적이였지만, 요건에 맞는 컴포넌트를 만들기 위해 해당 방안은 선택하지 않았어요.
  - 처음에는 querySelector를 이용하여 DOM을 선택하는 방식으로 구현하였으나, Hook을 통하여 더 React에 맞는 방법으로 변경했어요.
  
  3. static section에서의 재사용성에 대해 고민했어요.
  - 다양한 단위와 값을 받을 수 있게 만들고 싶었어요. 더불어 Single 단위로 컴포넌트를 분리해서, 표현할 정보 개수를 변경할 수 있게 만들었어요.

<br/>
<br/>
<br/>

## ❗️ Notice
