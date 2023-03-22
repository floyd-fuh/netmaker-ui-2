import { Network } from '@/models/Network';
import { Host } from '../models/Host';
import { AppRoutes } from '../routes';

// Get host route from host obj or ID
export function getHostRoute(hostOrId: Host | Host['id']): string {
  const placeholder = ':hostId';
  if (typeof hostOrId === 'string') return `${AppRoutes.HOST_ROUTE.replace(placeholder, hostOrId)}`;
  return `${AppRoutes.HOST_ROUTE.replace(placeholder, hostOrId.id)}`;
}

// Get network route from network obj or ID
export function getNetworkRoute(networkOrId: Network | Network['netid']): string {
  const placeholder = ':networkId';
  if (typeof networkOrId === 'string') return `${AppRoutes.NETWORK_DETAILS_ROUTE.replace(placeholder, networkOrId)}`;
  return `${AppRoutes.NETWORK_DETAILS_ROUTE.replace(placeholder, networkOrId.netid)}`;
}
