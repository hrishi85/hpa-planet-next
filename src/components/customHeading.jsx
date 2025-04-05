export default function CustomHeading({text1,text2,withShadow = true}){
    return(
        <>
            <h1 className="text-subtle-gold text-[90px] font-bold leading-[0.6em] align-top pb-2 uppercase  absolute top-0 left-0 z-10">
                <span className="text-[48px] font-thin italic">{text1}</span><br />
                <span>{text2}</span>
            </h1>
            {
                withShadow && <h1 className="text-[90px] font-bold leading-[0.7em] align-top pb-2 uppercase text-darkgrey golden-shadows ml-11 mt-[0.6em] opacity-70">
                    <span className="text-[48px] font-thin italic">{text1}</span><br />
                    <span>{text2}</span>
                </h1>
            }
        </>
    )
}