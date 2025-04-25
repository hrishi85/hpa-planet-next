export default function Error({ error, reset }) {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h2>Something went wrong!</h2>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
}