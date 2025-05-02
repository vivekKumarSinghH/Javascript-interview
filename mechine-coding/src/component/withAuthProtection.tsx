type WithAuthProps = {
  isLoggedIn: boolean;
};
function withAuthProtection<P extends WithAuthProps>(
  WrappedComponent: React.ComponentType<P>
) {
  return (props: P) => {
    if (!props.isLoggedIn) {
      return <div>please login</div>;
    }
    return <WrappedComponent {...props} />;
  };
}

export default withAuthProtection;
