
import { ClimbingBoxLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className='min-h-screen min-w-screen flex justify-center items-center'>
        <ClimbingBoxLoader
        color= '#000000'
        loading={true}
       
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    
    </div>
  )
}

export default Loading
