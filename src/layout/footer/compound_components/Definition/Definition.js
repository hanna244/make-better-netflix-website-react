import { string } from 'prop-types'
import { DefinitionStyle } from './Definition.style'

function Definition({ headContext, href, dtContext, link, ddContext }) {
  return (
    <>
      <DefinitionStyle>{headContext}</DefinitionStyle>
      <br className="linkBreak" />
      <DefinitionStyle as="span">
        <b>{dtContext}</b>:
        {link ? <a href={href}>{ddContext}</a> : <span>{ddContext}</span>}
      </DefinitionStyle>
    </>
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
