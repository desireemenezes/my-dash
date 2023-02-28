import { LayoutBaseDePagina } from '../../shared/layouts';
import { BarraDeFerramentas } from './../../shared/components/barra-ferramentas/BarraFerramentas';


export const Dashboard = () => {

  return (
    <LayoutBaseDePagina
      titulo='Página inicial'
      barraDeFerramentas={(
        <BarraDeFerramentas
          mostrarInputBusca
          textoBotaoNovo='Nova'
        />
      )}
  >      Testando
    </LayoutBaseDePagina>
  );
};