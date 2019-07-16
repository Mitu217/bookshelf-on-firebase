import firebase from 'firebase';
import React from 'react';
import clientCredentials from '../credentials/client';

interface IProps {
  user: any;
}

interface IState {
  user: any;
}

export default class Index extends React.Component<IProps, IState> {

  public static async getInitialProps({ req }: any) {
    const user = req && req.session ? req.session.decodedToken : null;
    const messages = null;
    return { user, messages };
  }

  constructor(props: IProps) {
    super(props);
    this.state = {
      user: this.props.user,
    };
  }

  public componentDidMount() {
    firebase.initializeApp(clientCredentials);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        return user
          .getIdToken()
          .then((token) => {
            return fetch('/api/login', {
              body: JSON.stringify({ token }),
              credentials: 'same-origin',
              headers: new Headers({ 'Content-Type': 'application/json' }),
              method: 'POST',
            });
          });
      } else {
        this.setState({ user: null });
        fetch('/api/logout', {
          credentials: 'same-origin',
          method: 'POST',
        });
      }
    });
  }

  public render() {
    const { user } = this.state;

    return (
      <div>
        {user ? (
          <button onClick={this.handleLogout}>Logout</button>
        ) : (
          <button onClick={this.handleLogin}>Login</button>
        )}
        { user && (
          <div>
            <p>{user.displayName} さんがログインしました</p>
            <p>{user.uid}</p>
          </div>
        )}
      </div>
    );
  }

  private handleLogin() {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  private handleLogout() {
    firebase.auth().signOut();
  }
}
