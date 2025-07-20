import { useParams } from "react-router"

export default function UserDetails() {
    const { id } = useParams();

    return (
        <div className="max-w-7xl mx-auto p-6 flex flex-col gap-4">
            <div className="m-1">id: {id}</div>
        </div>
    )
}