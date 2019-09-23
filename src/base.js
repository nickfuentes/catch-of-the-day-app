import Rebase from "re-base"
import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDxwdcmyYINB4ffZXqRwldS8qWPe6XBx-U",
  authDomain: "catch-of-the-day-6a64f.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-6a64f.firebaseio.com",
  projectId: "catch-of-the-day-6a64f"
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base
