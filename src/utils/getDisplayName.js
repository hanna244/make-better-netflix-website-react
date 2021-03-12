function displayName(Component) {
  return Component.displayName || Component.name || 'AnonymousComponent'
}

export default displayName
