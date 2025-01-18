# Shopping Website

This project is a full-fledged shopping website that includes user registration, login, profile management, and a dynamic cart management system. Built with **Node.js**, **Express**, and **EJS**, it offers responsive designs using **Tailwind CSS**.

## Features

### 1. User Authentication
- **Registration**: New users can register with an email and password.
- **Login**: Existing users can log in securely.
- **Session Management**: Sessions are maintained using cookies for a seamless user experience.

### 2. User Profile
- View and update profile details such as name, email, and address.
- Change password functionality for enhanced security.

### 3. Shopping Cart
- **Dynamic Rendering**: Displays all items in the cart with a responsive layout.
- **Quantity Updates**: Adjust item quantities with real-time updates.
- **Delete Items**: Remove items from the cart effortlessly.
- **Price Breakdown**: Provides a detailed price breakdown, including total cost.

### 4. Product Listing
- Browse products with their details like price, description, and images.
- Add products to the cart from the product listing or details page.

### 5. Responsive Design
- Fully responsive layout using **Tailwind CSS**, ensuring a seamless experience across devices.

## File Structure

### Backend
- **Router:**
  - `users/register`: Handles user registration.
  - `users/login`: Manages user login.
  - `/account`: Displays and updates user profile details.
  - `/cart`: Renders the shopping cart view.
  - `/cart/update/:id`: Updates item quantities in the cart.
  - `/cart/delete/:id`: Deletes items from the cart.
  - `/shop`: Lists all available products.

### Frontend
- **EJS Templates:**
  - Dynamic rendering for registration, login, profile, and cart pages.
  - Product listing and detail pages.
- **Tailwind CSS:**
  - Provides a modern and responsive design.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ujjwalkumarsahni/Bag-Shop-Website.git
   cd Bag-Shop-Website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   - Create a MongoDB database.
   - Configure the connection in the `.env` file:
     ```
     MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/shopping-website
     ```

4. Start the application:
   ```bash
   npm App.js
   ```

5. Open the application in your browser:
   ```
   http://localhost:<port>
   ```

## Dependencies

- **Node.js**: Backend runtime.
- **Express**: Web framework for routing and middleware.
- **EJS**: Templating engine for dynamic rendering.
- **MongoDB**: NoSQL database for data storage.
- **Tailwind CSS**: Framework for responsive design.
- **bcrypt**: For hashing passwords securely.
- **express-session**: For managing user sessions.

## Features in Development
- Admin panel for product and user management.

---

