import { string } from 'prop-types'
import { DefinitionStyle } from './Definition.style'

function Definition({ headContext, href, dtContext, link, ddContext }) {
  return (
    <DefinitionStyle>
      <b>{dtContext}</b>:
      {link ? <a href={href}>{ddContext}</a> : <span>{ddContext}</span>}
    </DefinitionStyle>
  )
}

Definition.defaultProps = {
  href: '/',
}

Definition.propTypes = {
  href: string,
  dtContext: string,
  ddContext: string,
}

export default Definition
