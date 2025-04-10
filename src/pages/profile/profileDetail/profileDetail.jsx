function ProfileDetail({user})
{
    return(
        <div className="bg-white shadow-xl w-[55vw] h-[50vh] mt-3">
            <div className="grid grid-cols-2 p-5 md:gap-x-10">
                <div className="md:mx-5 mt-2">
                   <div className="flex flex-col gap-y-3">
                        <label >Họ và Tên : </label>
                        <input type="text" value=  {user.fullName} disabled  className="md:w-60 rounded-lg p-1 bg-gray-300 text-gray-600"  />                    
                   </div>
                   <div className="flex flex-col gap-y-3 mt-5">
                        <label >Email : </label>
                        <input type="text" value=  {user.email} disabled  className="md:w-60 rounded-lg p-1 bg-gray-300 text-gray-600"  />                  
                   </div>
                   <div className="flex gap-x-3 mt-5">
                        <div className="flex gap-x-1">
                            <input type="radio" 
                                name="Gender"
                                value="Male"
                                checked={user.gender === "MALE"}
                                disabled
                            />
                            <span>Nam</span>
                        </div>
                        <div  className="flex gap-x-1">
                            <input type="radio" 
                                name="Gender"
                                value="Female"
                                checked={user.gender === "FEMALE"}
                                disabled
                            />
                            <span>Nữ</span>
                        </div>
                   </div>
                </div>
                <div className="md:mx-5 mx-3 mt-2">
                    <div className="flex flex-col gap-y-3">
                        <label >Ngày sinh : </label>
                        <input type="date" value=  {user.dateOfBirth} disabled  className="md:w-60 rounded-lg p-1 bg-gray-300 text-gray-600"  />                    
                   </div>
                </div>
                {/* <button className="flex justify-end">
                    Cập nhật
                </button> */}
            </div>
        </div>
    )
}
export default ProfileDetail