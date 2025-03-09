import AdminHeader from "./adminheader/adminheader"
import AdminSidebar from "./adminsidebar/adminsidebar" 

function AdminLayout({children})
{

    return(
        <div className="grid grid-cols-12 ">
            <AdminSidebar className="col-span-4 w-[19vw] h-[100vh] bg-blue-500 "/>
            <div className="col-span-8">
                {children}
            </div>
        </div>
    )
}
export default AdminLayout