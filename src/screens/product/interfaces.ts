import type { At } from '../../interfaces'

export interface Product extends At {
  id: string;
  image: string;
  is_redemption: boolean;
  points: number;
  product: string;
}