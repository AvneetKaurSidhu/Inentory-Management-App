import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';
import SquareIcon from '@mui/icons-material/Square';
import './unitEntries.scss';
const FundBody = ({ status, serial, type, name, assignedTo, from }) => {
  return (
    <tr className='unit-row'>
      <td className='unit__status-buttons'>
        <button
          className={
            status === 'Taken'
              ? 'unit__button-taken'
              : status === 'Broken'
              ? 'unit__button-broken'
              : 'unit__button-deprecated'
          }
        >
          {status}
        </button>
      </td>
      <td className='pt-3'>{serial}</td>
      <td className='pt-3'>
        {type === '1111111' ? (
          <HighlightAltIcon/>
        ) : type === 'Chassis' ? (
          <SquareIcon/>
        ) : type === 'Memory' ? (
          <ModeStandbyIcon/>
        ) : (
          ''
        )}
        {"  "+ type}
      </td>
      <td className='pt-3'>{name}</td>
      <td className='pt-3'>{assignedTo}</td>
      <td className='pt-3'>{from}</td>
    </tr>
  )
}
export default FundBody
