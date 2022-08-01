import { IGateway } from '@/types'

export const MOCK_GATEWAYS: IGateway[] = [
  {
    gatewayId: 'i6ssp',
    userIds: ['rahej'],
    name: 'Gateway 1',
    type: 'Stripe',
    apiKey: 'sk_test_6eC49HqLyjWDarjtT1zdp7dc',
    secondaryApiKey: '',
    description:
      'Sit amet luctus venenatis lectus magna fringilla urna porttitor.'
  },
  {
    gatewayId: 'GzFF8',
    userIds: ['rahej'],
    name: 'Gateway 2',
    type: 'Stripe',
    apiKey: 'sk_test_6eC49HqLyVsDarUjT1zdp2hz',
    secondaryApiKey: '',
    description:
      'Pulvinar elementum integer enim neque volutpat ac tincidunt vitae.'
  }
]
