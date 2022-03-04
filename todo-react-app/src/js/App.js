import React from "react";
import '../css/App.css';
import {Paper, List, Container} from "@material-ui/core";
import Todo from './Todo';
import AddTodo from './AddTodo';
import {call} from "../service/ApiService";

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

    // HTTP 응답 코드 (200 : 성공적, 400 : 해당 리소스가 존재하지 않음, 403 : 송신자에게 해당 리소스 접근 권한이 없음, 500 : 서버의 에러로 요청을 처리할 수 없음.)
    // fetch api를 통한, 백엔드로 부터 Api 요청
    // CORS (Cross Oriign Resource Sharing) : 처음 리소스를 제공한 도메인(localhost:3000)이
    // 현재 요청하려는 도메인(localhost:8080)과 다르더라도 요청을 허락해 주는 웹 보안 방침.
    // 브라우저는 기본적으로 2개의 요청을 보내며, 첫 번째 요청인 OPTIONS 메서드의 요청은 목표 리소스에 대하여, 어떤 HTTP 메서드를 사용할 수
    // 있는지 확인하기 위하여. 두 번째 요청은 첫 번째 OPTIONS 요청이 반환됨에 따라 CORS, GET 사용 여부에 따라 두 번째인 원래 요청을 보내게 됨.
    componentDidMount = () => {

        call("/todo", "GET", null).then((response) => {
            console.log(response)
            this.setState({items: response.data})
        })
    }

    // 로직
    add = (item) => {
        item.done = false;
        call("/todo", "POST", item).then(response => {
            this.setState({items: response.data})
        })
    }


    delete = (item) => {
        /*        const thisItems = this.state.items;
                console.log("Before Update Items : ", this.state.items)
                // filter를 통하여 해당 조건에 맞는 요소만 필터링 하고 나머지는 버린다.
                const newItems = thisItems.filter(e => e.id !== item.id);
                // setState()를 통하여 변경점을 저장하고 실시간 UI 업데이트 수행.
                this.setState({items: newItems}, () => {
                    console.log("Update Items : ", this.state.items)
                });*/

        call("/todo", "DELETE", item).then((response) => {
            this.setState({items: response.data})
        });
    }

// 렌더
    render() {
        // map을 통하여 주어진 배열에 대하여 재로운 조건으로 다시 가공.
        // 이렇게 배열 형태로서 처리된 Todo 객체를 병렬처리를 통하여 수행....????
        let todoItems = this.state.items.length > 0 && (
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
                    <AddTodo add={this.add}/>
                    <div className={"TodoList"}>{todoItems}</div>
                </Container>
            </div>
        );
    }
}

// 다른 컴포넌트에서 App이란 컴포넌트를 사용할 수 있도록 지정.
export default App;
