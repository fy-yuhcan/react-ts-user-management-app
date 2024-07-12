import { Center, Spinner,  Wrap, WrapItem, useDisclosure } from '@chakra-ui/react';
import { VFC, memo, useCallback, useEffect } from 'react';
import { UserCard } from '../organisms/user/UserCard';
import { useAllUsers } from '../../hooks/useAllUsers';
import { UserDerailModal } from '../organisms/user/UserDetailModal';

export const UserManagement: VFC = memo(() => {
  const {isOpen,onOpen,onClose} = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => {
    getUsers();
  }, [getUsers]);
  const onClickUser = useCallback(() => {
    onOpen()
  },[])

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
                onClick={onClickUser}
                imageUrl='https://picsum.photos/800' 
                userName={user.username} 
                fullName={user.name} 
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDerailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
