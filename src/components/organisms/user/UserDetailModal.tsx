import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, } from '@chakra-ui/react';
import { ChangeEvent, VFC, memo, useEffect, useState } from 'react';
import { User } from '../../../types/api/user';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';

type Props = {
    user: User | null;
    isOpen: boolean;
    isAdmin?: boolean;
    onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
    const { user, isOpen, isAdmin = false, onClose } = props;
    const [username,setUsername] = useState('');
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');

    useEffect(()=>{
        setUsername(user?.username ?? '')
        setName(user?.name ?? '')
        setEmail(user?.email ?? '')
        setPhone(user?.phone ?? '')
    },[user])

    const onClickUpdate = () => {
        alert("更新ボタンがクリックされました");
    };
    const onchangeUsername=(e: ChangeEvent<HTMLInputElement>) =>setUsername(e.target.value);
    const onchangeName=(e: ChangeEvent<HTMLInputElement>) =>setName(e.target.value);
    const onchangeEmail=(e: ChangeEvent<HTMLInputElement>) =>setEmail(e.target.value);
    const onchangePhone=(e: ChangeEvent<HTMLInputElement>) =>setPhone(e.target.value);
    return (
        <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom'>
            <ModalOverlay>
                <ModalContent pb={6}>
                    <ModalHeader>ユーザー詳細</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody margin={4}>
                        <Stack spacing={4}>
                            <FormControl>
                                <FormLabel>名前</FormLabel>
                                <Input value={username || ""} onChange={onchangeUsername} isReadOnly={!isAdmin} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>フルネーム</FormLabel>
                                <Input value={name || ""} onChange={onchangeName} isReadOnly={!isAdmin} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>メール</FormLabel>
                                <Input value={email || ""} onChange={onchangeEmail} isReadOnly={!isAdmin} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>電話番号</FormLabel>
                                <Input value={phone || ""} onChange={onchangePhone} isReadOnly={!isAdmin} />
                            </FormControl>
                        </Stack>
                    </ModalBody>
                    {isAdmin && (
                        <ModalFooter>
                            <PrimaryButton onClick={onClickUpdate}>
                                更新
                            </PrimaryButton>
                        </ModalFooter>
                    )}
                </ModalContent>
            </ModalOverlay>
        </Modal>
    );
});
