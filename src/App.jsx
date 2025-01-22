import Grid from "./components/Grid";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import Box from "./components/Box";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-6 gap-6 max-w-full">
        <div className="flex flex-col  md:flex-row sm:flex-col-reverse gap-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <Image />
            <Grid />
          </div>
          <Box />
        </div>
      </div>
    </div>
  );
}

export default App;
