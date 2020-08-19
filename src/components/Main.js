import React, { useState } from 'react';
import { Checkbox, Layout, Card, Button, Row, Col, Switch, Tooltip} from 'antd';
import TaskModal from './TaskModal.js';
import { CloseOutlined } from '@ant-design/icons';

const Main = (props) => {
    const [todos, changeToDo] = useState([]);
    const [toggleText, setToggleText] = useState("Hide Checked");
    const [showChecked, setShowChecked] = useState(true);
    const [checkedTodos, setCheckedTodos] = useState([]);

    const { Header, Content } = Layout;
    
    const handleAdd = (todo) => {
        let key = new Date().getTime();
        changeToDo([...todos, {key: key, text: todo, checked: false}]);
    }
    const handleRemove = (item) => {
        changeToDo(todos.filter(each => each.key !== item.key));
    }
    const switchDisplay = () => {
        //changes state before update, so showChecked will evaluate to true, though we want it to be false in this case
        if(showChecked === true) {
            setCheckedTodos(todos.filter(todo => todo.checked === true));
            changeToDo(todos.filter(todo => todo.checked === false));
        } else {
            changeToDo([...todos, ...checkedTodos]);
            setCheckedTodos([]);
        }
        setShowChecked(!showChecked);
        setToggleText(toggleText === "Hide Checked" ? "Show Checked" : "Hide Checked");
    }

    const setCheckedValue = (item) => {
        let checked = item.checked === true ? false : true;
        changeToDo(todos.map(todo => {
            if(todo.key === item.key) {
                return ({key: todo.key, text: todo.text, checked: checked});
            } else {
                return todo;
            }
        }));
    }
    
    return (
        <Layout className='layout'>
            <Header>
                <div className='head'>Your To Do List!</div>
            </Header>
            <Content>
                <div className='content'>
                    <Row style={{justifyContent: "center"}}>
                        <Col>
                            <div className="site-card-border-less-wrapper">
                                <Card bordered={false} style={{ width: 300 }} className='card'>
                                    <div style={{textAlign: "center", margin: "10px"}} >
                                        <p>{toggleText}</p>
                                        <Switch checked={showChecked} onChange={switchDisplay} style={{background: '#5b8c00'}}>Hide checked</Switch>
                                    </div>
                                    <ul style={{listStyleType: 'none'}}>
                                        {todos.map(item => {
                                            return (
                                                <li key={item.key}>
                                                    <Checkbox className='ant-checkbox' checked={item.checked} onChange={() => setCheckedValue(item)}>
                                                        {item.text}
                                                        <Tooltip title='Remove list item'>
                                                            <Button 
                                                                type='text' 
                                                                icon={<CloseOutlined style={{color: 'red'}} />} 
                                                                size='small' 
                                                                onClick={() => handleRemove(item)} />
                                                        </Tooltip>
                                                    </Checkbox>
                                                    <br />                    
                                                </li>
                                            )}
                                        )}
                                    </ul>
                                    <br />
                                    <TaskModal onSubmit={handleAdd}/>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Content>
        </Layout>
    )
}

export default Main;