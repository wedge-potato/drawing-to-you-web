const DBadge = ({text}:{text:string}) => {
    return (
        <div className='py-1.5 px-5 border border-black rounded-3xl w-fit'>
            <span className='text-[11px]'>{text}</span>
        </div>
    )
}

export default DBadge;
