const ProtectedRoute = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Layout>
      <Component {...rest} />
    </Layout>
  )
}

export default ProtectedRoute
