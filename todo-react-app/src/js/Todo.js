import React from "react";
import {ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton} from "@material-ui/core";
import {DeleteOutlined} from "@material-ui/icons";

// 리스트를 출력하므로 이에 대한 변경로직 수행.
class Todo extends React.Component {

    constructor(props) {
        // super() 를 통하여 props의 초기화
        super(props);
        // state 변수를 item (props.item) 으로 초기화
        // state는 리액트에서 관리하는 객체로서, 추후 변경이 될 수 있는 변수를 다시 html에 렌더링 하기 위하여 여기에 보관한다.
        this.state = {item: props.item, readOnly:true};
        this.delete = props.delete;
    }

    // 상위 컴포넌트(App.js)로 부터 받아온 데이터 및 함수를 통하여 하위 컴포넌트가 로직을 수행하기 위해서는,
    // 해당 계층에서 설계할 수 있는 로직을 최대한 알맞게 설계해야 한다.
    deleteEventHandler = () => {
        this.delete(this.props.item)
    }

    offReadOnlyMode = () => {
        console.log('Event!', this.state.readOnly);
        this.setState({readOnly: false}, () => {
            console.log("ReadOnly? ", this.state.readOnly);
        })
    }

    enterKeyEventHandler = (e) => {
        if (e.key === "Enter") {
            console.log('Event!', this.state.readOnly);
            this.setState({readOnly:true}, () => {
                console.log("ReadOnly? ", this.state.readOnly);
            })
        }
    }

    // 이미 값이 입력된 요소 태그의 경우, 변화가 생길 때, 이를 감지하여 이벤트룰 수행하기 위해 onChange 속성을 사용해야한다 !!!
    editEventHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({ item:thisItem})
    }

    checkEventHandler = (e) => {
        const thisItem = this.state.item;
        console.log("Check Event : ", thisItem.done);
        e.target.checked ? thisItem.done = true : thisItem.done = false
        this.setState({item:thisItem});
        console.log("Check Event : ", thisItem.done);
    }

    render() {
        const item = this.state.item;
        return (
            <ListItem>
                <Checkbox checked={item.done} onChange={this.checkEventHandler}/>
                <ListItemText>
                    <InputBase
                        inputProps={{"aria-label": "naked"}}
                        type="text"
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        onChange={this.editEventHandler}
                        multiline={true}
                        fullWidth={true}
                        onClick={this.offReadOnlyMode}
                        onKeyPress={this.enterKeyEventHandler}
                        readOnly={this.state.readOnly}
                    />
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label={"Delete Todo"} onClick={this.deleteEventHandler}>
                        <DeleteOutlined/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            /*          <div className={"Todo"}>
                          <input
                            type={"checkbox"}
                            id={this.state.item.id}
                            name={this.state.item.id}
                            checked={this.state.item.done}
                          />
                          <label id={this.state.item.id}>{this.state.item.title} ></label>
                      </div>*/
        );
    }
}

export default Todo;