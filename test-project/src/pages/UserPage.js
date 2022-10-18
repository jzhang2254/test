import firebase from "firebase/compat/app";
import "firebase/compat/auth";

function UserPage() {
    const auth = firebase.auth();
    return (
      <>
        <h1>Hello</h1>
        <h1>Your User ID is {auth.currentUser.displayName}</h1>
      </>
    );
  }

export default UserPage;