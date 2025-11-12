# Full E-commerce React Project

## Project Description
This is a fully interactive **E-commerce website** developed as a **Front-end project** by Osama Alghoul.  
It features product browsing, categories, and a shopping cart with a Stripe payment integration.

**Note:** Only three products are currently available for purchase to save time during testing.

---

## Technologies Used
- **Front-end:** React, Vite, TypeScript, Tailwind CSS  
- **Payment:** Stripe (Checkout Session)  
- **Deployment:** Vercel  

---

## Available Products

| ID  | Product Name             | Link              |
|-----|--------------------------|-----------------|
| 123 | iPhone 13 Pro            | `/products/123`  |
| 100 | Apple Airpods            | `/products/100`  |
| 104 | Apple iPhone Charger     | `/products/104`  |

These products are added to the **Hero Section Carousel**, and can be added to the shopping cart for checkout.

---

## Stripe Payment Instructions

1. Add products to the shopping cart with the desired quantity.  
2. Click the **Checkout** button in the cart page.  
3. You will be redirected to a **Stripe Checkout Page** to complete the payment.  
4. After successful payment, you will be redirected to the **Success** page.  
5. If the payment is canceled, you will be redirected to the **Cancel** page.  

> **Important for developers:**  
> Each cart item should contain `id` and `quantity` when sending the request to the `/api/create-checkout-session` endpoint.

---

## Environment Variables

To run the project correctly, you need to set the following variables:
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...


**In Vercel Dashboard (for deployment):**
- Add the same variables under **Project Settings → Environment Variables**  
- Make sure to redeploy after setting them

---

## Running the Project Locally

1. Clone the repository:
```bash
git clone https://github.com/Osama-Alghoul/Full-E-commerce-website
```
**In `.env.local` (for local development):**
Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open the browser at http://localhost:5173 (or the URL shown in terminal) to see the project.

Use the cart to add products and test Stripe checkout locally using vercel dev or after deploying the API.

Notes

This project is Front-end only, with Stripe Checkout handled on the backend via a Vercel API route.

The three products added are for demonstration purposes only.

Ensure the Stripe Secret Key is configured properly in local and production environments.
