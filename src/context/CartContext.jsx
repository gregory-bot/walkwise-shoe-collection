import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    // Clear the cart from localStorage on initial load
    localStorage.removeItem('cart');
    return [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id && i.size === item.size && i.color === item.color);
      if (existingItem) {
        return prevItems;
      }
      return [...prevItems, item];
    });
  };

  const removeFromCart = (itemId, size, color) => {
    setCartItems(prevItems => prevItems.filter(item => !(item.id === itemId && item.size === size && item.color === color)));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      clearCart,
      totalItems: cartItems.length 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}