import CustomLink from "../customlink";

function Item({to,children})
{
    return(
        <li >
            {
                <CustomLink to={to}>
                    {children}
                </CustomLink>
            }
        </li>   
    )
}
export default Item;