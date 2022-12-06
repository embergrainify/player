import dynamic from 'next/dynamic';
import DeviceInfo from '../components/deviceInfo';
import BottomBar from '../components/bottomBar';

export default function Home() {

  console.log('Home re-render');

  let aud: HTMLAudioElement;

  const MediaDevices = dynamic(() => import('../components/mediaDevices'), {
    ssr: false,
  })

  if (typeof window !== 'undefined') {
    console.log('On CLIENT');

    aud = new Audio('/Delegation - Darlin (I Think About You) (Remix).mp3');
    aud.volume = 0.1;

    navigator.permissions.query({ name: 'geolocation' }).then((result) => {
      console.log('state: ', result.state);
      if (result.state === 'granted') {
        //showLocalNewsWithGeolocation();

      } else if (result.state === 'prompt') {
        // showButtonToEnableLocalNews();
      }
      // Don't do anything if the permission was denied.
     });

  }

  const selectMenu = (menuItem: number) => {
    console.log(menuItem);
    if (menuItem === 2) {
      aud.play();
    }
  }

  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      {/* <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/IbIaMhU3_Vo"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen /> */}

        <DeviceInfo />
      <div className='w-full bg-red-400'>
      test
      </div>

      {/* <MediaDevices /> */}

        <BottomBar selectMenu={selectMenu} />
    </div>
  )
}
