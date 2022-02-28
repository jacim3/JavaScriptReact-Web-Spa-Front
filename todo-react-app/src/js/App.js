import React from "react";
import '../css/App.css';
import {Paper, List, Container} from "@material-ui/core";
import Todo from './Todo';
import AddTodo from './AddTodo';

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

class App extends React.Component {

    // 생성자
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    // 로직
    add = (item) => {
        const thisItems = this.state.items;
        item.id = "ID-"+thisItems.length;
        item.done = false;
        thisItems.push(item);
        this.setState({items: thisItems});
        console.log("items : ", this.state.items);
    }

    delete = (item) => {
        const thisItems = this.state.items;
        console.log("Before Update Items : ", this.state.items)
        // filter를 통하여 해당 조건에 맞는 요소만 필터링 하고 나머지는 버린다.
        const newItems = thisItems.filter(e=> e.id !== item.id);
        // setState()를 통하여 변경점을 저장하고 실시간 UI 업데이트 수행.
        this.setState({items:newItems}, () => {
            console.log("Update Items : ", this.state.items)
        });
    }

    // 렌더
    render() {
        // map을 통하여 주어진 배열에 대하여 재로운 조건으로 다시 가공.
        // 이렇게 배열 형태로서 처리된 Todo 객체를 병렬처리를 통하여 수행....????
        let todoItems = this.state.items.length > 0 &&(
            <Paper style={{margin: 16}}>
                <List>
                    {this.state.items.map((item, idx) => (
                        <Todo item={item} key={item.id} delete={this.delete}/>
                    ))}
                </List>
            </Paper>
        )

        return (
            <div className={"App"}>
                <Container maxWidth={"md"}>
                    <AddTodo add = {this.add}/>
                    <div className={"TodoList"}>{todoItems}</div>
                </Container>
            </div>
        );
    }
}

// 다른 컴포넌트에서 App이란 컴포넌트를 사용할 수 있도록 지정.
export default App;
