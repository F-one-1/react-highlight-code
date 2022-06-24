import './style/TypeShow.scss'
export default function TypeShow(props) {
  const { TL = 'js' } = props
  console.log(props, 'props')
  return (
    <div className="TL">
      <div className="TL_word">{TL}</div>
    </div>
  )
}
