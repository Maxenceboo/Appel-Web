import app from './app'; // Importation correcte de l'export par défaut

const port = process.env.PORT || 3030; // Use the port defined in the environment variables or 3000

app.listen(port, () => console.log(`Server listening on port ${port}`)); // Start the server on the specified port
