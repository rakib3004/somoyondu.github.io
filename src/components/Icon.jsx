const Icon = ({socialMediaName}) => {
  return (
    <div>
        <a href={`https://www.${socialMediaName}.com/somoyondu`}><img src={`${socialMediaName}.png`} alt={socialMediaName} /></a>
    </div>
  )
}

export default Icon;