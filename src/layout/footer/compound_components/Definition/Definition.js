import { string } from 'prop-types'
import { DefinitionStyle } from './Definition.style'

function Definition({
  headContext,
  className,
  href,
  dtContext,
  link = true,
  ddContext,
  ...resrProps
}) {
  return (
    <DefinitionStyle className={className} {...resrProps}>
      <b>{dtContext}</b>:
      {link ? (
        <span>
          <a href={href}>{ddContext}</a>
        </span>
      ) : (
        <span>{ddContext}</span>
      )}
    </DefinitionStyle>
  )
}

Definition.propTypes = {
  href: string.isRequired,
  dtContext: string,
  ddContext: string,
}

export default Definition
