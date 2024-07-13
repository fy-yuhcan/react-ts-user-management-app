import { Center, Spinner, Wrap, WrapItem, useDisclosure } from '@chakra-ui/react';
import { VFC, memo, useCallback, useEffect } from 'react';
import { UserCard } from '../organisms/user/UserCard';
import { useAllUsers } from '../../hooks/useAllUsers';
import { UserDetailModal } from '../organisms/user/UserDetailModal';
import { useSelectUser } from '../../hooks/useSelectUsers'; // 正しいインポートパス
import { useLoginUser } from '../../hooks/useLoginUser';

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const onClickUser = useCallback((id: number) => {
    onSelectUser({ id, users ,onOpen});
    onOpen();
  }, [users, onSelectUser, onOpen]);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard 
                id={user.id}
                onClick={onClickUser}
                imageUrl='https://picsum.photos/800' 
                userName={user.username} 
                fullName={user.name} 
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} isAdmin={loginUser?.isAdmin} />
    </>
  );
});

