export default function User({ user, loading }) {
    const blur = loading ? "scale-100 blur-[2px] grayscale-0" : ""
  return (
    <div className="h-46 flex flex-col p-2 rounded border group hover:scale-105 transition-transform ease-out duration-200">
      <div className=" columns-1 items-center justify-between">
        <p className={`text-xs font-semibold ${blur}`}>
          {loading ? "Loading.." : user.name.firstname} {loading ? "Loading.." : user.name.lastname} ({loading ? "Loading.." : user.username})
        </p>
        <p className={`text-xs ${blur}`}>{loading ? "Loading.." :user.email}</p>
        <p className={`text-xs  ${blur}`}>{loading ? "loading" :user.phone}</p>
        <p className={`text-xs  italic mt-2 ${blur}`}>
          Address:{loading ? "loading" : user.address.street}, {loading ? "loading" : user.address.city}, zip:{" "}
          {loading ? "loading" :user.address.zipcode}
        </p>
      </div>
    </div>
  );
}
