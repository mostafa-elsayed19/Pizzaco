function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary?: () => void;
}) {
  console.log(error);
  return (
    <div>
      {error.message}
      <button onClick={resetErrorBoundary}>tset</button>
    </div>
  );
}

export default ErrorFallback;
