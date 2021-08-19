export const Input = ({ type, value, place, name,func }) => {
    return (
        <div className="flex flex-col w-2/3 mb-4 text-sm">
            <label htmlFor="formcontrol" className="capitalize text-blue-900 mb-2" >{name}</label>
            <input type={type} name={name} placeholder={place} value={value} onChange={func} className="rounded bg-gray-200 focus:outline-none px-4 py-2" />
        </div>
    )
}

export const Button = ({ name, func }) => {
    return (
        <div>
            <button onClick={func} className="bg-red-400 px-4 py-2 rounded-lg text-white hover:ring-2 ring-indigo-300">{name}</button>
        </div>
    )
}
