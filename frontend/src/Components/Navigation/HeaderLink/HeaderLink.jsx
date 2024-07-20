import './HeaderLink.scss';
// eslint-disable-next-line react/prop-types
const HeaderLink = ({ title, scrollToId }) => {

  return (
    // eslint-disable-next-line react/prop-types
    <li className={`${title.toLowerCase()} nav-item`} onClick={scrollToId}>{title}</li>
  )
}

export default HeaderLink;