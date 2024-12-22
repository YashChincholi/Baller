import { Link } from "react-router-dom";

const Newsletter = () => (
  <div
    className="flex items-center justify-center w-full my-10"
    id="newsletter"
  >
    <div className="flex items-center justify-center bg-[#0E0C15] p-8 border border-yellow-500 rounded-lg shadow-lg">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Ready to Join?</h1>
        <Link to="/join">
          <button className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">
            Join the Exclusive Club
          </button>
        </Link>
      </div>
    </div>
  </div>
);
export default Newsletter;
