function Input({placeholder,Type,className,onChange})
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