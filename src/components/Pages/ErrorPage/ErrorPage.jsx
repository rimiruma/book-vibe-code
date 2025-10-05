const ErrorPage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-cover bg-center"
         style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?nature,scenery')" }}>
      <div className="bg-black bg-opacity-50 p-10 rounded-xl text-center">
        <h1 className="text-8xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-white mb-6">Oops! Page not found.</p>
        <a href="/" className="btn btn-primary btn-lg">
          Go Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
