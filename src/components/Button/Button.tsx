const Button = ({ children, onClick }: { children: React.ReactNode, onClick: () => void }) => (
    <button
        type="button"
        onClick={onClick}
        className="bg-blue-500 text-white rounded px-4 py-2 w-full focus:outline-none hover:bg-blue-600"
    >
        {children}
    </button>
);

export default Button;