import Head from "next/head";
import AirlineRoutes from "../components/assignment5/assignment5_student.js"; // Ensure this path is correct

export default function Home() {
  return (
    <>
      <Head>
        <title>Airline Routes Visualization</title>
        <meta name="description" content="Airline routes data visualization" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Render the AirlineRoutes component */}
      <AirlineRoutes />
    </>
  );
}
