import { LinkItemStyle } from './LinkListItem.style'

function LinkListItem({ href, label, ...restProps }) {
  return (
    <LinkItemStyle {...restProps}>
      <a href={href}>{label}</a>
    </LinkItemStyle>
  )
}

export default LinkListItem
