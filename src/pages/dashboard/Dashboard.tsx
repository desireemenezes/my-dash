import { LayoutBaseDePagina } from '../../shared/layouts';
import { BarraDeFerramentas } from '../../shared/components/ferramentas-de-listagem/FerramentasDeListagem';


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