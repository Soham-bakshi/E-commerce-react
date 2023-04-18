# <div align="center">E-commerce-React

## <div align="center" >Submitted as part of an assignment</div>

</div>

# Technologies Used:

### 1. React.js

### 2. Redux Toolkit

### 3. RTK Query

### 4. React Router

### 5. Styled Components

### 6. React Toastify

## Deployed API Service : https://ecommerce-react-data.onrender.com

# <div align="center">

[![Netlify Status](https://api.netlify.com/api/v1/badges/fa6cc23e-b705-4b2d-b4d0-32171e3c8b85/deploy-status)](https://app.netlify.com/sites/e-commerce-react-p666r/deploys)

## Hosted Link: https://e-commerce-react-p666r.netlify.app/

</div>
</div>

<hr/>

# <div align="center">

![app](https://github.com/P666R/E-commerce-React/blob/main/public/1.png)

</div>

## Home page features:

1. Navbar with cart items count and relevant navigation links
2. List of products from own API
3. Each product is editable inline
4. Each product is deletable
5. Sorting based on ascending and descending order of price
6. Button to add a product to cart
7. Button to show all the details of a product
8. Relevant notifications

<hr/>

# <div align="center">

![app1](https://github.com/P666R/E-commerce-React/blob/main/public/2.png)

</div>

## Add product page features:

1. Form to add a product in the DB
2. Relevant navigations and notifications

<hr/>

# <div align="center">

![app1](https://github.com/P666R/E-commerce-React/blob/main/public/3.png)

</div>

## Cart page features:

1. Shows all the items in the cart
2. Increase and decrease items, delete item and clear cart buttons
3. Relevant navigations and notifications

<hr/>

# <div align="center">

![app1](https://github.com/P666R/E-commerce-React/blob/main/public/4.png)

</div>

## General features:

1. Handled errors and success alerts etc
2. Handled errors etc from API with appropriate alerts/notifications
3. Data persistance for cart data using local storage

<hr/>

# Folder Structure:

- 📂 **ecommerce**
  - 📂 **public**
  - 📂 **src**
    - 📂 **assets**
    - 📂 **components**
      - 📄 [AddProduct.jsx](src/components/AddProduct.jsx)
      - 📄 [AmountButtons.jsx](src/components/AmountButtons.jsx)
      - 📄 [Cart.jsx](src/components/Cart.jsx)
      - 📄 [CartButtons.jsx](src/components/CartButtons.jsx)
      - 📄 [CartColumns.jsx](src/components/CartColumns.jsx)
      - 📄 [Error.jsx](src/components/Error.jsx)
      - 📄 [Footer.jsx](src/components/Footer.jsx)
      - 📄 [Loading.jsx](src/components/Loading.jsx)
      - 📄 [Navbar.jsx](src/components/Navbar.jsx)
      - 📄 [ProductDetail.jsx](src/components/ProductDetail.jsx)
      - 📄 [ProductItem.jsx](src/components/ProductItem.jsx)
      - 📄 [ProductsList.jsx](src/components/ProductsList.jsx)
      - 📄 [Sort.jsx](src/components/Sort.jsx)
      - 📄 [Stars.jsx](src/components/Stars.jsx)
    - 📂 **store**
      - 📂 **apis**
        - 📄 [productsApi.js](src/store/apis/productsApi.js)
      - 📂 **slice**
        - 📄 [cartSlice.js](src/store/slice/cartSlice.js)
        - 📄 [productSlice.js](src/store/slice/productSlice.js)
      - 📄 [index.js](src/store/index.js)
    - 📂 **utils**
      - 📄 [constants.js](src/utils/constants.js)
    - 📄 [App.jsx](src/App.jsx)
    - 📄 [index.css](src/index.css)
    - 📄 [main.jsx](src/main.jsx)
  - 📄 [index.html](index.html)
  - 📄 [package\-lock.json](package-lock.json)
  - 📄 [package.json](package.json)
  - 📄 [README.md](README.md)
  - 📄 [vite.config.js](vite.config.js)

## This project was bootstrapped with [Vite](https://vitejs.dev/)

# Installation And Usage:

## To run this project run

- git clone https://github.com/P666R/E-commerce-React.git

## Go to directory

- cd e-commerce-react-main

## Install all dependencies

- npm install

## Run Project

- npm run dev

## Now you can access on localhost:5173
