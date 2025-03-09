import Button from "../../../components/button"
import CustomLink from "../../../components/customlink";
import ListItem from "../../../components/listItem";

function AdminSidebar({className})
{
    const items = [ 
        {to: "/admin", name: "Mua vé"},
        {to: "/adminUser", name: "Người Dùng"},
        {to: "/adminFilm", name: "Phim"},
        {to: "/adminDashboard", name: "Thống Kê"},
    ];
    return(
        <div className={className}>
           <ul className="flex flex-col gap-y-15 text-center items-center translate-y-30">
                {items.map((items,index) => (
                    <CustomLink key={index} to={items.to} classNameCustomLink="text-white rounded-lg bg-blue-300 w-[60%] p-3 ">
                        {items.name}
                    </CustomLink>
                ))}
           </ul>
        </div>
    )
}
export default AdminSidebar