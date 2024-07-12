import {  FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, } from '@chakra-ui/react';
import { VFC, memo } from 'react';

type Props={
    isOpen: boolean;
    onClose: ()=>void;
}

export const UserDerailModal: VFC<Props> = memo((props) => {
    const {isOpen,onClose} =props
    return (
        <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom'>
        <ModalOverlay>
          <ModalContent pb={6}>
            <ModalHeader>ユーザー詳細</ModalHeader>
            <ModalCloseButton></ModalCloseButton>
            <ModalBody margin={4}>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>名前</FormLabel>
                  <Input value="あああ" isReadOnly></Input>
                </FormControl>
                <FormControl>
                  <FormLabel>フルネーム</FormLabel>
                  <Input value="あああ" isReadOnly></Input>
                </FormControl>
                <FormControl>
                  <FormLabel>メール</FormLabel>
                  <Input value="あああ" isReadOnly></Input>
                </FormControl>
                <FormControl>
                  <FormLabel>電話番号</FormLabel>
                  <Input value="あああ" isReadOnly></Input>
                </FormControl>
              </Stack>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    );
});