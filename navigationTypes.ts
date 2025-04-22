export type ParamListRoute = {
  Home: undefined;
  // Details: { name: string };
  Details: {
    restaurant: {
      name: string;
      deliveryTime: string;
      distance: string;
    };
  };
  // add other routes here...
};
