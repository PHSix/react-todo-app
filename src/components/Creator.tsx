import { Button, Checkbox, FormControl, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import type { TodoItemType } from '@/globalTypes'

interface Props {
  onAppend?: (item: TodoItemType) => void
}

/**
 * creator for todo item
 */
export default function Creator(props: Props) {
  const [content, setContent] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  function submit() {
    const createdTime = Date.now()
    const id = crypto.randomUUID()
    const newItem: TodoItemType = {
      id,
      createdTime,
      content,
      completed: false,
    }
    props.onAppend?.(newItem)
    onClose()
  }

  function onEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key.toUpperCase() !== 'ENTER' || content.length === 0)
      return

    submit()
  }

  return (
    <>
      <div className="p-4 border-[1px] rounded cursor-pointer w-full flex gap-4 flex-row" onClick={onOpen}>
        <Checkbox checked={false}></Checkbox>
        <div>Create a new todo</div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>

        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input
                placeholder="Write something about this todo"
                value={content}
                onChange={e => setContent(e.target.value)}
                onKeyDown={onEnter}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              mr={3}
              colorScheme="blue"
              isDisabled={content.length === 0}
              onClick={() => submit()}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>

      </Modal>
    </>

  )
}
