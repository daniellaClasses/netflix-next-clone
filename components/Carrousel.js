function Carrousel() {
    return (
        <>
            <div id='Popular on Netflix' className='flex-col w-auto h-3 z-10 px-4 ml-10 mt-2 opacity-25'>
                <div className='flex flex-row gap-2 px-4 w-full h-36'>
                    {
                        POPULARLIST.map(({ title, imageURL }) => {
                            return (
                                <div
                                    key={title}
                                    // width="420"
                                    // height="120"
                                    className='flex w-96 h-[120px] bg-red-600'
                                // alt={title}
                                >
                                    {title}
                                </div>
                            )
                        })}
                </div>
            </div>
        </>
    )
}



const POPULARLIST = [
    {
        title: "Locke & Key",
        link: "/browse",
        imageURL: ""
    },
    {
        title: "Jojo's Bizarre",
        link: "/browse",
        imageURL: ""
    },
    {
        title: "Good Doctor",
        link: "/browse",
        imageURL: ""
    },
    {
        title: "Trainwreck: woodstock 99",
        link: "/browse",
        imageURL: ""
    },
    {
        title: "Resident Evil",
        link: "/browse",
        imageURL: ""
    },
    {
        title: "Brooklyn Nine-nine",
        link: "/browse",
        imageURL: ""
    },
    {
        title: "Haikyuu: Voley's ACES",
        link: "/browse",
        imageURL: ""
    },
    {
        title: "Tokyo Ghoul",
        link: "/browse",
        imageURL: ""
    }

]

export default Carrousel