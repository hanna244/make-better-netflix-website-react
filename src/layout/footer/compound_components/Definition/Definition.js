import { string, bool } from 'prop-types'
import { DefinitionStyle } from './Definition.style'

function Definition({
  className,
  ddContext,
  dtContext,
  emailLink,
  telLink,
  ...resrProps
}) {
  return (
    <DefinitionStyle className={className} {...resrProps}>
      <b>{dtContext}</b>:
      {emailLink ? (
        <span>
          <a href={`mailto:${ddContext}`}>{ddContext}</a>
        </span>
      ) : telLink ? (
        <span>
          <a href={`tel:${ddContext}`}>{ddContext}</a>
        </span>
      ) : (
        <span>{ddContext}</span>
      )}
    </DefinitionStyle>
  )
}

Definition.propTypes = {
  dtContext: string,
  ddContext: string,
  className: string,
  emailLink: bool,
  telLink: bool,
}

export default Definition
