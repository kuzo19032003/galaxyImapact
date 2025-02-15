function Input({placeholder, Type,className})
{
    return (
        <input 
            type={Type} 
            className={className}
            placeholder={placeholder}
        />
    );
}
export default Input;