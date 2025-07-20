import { useNavigate } from "react-router";
import { users } from "../../data";
import { RoutesUrl } from "../../routes-url";

export default function UserList() {
    const navigate = useNavigate();
    const handleClick = (id: number) => {
        navigate(`${RoutesUrl.USER_DETAILS}${id}`);
    }

    return (
        <div className="max-w-7xl mx-auto p-6 flex flex-col gap-4">
            {users.map((user) => (
                <div key={user.email} className="border border-white/10 w-full overflow-x-auto p-6">
                    <div className="m-1">id: {user.id}</div>
                    <div className="m-1">e-mail: {user.email}</div>
                    <button className="m-1 cursor-pointer bg-white/10 border border-white/10 rounded-md p-1.5 hover:opacity-50" onClick={() => handleClick(user.id)}>Details</button>
                </div>
            ))}
        </div>
    )
}