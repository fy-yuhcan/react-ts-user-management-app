import {  Wrap, WrapItem } from '@chakra-ui/react';
import { VFC, memo } from 'react';
import { UserCard } from '../organisms/user/UserCard';

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{base:4,md:10}}>
    {[...Array(10)].map(()=>(
      <WrapItem>
        <UserCard imageUrl='https://picsum.photos/800' userName='あんぱん' fullName='annpann'></UserCard>
      </WrapItem>
      ))}
    </Wrap>
  )
});
