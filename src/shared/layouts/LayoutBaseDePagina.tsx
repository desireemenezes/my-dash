import { Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { ReactNode } from 'react';

interface ILayoutBaseDePaginaProps {
 children : ReactNode
}
export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ children }) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const theme = useTheme();

  return (
    <Box width="95%"
     margin="0 auto"
     height="100%"
     display="flex"
     flexDirection="column" 
     paddingTop="20px"
    >
      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};