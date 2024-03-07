# React.js

**Core Comcepts**

- Components
- JSX
- Props
- State

**JSX(JavaScript Syntax eXtension)**

- 자바스크립트 확장 문법
- 컴포넌트 트리 구성 후 DOM 제어
- js안에 HTML 마크업 코드 작성
- 브라우저에서 사용 불가능하기 때문에 개발 서버에서 브라우저에서 사용 가능한 코드로 변환

```jsx
import App from ‘./App.jsx’; //.jsx 확장자 사용 시
import App from './App' //.js 확장자 사용 시 
```

- return문 내에선 오직 하나의 parent element만 필요 (js에서 두 개 이상의 값 return 불가능하기 때문)

```jsx
return ( // parent element가 2개이기 때문에 오류 발생
	<div> 
	</div>
	<Header />
);

return ( // 의미 없는 <div> 발생
	<div>
		<Header /> 
	</div>
);
```

- Fragment: 위 상황 해결

```jsx
// Method 1
return (
	<Fragment>
		<Header />
	</Fragment>
);

// Method 2
return (
	<>
		<Header />
	</>
); 
```

**Component**

- js에서 함수와 동일
- 첫글자 대문자 사용 (내장 컴포넌트와 구분)
- return값 존재
- 커스텀 컴포넌트는 항상 내장 컴포넌트로 감싸져야 함

**이미지 파일 로딩**

- `<img src=””>` 방식은 배포 시 유실 가능성

```jsx
import reactImg from './assets/react-core-concepts.png';
```

**Props**

- 매개변수 1개만 사용 가능

```jsx
function func(props) {// {title, description, image}로 대체 가능, 대신 변수명 동일해야 함
	return (
		<h3>{props.title}<h3/>
		<p>{props.description}<p/>
	);
}

function App() {
	return (
		<func title="This is title." description="This is description.">
	);
}
```

- children props: 열림과 닫힘 태그 사이의 내용을 전달할 때 사용

```jsx
 function TabButton(props) {
	return <button>{props.children}</button>
}

<TabButton>Components</TabButton>
```

**Event**

- 함수 이름: 이벤트 + Handler
    - ex) clickHandler()

```jsx
export default function TabButton({ children }) {
    function handleClick() {
        console.log('Hello World!');
    }

    return (
				// handleClick 뒤에 괄호 XX
				// 괄호 있으면 handleClick 함수가 바로 실행
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    );
}
```

- 이벤트 함수에 커스텀 인자 전달: 화살표 함수 사용

```jsx
<TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
```

**State & Hook**

- 일반 변수만 사용 시 UI가 업데이트 되지 않는 문제점 해결
1. 항상 함수 내부에서 사용
2. 항상 컴포넌트 함수의 최상위에서만 호출 (nested function에선 사용 불가능)

**useState**

```jsx
function App() {
	const [value, setValue] = useState(0);
	
	return (<div></div>);
}
```

- setValue 호출 시 이를 포함하고 있는 컴포넌트 함수인 App()이 재실행 됨

**map()**

- key prop: 배열 내의 모든 자녀는 고유한 key값을 가져야 함

```jsx
<ul>
	list.map((item) => (
		<Component key={item.title} {...item} />
	))
</ul>
```

**forwarded props(=proxy props)**

wrapper component

**Spread Operator (…props)**

```jsx
export default function TabButton({ children, isSelected, ...props }) {
		// ...props: 앞에 기재한 props 제외 나머지 props 모두 묶음
    console.log('TABBUTTON COMPONENT EXECUTING');
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} {...props}>
						{/* ...props: 묶은 props 펼침 */}
                {children}
            </button>
        </li>
    );
}
```