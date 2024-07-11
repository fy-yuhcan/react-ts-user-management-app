import { Button } from '@chakra-ui/react';
import { ReactNode, VFC, memo } from 'react';

type Props = {
    children: ReactNode;
    disabled?: boolean;
    loading?: boolean;
    onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
    const { children, onClick, disabled = false, loading = false } = props;
    return (
        <Button 
            bg="teal.400" 
            color="white" 
            _hover={{ opacity: 0.8 }} 
            onClick={onClick} 
            isLoading={loading} 
            isDisabled={disabled || loading}
        >
            {children}
        </Button>
    );
});
