# PlantSearcher 🌿

PlantSearcher is a web application that identifies plants from images and provides relevant information about them, helping users discover and learn more about different plant species.

## Features

- **Plant Identification:** Identify plant species by uploading an image.
- **Plant Information:** Retrieve relevant information about identified plants.
- **Multilingual Support:** Available in English, Spanish and Catalan.
- **Interactive Interface:** Simple and intuitive user experience.

## Technologies

- React
- Vite
- JavaScript
- PlantNet API
- Wikipedia API
- Zustand

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR_USERNAME/PlantSearcher.git
   ```

2. Navigate to the project directory:

   ```bash
   cd PlantSearcher
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Environment Variables

The project requires a PlantNet API key to identify plants.

1. Create a `.env` file in the root directory.
2. Add your PlantNet API key:

   ```env
   VITE_PLANTNET_API_KEY=your_api_key_here
   ```

3. Replace `your_api_key_here` with your actual API key.

You can obtain an API key from [PlantNet](https://my.plantnet.org/).

**Note:** Never commit your `.env` file or expose your actual API key in the repository.

### Running the Application

Start the development server:

```bash
npm run dev
```

Vite will provide a local URL where you can access the application.

## Project Report

The repository also includes a PDF report showcasing the application's features and functionalities.

[View the Project Report (PDF)](docs/PlantSearcher_Report.pdf)

## License

This project was developed as an academic project.