# Challenge 1: Restaurant Menu App

Congratulations on completing the React Fundamentals section! That is a crucial milestone. Mastering props, lists, and component structure is 80% of the battle in React.

As a Senior React Engineer, I've prepared a challenge that mirrors a real-world scenario: building a dynamic menu for a client. This will test your ability to handle data flow and conditional rendering.

## 👨‍💻 The Challenge

Your goal is to build a static application that displays a list of food items.

### 1. The Data Structure

Copy this array into a file named `data.js` (or keep it at the top of your main file for now).

```javascript
export const menuItems = [
  {
    id: 1,
    title: 'Buttermilk Pancakes',
    price: 15.99,
    img: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.",
  },
  {
    id: 2,
    title: 'Diner Double',
    price: 22.99,
    img: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing.',
  },
  {
    id: 3,
    title: 'Godzilla Milkshake',
    price: 6.99,
    img: 'https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Ombucha chillwave fanny pack 3 wolf moon tacociti renner, artisan blog slow-carb.',
  },
  {
    id: 4,
    title: 'Steak Dinner',
    price: 35.99,
    img: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Premium cut beef served with seasonal vegetables and mashed potatoes.',
  },
];
```

### 2. Technical Requirements

**Component Structure:**
*   Create a parent component named `Menu`.
*   Create a child component named `MenuItem`.

**Rendering Lists:**
*   Inside `Menu`, iterate over the `menuItems` array using `.map()`.
*   Remember to provide a unique `key` prop.

**Props & Data Flow:**
*   Pass the entire object properties from `Menu` to `MenuItem` using the Spread Operator (`{...item}`).
*   Inside `MenuItem`, destructure the props (`img`, `title`, `price`, `description`) to use them in your JSX.

**Conditional Logic (The "Senior" Twist):**
*   Inside the `MenuItem` component, check the `price`.
*   **If the price is greater than $20**, render a small badge or span text that says **"Premium"** next to the price or title.
*   If it is $20 or less, do not render the badge.

### 3. Styling (Optional but recommended)

You don't need complex CSS, but try to make it readable.

*   Use an `article` tag for the `MenuItem`.
*   Use an `img` tag for the image.
*   Display the title and price in a header or `div`.

---

Go ahead and build this! When you are ready, paste your code (including your component definitions and how you render them) below. I will review it for best practices, code cleanliness, and correct usage of the concepts you've learned.