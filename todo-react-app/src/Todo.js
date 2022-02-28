import React from "react";
import {ListItem, ListItemText, InputBase, Checkbox} from "@material-ui/core";

// 클래스 방식에서 사용하는 문법
class Todo extends React.Component {

    constructor(props) {
        // super() 를 통하여 props의 초기화
        super(props);
        // state 변수를 item (props.item) 으로 초기화
        // state는 리액트에서 관리하는 객체로서, 추후 변경이 될 수 있는 변수를 다시 html에 렌더링 하기 위하여 여기에 보관한다.
        this.state = {item:props.item};
    }

    render() {
        const item = this.state.item;
        return (
            <ListItem>
                <Checkbox checked={item.done}/>
                <ListItemText>
                    <InputBase
                        inputProps={{"aria-label":"naked"}}
                        type="text"
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                    />
                </ListItemText>
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