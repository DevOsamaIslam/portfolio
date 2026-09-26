/**
 * External (`http`/`https`) links should open in a new tab with a safe
 * `rel`; `mailto:`/`tel:` links must stay in the current context.
 */
export function externalLinkProps(href: string) {
  return href.startsWith('http')
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}
}

export function isExternalLink(href: string) {
  return href.startsWith('http')
}
