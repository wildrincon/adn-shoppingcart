// Product Interface
export interface IProduct {
  id: string;
  title: string;
  price: number;
  image: string;
  description?: string;
  slug: string;
  images?: [];
}

// Action Interface
export interface IAction {
  payload?: any;
  type: string;
}

// Product Store Interface
export interface IState {
  productsShop: IProduct[];
  loadingOne: boolean;
  loadingHome: boolean;
  loadingShop: boolean;
  product: IProduct;
  getProductsShop: () => void;
  getProduct: (slug: string) => void;
  loadingProduct?: () => void;
}