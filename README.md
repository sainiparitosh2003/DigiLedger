# DigiLedger

## Overview

DigiLedger is a comprehensive React application designed to provide real-time insights into the cryptocurrency market, with a particular focus on Bitcoin. This project leverages various APIs to fetch up-to-date market data and presents it in an engaging and user-friendly interface. It aims to help users track and analyze the performance of different cryptocurrencies seamlessly.

## Features

- **Real-time Bitcoin Data**: Displays Bitcoin data with 24-hour variations, current values, and market capitalization.
- **Customizable Coin Tables**: Allows users to view cryptocurrency data across various time frames.
- **Firebase Authentication**: Supports user authentication with Firebase, including Google login.
- **Portfolio Management**: Enables users to manage their cryptocurrency portfolio within the app.
- **Responsive Design**: Ensures a seamless user experience across devices.
- **Interactive Charts**: Displays market trends and data using interactive charts.

## Technologies Used and Skills Demonstrated

- **React**: For building the user interface.
- **HTML & CSS**: For structuring and styling the app.
- **Firebase**: For real-time database management and user authentication.
- **Google Login**: For easy user authentication and login.
- **React Router**: For managing navigation within the app.
- **Axios**: For making API requests.
- **Git**: For version control.

## Installation

To get started with DigiLedger, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/DigiLedger.git
   cd DigiLedger
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm start
   ```

4. **Open in Browser**:
   Navigate to `http://localhost:3000` to see the app in action.

## Deployment

You can access the live version of the app at the following link:
[https://digi-ledger-76qhihivz-paritosh-sainis-projects.vercel.app](https://digi-ledger-76qhihivz-paritosh-sainis-projects.vercel.app)

## API Integration

DigiLedger integrates with multiple cryptocurrency market APIs to fetch real-time data. Ensure you have the necessary API keys and endpoints configured in the project.

1. **Configure API Keys**:
   Create a `.env` file in the root directory and add your API keys:
   ```plaintext
   REACT_APP_API_KEY=your_api_key_here
   REACT_APP_API_ENDPOINT=your_api_endpoint_here
   ```

2. **Fetch Data**:
   The application uses Axios to make HTTP requests to the configured APIs and retrieves the latest market data.

## Project Structure

```plaintext
DigiLedger/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Chart.js
│   │   ├── Dashboard.js
│   │   └── ...
│   ├── redux/
│   │   ├── actions/
│   │   ├── reducers/
│   │   └── store.js
│   ├── utils/
│   │   ├── api.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .env
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, feel free to contact:

- **Name**: Paritosh Saini
- **Email**: sainiparitosh6@gmail.com

---
