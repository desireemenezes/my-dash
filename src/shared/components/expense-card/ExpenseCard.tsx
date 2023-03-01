import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

import { CardActionArea} from '@mui/material';

export const MultiActionAreaCard = () => {
  return (
    <Card sx={{ width: '14rem' , borderRadius: '15px'}}>
      <CardActionArea sx={{  display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center'}}>
        <LocalAtmIcon color='primary' sx={{ fontSize: 50 }}/>
        <CardContent>
          <Typography gutterBottom variant="h4"  fontWeight="500">
            1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Despesas
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

