const FieldError = ({ error, condition }) => {
  if (!condition) {
    // Return nothing if condition doesn't met
    return null;
  }

  return <p className="text-red-500 text-sm mt-1">{error}</p>;
};

export default FieldError;
