

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className="text-3xl font-bold">
        Player
      </h1>
      <div>Test</div>

      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/IbIaMhU3_Vo" 
        title="YouTube video player"
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen />

    </div>
  )
}
