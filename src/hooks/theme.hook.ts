import { useMediaQuery } from '@mui/material';

const useAppTheme = (): {
  isMobile: boolean;
} => {
  const isMobile = useMediaQuery('(max-width:550px)');

  return {
    isMobile,
  };
};

export default useAppTheme;
