import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';


const orders: Order[] = [
  {
    '_id': '63c20d1a2d3a0ce631e4d191',
    'table': '7',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza 4 queijos',
          'imagePath': '1668735124830-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 1,
        '_id': '6376e09495fa0a083b9e49d5'
      },
      {
        'product': {
          'name': 'Coca Cola',
          'imagePath': '1668777130136-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '637784aaaa5b0b3c3fa17b6e'
      }
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="⏰"
        title="Fila de Espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👩‍🍳"
        title="Em preparação"
        orders={[]}

      />
      <OrdersBoard

        icon="✅"
        title="Pronto!"
        orders={[]}

      />
    </Container>

  );
}
