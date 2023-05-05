import { toast } from "react-hot-toast";

const addToDb = (id) => {
  let favCart = getFavCart();
  const exist = favCart.find((recipe) => recipe === id);
  if (!exist) {
    favCart.push(id);
    localStorage.setItem("fav-cart", JSON.stringify(favCart));
    toast.success("Successfully added to your favorite recipe!");
  } else {
    toast.error("Already existed");
  }
};
const getFavCart = () => {
  let favCart = [];
  const storedCart = localStorage.getItem("fav-cart");
  if (storedCart) {
    favCart = JSON.parse(storedCart);
  }
  return favCart;
};
const removeFromDb = (id) => {
  const favCart = getFavCart();
  const remaining = favCart.filter((recipe) => recipe !== id);
  localStorage.setItem("fav-cart", JSON.stringify(remaining));
};

export { addToDb, getFavCart, removeFromDb };
