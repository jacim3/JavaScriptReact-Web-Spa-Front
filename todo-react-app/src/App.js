import React from "react";
import './App.css';
import {Paper, List} from "@material-ui/core";
import Todo from './Todo';

/*
function App() {
    // JSX 문법 : 자바스크립트 파일 내에 HTML 사용 가능.
    // 렌더링 부분인 HTML과 로직 부분인 자바스크립트를 포함하는 JSX를 리턴

    // 자바스크립트에선 상수형 변수 선언
    const props = {
            item: {jd: 0, title: "Hello World 34", done: false}
        };

    return (
        // props.item 을 item이라는 키를 가진 딕셔너리로 보낸다.
        <div className={"App"}>
            <Todo item={props.item}/>
        </div>
    );
}
*/

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id:0, title:"Hello World 1", done:true
                },
                {
                    id:1, title:"Hello World 2", done:false
                },
            ]
        };
    }

    render() {
        // map을 통하여 주어진 배열에 대하여 재로운 조건으로 다시 가공.
        // 이렇게 배열 형태로서 처리된 Todo 객체를 병렬처리를 통하여 수행....????
    /*      let todoItems = this.state.items.map((item, idx) => (
                <Todo item = {item} key={item.id}/>
            )
        )
    */
        let todoItems = (
            <Paper style={{margin:16}}>
                <List>
                    {this.state.item.map((item, idx) => (
                        <Todo item={item} key={item.id}/>
                    ))}
                </List>

            </Paper>
        )
        return (
            <div className={"App"}>{todoItems}</div>
        );
    }
}

// 다른 컴포넌트에서 App이란 컴포넌트를 사용할 수 있도록 지정.
export default App;
