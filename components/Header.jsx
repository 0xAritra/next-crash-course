import headerStyles from "../styles/Header.module.css"

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        Web Dev <span>News</span>
      </h1>
      <p className={headerStyles.description}>Your daily dose of Web Dev</p>
    </div>
  )
}

export default Header
