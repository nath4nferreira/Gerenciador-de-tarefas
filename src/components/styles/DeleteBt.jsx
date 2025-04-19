function DeleteBt(props) {
    return <button {...props}  className="bg-slate-400 p-2 rounded-md text-white border px-4 py-2 transition duration-300 ease-in-out
         hover:bg-red-500 hover:border-red-500  hover:shadow-[0_0_10px_#f00,0_0_20px_#f00,0_0_30px_#f00]">
        {props.children}
    </button>
}

export default DeleteBt