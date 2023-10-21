export const CartButton: React.FC = () => {
  return (
    <button
      aria-label="Open Cart"
      className="fixed bottom-4 bg-black text-white dark:bg-gray-100 right-4 p-4 rounded-full shadow-lg dark:text-black hover:bg-gray-400 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black z-50 transform transition-transform duration-200 hover:scale-105"
    >
      <svg
        className=""
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    </button>
  );
};
