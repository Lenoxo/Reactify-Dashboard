# Reactify Dashboard

Reactify Dashboard is the administrative interface of an e-commerce project called **[Reactify](#useful-resources)**. This dashboard is developed using React, Next.js, and TailwindCSS, and it incorporates the following key functionalities:

1. **Platzi Fake Store API Integration:** The website utilizes the [Platzi Fake Store API](#useful-resources) to fetch product data.

1. **Category Visualization using Chart.js:** Gain insights into product categories' distribution through intuitive charts powered by Chart.js.

1. **Pagination for Enhanced Data Management:** Efficiently manage large datasets with a built-in pagination system that displays 10 results per page.

1. **Product Management (Create, Edit, Delete):** Seamlessly interact with the API to create, edit, and delete products within the `/products` page.

1. **Login Authentication with Token Handling:** Securely authenticate users through js-cookie and axios, ensuring smooth token management for API communication.

## Table of Contents:

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Useful Resources](#useful-resources)
- [License](#license)
- [Author](#author)

### Demo

![Reactify Dashboard Demo](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW9uMHJleHRsOWFxbnhkcXlhbzd2eGVocWlnMXc0MjV2bXFmZzA2aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dpRoqML3gym7EV3ZNF/giphy.gif)

#### Before using it

To access the Dashboard, please log in with the following test account:

- **Email**: `maria@mail.com`
- **Password**: `12345`

#### [View it online!](https://react-ecommerce-dashboard.vercel.app/)

### Features

1. **Platzi Fake Store API Integration:** The website utilizes the [Platzi Fake Store API](#useful-resources) to fetch product data. And because it's a test API, has some details to consider, one of them is that generates random images for products, instead of having own images for each product.

1. **Category Visualization using Chart.js:** The dashboard provides a clear visualization of product categories using Chart.js. This feature enhances the understanding of the distribution of products across various categories.

1. **Pagination for Enhanced Data Management:** To optimize the user experience, the dashboard features a pagination system that allows viewing only 10 results per page. This ensures efficient data management and navigation.

1. **Product Management (Create, Edit, Delete):** The dashboard empowers administrators with the ability to create, edit, and delete products through interactions with the API. These operations are seamlessly executed within the `/products` page.

1. **Login Authentication with Token Handling:** Leveraging js-cookie and axios, the dashboard incorporates a secure login authentication mechanism. User tokens are managed efficiently, enabling smooth communication between the dashboard and the backend API.

### Installation

To set up and run Reactify Dashboard locally, follow these steps:

1. Clone the repository: `git clone [repository URL]`
2. Navigate to the dashboard directory: `cd Reactify-Dashboard`
3. Install the required dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your web browser and go to `http://localhost:3000` to access the Reactify Dashboard.

### Useful Resources

- **[Platzi Fake Store API](https://fakeapi.platzi.com/)**: Official Page of this API.
- **[Reactify](https://github.com/Lenoxo/reactify-nextjs)**: E-commerce Project mentioned above.
- **[Official React Documentation](https://reactjs.org/)**: Comprehensive resource for mastering React and its ecosystem.
- **[Next.js Documentation](https://nextjs.org/)**: Official documentation for Next.js, offering guidance on building server-rendered React applications.
- **[TailwindCSS Documentation](https://tailwindcss.com/)**: In-depth guide to TailwindCSS, a utility-first CSS framework.
- **[Chart.js Documentation](https://www.chartjs.org/)**: Documentation for Chart.js, a widely-used JavaScript charting library.
- **[Next.js Professional Course](https://platzi.com/cursos/profesional-nextjs/)**: Course where I learned how to develop this project and later on, gave it my style and improvements.

### License

This project is licensed under the [MIT License](LICENSE).

### Author

Lenoxo (Emanuel Padilla)

For inquiries, suggestions, or comments, feel free to reach out at [emanuehl159@gmail.com](mailto:emanuehl159@gmail.com).
