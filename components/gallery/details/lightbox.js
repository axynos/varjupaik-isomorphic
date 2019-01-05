import Image from './lightboxImage'

const LightBox = (props) => {
  return (
    <div className={props.className}>
      <Image data={props.data} />
    </div>
  )
}

export default LightBox
