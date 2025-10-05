const Input = ({ title, placeholder, value, onChange, type = "text", h }) => {
    return (
        <div className="w-full ">
            <h1 className="font-semibold">{title}</h1>
            <input type={type} value={value} onChange={onChange} className={`bg-[#f3f3f5] w-full ${h}  mt-2 rounded-lg py-2 pl-4  focus:outline-2 focus:outline-[#a7a7a8]`} placeholder={placeholder} />
        </div>
    )
}
export default Input