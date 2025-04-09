function Input({placeholder,Type,className,onChange,onKeyDown})
{
    return (
        <input 
            type={Type} 
            className={className}
            placeholder={placeholder}
            onChange={onChange}        
        />
    );
}
export default Input;