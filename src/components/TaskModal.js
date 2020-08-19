import React, { useState } from 'react';
import { Modal, Form, Input, Row, Col, Space, Button} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const TaskModal = (props) => {
    const [visible, setModalOpen] = useState(false);
    const [newInput, setNewInput] = useState(null);

    const [form] = Form.useForm();

    const addTask = () => {
        props.onSubmit(newInput);
        closeModal();
    }

    const openModal = () => {
        setNewInput(null);
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
        form.resetFields();
    }


    return (
        <>
            <Button type='default' style={{color: '#5b8c00'}} icon={<PlusOutlined />} size={'small'} onClick={openModal}>Add task</Button>
            <Modal 
                visible={visible}
                onCancel={closeModal}
                footer={null}>
                    <Row>
                        <Col span={20}>
                            <Form form={form}>
                                <Form.Item name='textInput'>
                                    <Input placeholder='Task' id='task-input' name='item' onChange={e => setNewInput(e.target.value)} />
                                </Form.Item>
                                <Form.Item name='buttons'>
                                    <Space>
                                        <Button type="default" style={{color: '#5b8c00'}} htmlType="cancel" onClick={closeModal}>
                                            Cancel
                                        </Button>
                                        <Button type="primary" style={{background: '#5b8c00'}} htmlType="submit" onClick={addTask}>
                                            Add Task
                                        </Button>
                                    </Space>                          
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
            </Modal>
        </>
    )
}

export default TaskModal;