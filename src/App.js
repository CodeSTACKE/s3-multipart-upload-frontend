import './App.css';

import FileUpload from "./components/Upload";

function App() {
  return (
    <div className="App">
      <h1>Large File Upload with S3 Multipart Upload</h1>
      <FileUpload />
    </div>
  );
}

export default App;
