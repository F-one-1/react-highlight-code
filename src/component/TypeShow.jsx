import './style/TypeShow.scss'
export default function TypeShow(props) {
  const { langName = 'Bash' } = props
  return (
    <div className="TL">
      <div className="TL_word">{langName}</div>
    </div>
  )
}
