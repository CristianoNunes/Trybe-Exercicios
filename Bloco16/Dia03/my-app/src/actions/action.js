import userEvent from "@testing-library/user-event";

export const addCliente = (user) => ({ 
  type: 'ADD_USER',
  user: {
    [name]:  user.name,
    email: user.email,
  }
});