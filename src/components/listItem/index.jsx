import Item from "../item";
import SearchBox from "../searchbox";
function ListItem({items,className})
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
          <SearchBox className=""/> 
        </ul>
    )
}
export default ListItem;