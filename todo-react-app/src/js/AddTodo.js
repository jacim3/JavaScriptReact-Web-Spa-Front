import React from "react";
import {TextField, Paper, Button, Grid} from "@material-ui/core";
import {call} from "../service/ApiService";

// input, 버튼으로 구성. 리스트 추가 로직 수행.
class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        // 사용자가 입력한 데이터를 임시 저장하기 위하여 초기화.
        this.state = {item: {title: ""}}
        this.add = props.add;
    }

    // onChange 메서드에 연결하여, 실시간으로 변경사항을 읽어온다.
    // 수정사항에 대해 UI 업데이트 수행.
    onInputChange = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        console.log(thisItem)
        call('/todo',"PUT", thisItem).then(request => {
            console.log(request)
            this.setState({item:thisItem});
        })

        console.log(thisItem)
    }

    onButtonClick = () => {
        this.add(this.state.item);
        this.setState({item: {title:""}})
    }

    enterKeyEventHandler = (e) => {
        if (e.key === 'Enter') {
            this.onButtonClick();
        }
    }

    render() {
        return (
            <Paper style={{margin: 16, padding: 16}}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{paddingRight: 16}}>
                        <TextField placeholder={"Add Todo Here"} fullWidth onChange={this.onInputChange} value={this.state.item.title} onKeyPress={this.enterKeyEventHandler}/>
                    </Grid>

                    <Grid xs={1} md={1} item>
                        <Button fullWidth color={"secondary"} variant={"outlined"} onClick={this.onButtonClick}>
                            +
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

export default AddTodo;