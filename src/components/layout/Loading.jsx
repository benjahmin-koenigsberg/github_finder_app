import LoadingGif from './assets/loaidng.gif'

const Loading = () => {
  return (
    <div className='w-100 mt-20' >
        <img className='text-center mx-auto'
         width={180}
        src={LoadingGif}
        alt='snoop dogg dancing gif' />
    </div>
  )
}

export default Loading
