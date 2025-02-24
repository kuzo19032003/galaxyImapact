import Item from "../item";
import SearchBox from "../searchbox";
function ListItem({items,className,search})
{

    return (
      
        <ul className={className}>
          {items.map((item, key )=>
            { 
                return (
                    <Item key={key} to={item.to}> {item.name}</Item>
                )
            })
          }
          { 
            search && <SearchBox className=""/>
          } 
        </ul>
    )
}
export default ListItem;