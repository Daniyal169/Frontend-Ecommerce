import { useEffect, useState } from "react";
import Data from "./Data/Data";
import ShopProduct from "./components/ShopProduct/ShopProduct";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ContactPage from "./Pages/ContactPage";
import CartPage from "./Pages/CartPage";
import ShopPage from "./Pages/ShopPage";
import HomePage from "./Pages/HomePage";
import Layout from "./Layout";
import { ContextProvider } from "./Context/ShopContext";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import { AuthProvider } from "./Context/AuthContext";
import NotFoundPage from "./Pages/NotFoundPage";

// --------------------Routing---------------------------
// --------------------Routing---------------------------
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "shop",
        element: <ShopPage />
      },
      {
        path: "cart",
        element: <CartPage />
      },
      {
        path: "contact",
        element: <ContactPage />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "*", // This will match any route not explicitly defined
    element: <NotFoundPage />, // Render the 404 page
  },

])

function App() {



  // --------------------FITERING---------------------------
  // --------------------SEARCH---------------------------
  // For Input
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const searchProduct = Data.filter((product) => {
    return product.title.toLowerCase().includes(input.toLowerCase());
  })

  // FOR Button
  const [selectCategory, setSelectCategory] = useState(null);

  const handleButton = (e) => {
    setSelectCategory(e.target.value);
  }

  // MAIN FUNC
  function filteredData(input, selected, data) {
    let filteredProduct = data;

    if (input) {
      filteredProduct = searchProduct
    }

    if (selected) {
      filteredProduct = filteredProduct.filter(({ category }) => {
        return category === selected;
      });
    }

    return filteredProduct.map(({ id, img, title, newPrice, prevPrice }) => (

      <ShopProduct
        key={Math.random()}
        id={id}
        img={img}
        title={title}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />

    ))
  }

  const result = filteredData(input, selectCategory, Data);



  // --------------------CART---------------------------
  // --------------------CART---------------------------
  // FOR CART
  function defaultCart() {
    let cart = {};
    for (let i = 0; i < Data.length; i++) {
      cart[Data[i].id] = 0;
    }
    return cart;
  }

  const [cartItems, setCartItems] = useState(defaultCart())
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addCart = (id) => {
    if (isAuthenticated) {

      setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }))
      setTotalQuantity((prevTotal) => prevTotal + 1);
    } else {
      alert("Your must login first")
    }
  }
  const removeCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }))
    setTotalQuantity((prevTotal) => prevTotal + -1);
  }



  // --------------------AUTH---------------------------
  // --------------------ATUH---------------------------

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const isAuthenticated = !!user;

  const login = (userData) => {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.some(
      (user) => user.email === userData.email || user.password === userData.password
    );

    if (userExists) {
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
    } else {
      alert("User with this email or name does not exist. Please sign up.");
    }

  };

  const signup = (userData) => {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.some((user) => user.email === userData.email && user.name === userData.name);

    if (userExists) {
      alert("User with this email or name already exists. Please log in.");
      return;
    }

    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('user', JSON.stringify(userData)); // Set current user
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthProvider value={{ isAuthenticated, user, login, signup, logout }}>
      <ContextProvider value={{ handleInput, input, handleButton, result, cartItems, addCart, removeCart, totalQuantity }}>
        <RouterProvider router={router} />
      </ContextProvider>
    </AuthProvider>
  )
}

export default App
