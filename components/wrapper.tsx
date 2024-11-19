
const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='w-full h-auto max-w-[1536px] mx-auto sm:px-5 py-2'>{children}</div>
    )
}

export default Wrapper