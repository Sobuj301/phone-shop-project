import Mobile from "./Mobile";

const Phones = ({phones}) => {
    return (
        <div>
            <h2 className="test-xl text-center font-semibold">All categories phones:{phones.length} </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {
                    phones?.map(phone => <Mobile key={phone.id} phone={phone}></Mobile>)
                }
            </div>
        </div>
    );
};

export default Phones;