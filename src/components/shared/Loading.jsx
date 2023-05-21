const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen gap-2">
      <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
      <h1>Please wait data is processing</h1>
     
    </div>
  );
};

export default Loading;
