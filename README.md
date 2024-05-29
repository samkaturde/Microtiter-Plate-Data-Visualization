# Microtiter Plate Data Visualization

Welcome to the Microtiter Plate Data Visualization application! This project allows you to visualize data from microtiter plates in a convenient and interactive heatmap format.

## Features
- **Docker Support**: Easily build and run the application in a Docker container.
- **CSV File Upload**: Use the provided `test.csv` file or upload your own CSV files.
- **Interactive Heatmaps**: Visualize your data in an intuitive heatmap format.

## Prerequisites
- Ensure Docker is installed and running on your machine.
- Alternatively, you can run the application without Docker if you have Node.js and npm installed.

## Getting Started

### Running with Docker

1. **Build the Docker Image**
   Run the following command to create a Docker image named `react-heatmap-app`:
  `docker build -t react-heatmap-app .`

2. **Run the Docker Container**
  Run the following command to run the created Docker image and start the application:
  `docker run -p 80:80 react-heatmap-app`
  Open http://localhost/ to view it in your browser.

### Running without Docker

1. **Install Dependencies**
  Run the following command to install all necessary dependencies:
  `npm install`

2. **Start the Application**
  Run the following command to start the application:
  `npm start`
  Open http://localhost:3000 to view it in your browser.

## Using the Application
- Upon starting the application, you can either use the provided `test.csv` file located in the `public` folder or upload your own CSV file.
- The application will render the data in a heatmap format, allowing you to easily visualize the microtiter plate data.

## Example CSV File
Here’s an example of how the `test.csv` file should be structured:

Well,A1,A2,A3,A4
1,0.5,0.7,0.2,0.9
2,0.6,0.8,0.3,0.8
3,0.4,0.9,0.5,0.7
4,0.7,0.6,0.4,0.6

## Contributing
We welcome contributions! If you have any suggestions or improvements, please feel free to submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Support
If you encounter any issues or have questions, feel free to open an issue in the GitHub repository.
