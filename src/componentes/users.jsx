import React from 'react';


function Users (){
    let usersData=[
    {
        name: "Bill Mahoney",
        job: "PRODUCT OWNER",
        img: "./public/recursos/recursos/images/photo1.png"
    },
    {
        name: "Saba Cabrera",
        job: "ART DIRECTOR",
        img: "./public/recursos/recursos/images/photo2.png"
    },
    {
        name: "Shae Le",
        job: "TEACH LEAD",
        img: "./public/recursos/recursos/images/photo3.png"
    },
    {
        name: "Skylah Lu",
        job: "UX DESIGNER",
        img: "./public/recursos/recursos/images/photo4.png"
    },
    {
        name: "Griff Richards",
        job: "DEVELOPER",
        img: "./public/recursos/recursos/images/photo5.png"
    },
    {
        name: "Stan John",
        job: "DEVEOPER",
        img: "./public/recursos/recursos/images/photo6.png"
    },
]

    return (
        <div className="grid grid-cols-2  gap-y-15 gap-x-10 p-7">
        {usersData.map((user) => (
            <div className="flex flex-col items-baseline h-full w-full">
                <div className="flex w-full h-full items-start">
                    <img src={user.img} alt={user.name} className="w-70" />
                    <div className='relative flex w-20 h-full'>
                        <p className="absolute top-0 left-5 origin-top-left rotate-90 text-sm whitespace-nowrap">{user.job}</p>
                    </div>
                </div>
                <h3 className="font-semibold text-lg">{user.name}</h3>
            </div>
        ))}
        </div>
    );
    
}


export default Users;
