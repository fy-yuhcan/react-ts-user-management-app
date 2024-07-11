import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react"
import {memo,useCallback,VFC} from "react"
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { useNavigate } from "react-router-dom";


export const Header: VFC = memo(()=>{
    const {isOpen,onOpen,onClose} =useDisclosure();
    const navigate= useNavigate();
    const onClickHome = useCallback(()=>{
        navigate("/home")
    },[navigate])
    const onClickUser = useCallback(()=>{
        navigate("/home/user_management")
    },[navigate])
    const onClickSetting = useCallback(()=>{
        navigate("/home/setting")
    },[navigate])
    return (
        <>
        <Flex as="nav" bg="teal.500" color="gray.50" align="center" justify="space-between" padding={{base: 3,md: 5}}>
            <Flex align="center" as="a" mr={8} _hover={{cursor: "pointer"}} onClick={onClickHome} >
            <Heading as="h1" fontSize={{base: "md",md: "lg"}}>
                ユーザー管理アプリ
            </Heading>
            </Flex>
            <Flex align="center" fontSize="sm" flexGrow={2} display={{base: "none",md: "flex"}}>
                <Box pr={4}>
                <Link onClick={onClickUser}>ユーザー一覧</Link>
                <Link onClick={onClickSetting}>設定</Link>
                </Box>
            </Flex>
            <MenuIconButton onOpen={onOpen}/>
        </Flex>
        <MenuDrawer onClose={onClose} isOpen={isOpen} onClickHome={onClickHome} onClickUser={onClickUser} onClickSetting={onClickSetting}/>
        </>
    )
})