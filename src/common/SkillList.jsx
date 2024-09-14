
function SkillList( {src, skill} ) {
  return (
    <span>
        <img src={ src } alt="checkmark Icon" />
        <p>{skill}</p>
        </span>
  )
}

export default SkillList
