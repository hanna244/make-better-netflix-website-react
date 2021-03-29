import { LinkItemStyle } from './LinkListItem.style'

function LinkListItem({ href, label, ...restProps }) {
  return (
    <LinkItemStyle {...restProps}>
      <a rel="noreferrer" target="_blank" href={href}>
        {label}
      </a>
    </LinkItemStyle>
  )
}

export default LinkListItem
