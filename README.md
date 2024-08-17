# BlackSquare

https://blacksquare.vercel.app/

**BlackSquare** is a modern e-commerce platform designed to deliver a seamless shopping experience, leveraging advanced web technologies and best practices for performance and scalability.

## Features

- **Server-Side Rendering**: Utilizes [Next.js](https://nextjs.org/) for server-side rendering (SSR), enhancing SEO and ensuring faster load times.
- **Responsive Design**: Built with [Tailwind CSS](https://tailwindcss.com/) to provide a responsive, utility-first CSS framework that ensures a modern and adaptable user interface.
- **TypeScript**: Employed for type safety and a better development experience.
- **Atomic Design**: Applied atomic design principles to create a scalable and maintainable component library, making the UI components reusable and consistent.
- **Database Management**: Uses [Prisma](https://www.prisma.io/) ORM for efficient and reliable database interactions.
- **Deployment**: Deployed on [Vercel](https://vercel.com/) for optimal performance and automatic scaling.

## Technologies

- **[Next.js](https://nextjs.org/)**: A React framework for server-side rendering, static site generation, and routing, which helps improve performance and SEO.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework that allows for rapid styling with a custom design system.
- **[TypeScript](https://www.typescriptlang.org/)**: Adds type safety to JavaScript, which helps catch errors early and improves the development workflow.
- **[Prisma](https://www.prisma.io/)**: Provides a powerful ORM to manage and query the database effectively.
- **[Vercel](https://vercel.com/)**: Offers seamless deployment and hosting specifically optimized for Next.js applications.

## Design Decisions

- **Atomic Design**: Implemented atomic design principles to structure the component library. This approach divides the UI into five levels of abstraction: atoms, molecules, organisms, templates, and pages, resulting in a consistent, scalable, and maintainable UI.
- **React Hooks**: Utilized React hooks, such as `useState`, `useEffect`, and custom hooks, to manage state and side effects efficiently. This approach simplifies component logic and enhances reusability.
- **Next.js Features**:
  - **Static Site Generation (SSG)**: Leveraged Next.js's static site generation to pre-render pages at build time for better performance and SEO.
  - **API Routes**: Used Next.js API routes for serverless functions, allowing backend logic to be integrated directly within the Next.js application.
  - **Image Optimization**: Applied Next.js's built-in image optimization to ensure fast image loading and better performance.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/black-square.git
    ```

2. Navigate to the project directory:

    ```bash
    cd black-square
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file and add the required environment variables. Example `.env` file:

    ```env
    DATABASE_URL=your_database_url
    NEXT_PUBLIC_API_URL=your_api_url
    ```

5. Start the development server:

    ```bash
    npm run dev
    ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Navigate through the intuitive e-commerce interface to browse products.
- Add items to the cart and proceed to checkout.
- Experience the responsive design across various devices.

## Contributing

If you'd like to contribute to BlackSquare, please follow these steps:

1. Fork the repository.
2. Create a new branch:

    ```bash
    git checkout -b feature/your-feature
    ```

3. Commit your changes:

    ```bash
    git commit -am 'Add new feature'
    ```

4. Push to the branch:

    ```bash
    git push origin feature/your-feature
    ```

5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out to raqueldebiase@gmail.com.
