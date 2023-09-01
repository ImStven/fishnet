import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
  {
    routeLink: 'welcome',
    icon: 'fal fa-home',
    label: 'Bienvenido'
  },
  {
    routeLink: 'unidad',
    icon: 'fa fa-product-hunt',
    label: 'Unidad Productiva',
    items: [
      {
        routeLink: 'unidad/consultarcos',
        label: 'Consultar'
        },
      {
      routeLink: 'unidad/registropes',
      label: 'Registro de Pesca'
      },
      {
        routeLink: 'unidad/crear-unidad',
        label: 'Crear Centro de Costo'
        }
    ]
  },
  {
    routeLink: 'inventario',
    icon: 'fa-solid fa-boxes-stacked',
    label: 'Inventario de Alimento',
    items:[
      {
        routeLink: 'inventario/informe',
        label: 'Informe de entrada y salida'
      },
      {
        routeLink: 'inventario/registrar-entrada',
        label: 'Registrar Entrada'
      },
      {
        routeLink: 'inventario/registrar-salida',
        label: 'Registrar Salida'
      },
    ]
  }

];
