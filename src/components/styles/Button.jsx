function Button(props) {
    return <button {...props}  className="bg-slate-400 p-2 rounded-md text-white border px-4 py-2 transition duration-300 ease-in-out
         hover:bg-blue-400 hover:border-blue-400  hover:shadow-[0_0_10px_#60a5fa,0_0_20px_#60a5fa,0_0_30px_#60a5fa]">
        {props.children}
    </button>
}

export default Button