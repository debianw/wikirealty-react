//
import { makeStyles } from '@material-ui/styles'

//
const useGlobalStyles = makeStyles({
  '@global': {
    html: {
      height: '100%',
    },

    body: {
      background: '#f4f6f7',
      height: '100%'
    },
    '#root': {
      height: '100%'
    }
  }
})

//
export default useGlobalStyles