import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, FormGroup, Form } from 'reactstrap';

export default function CreateTaskModal({ open, setOpen, createTask = () => {} }) {
  const [task, setTask] = useState("");
  const toggle = () => setOpen(!open);

  function handleSave() {
    createTask(task);
    toggle();
  }

  return (
    <div>
      <Modal isOpen={open} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create New Task</ModalHeader>
        <ModalBody>
            <Form>
                <FormGroup>
                <Label for="exampleEmail">
                    Task Name
                </Label>
                <Input
                    id="title"
                    name="title"
                    placeholder="task title"
                    type="text"
                    onChange={(e) => setTask(e.target.value)}
                />
                </FormGroup>
            </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Save
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

CreateTaskModal.propTypes = {
    open: PropTypes.object,
    setOpen: PropTypes.func,
    createTask: PropTypes.func,
};